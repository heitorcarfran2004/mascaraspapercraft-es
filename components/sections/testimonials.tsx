"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { testimonialImages } from "@/content/site";

const SLIDE_WIDTH = 72; // % da largura visível ocupada pelo print central
const PEEK_OFFSET = (100 - SLIDE_WIDTH) / 2; // sobra dividida entre os dois lados

export function Testimonials() {
  const count = testimonialImages.length;

  // Slides estendidos: [últimoClone, ...reais, primeiroClone] para loop contínuo.
  const slides = [
    testimonialImages[count - 1],
    ...testimonialImages,
    testimonialImages[0],
  ];

  // Começa no 1º real (índice 1); assim o último (clone em 0) já espia à esquerda.
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);

  const next = () => {
    setAnimate(true);
    setPos((p) => p + 1);
  };
  const prev = () => {
    setAnimate(true);
    setPos((p) => p - 1);
  };
  const goToReal = (i: number) => {
    setAnimate(true);
    setPos(i + 1);
  };

  // Ao terminar de animar para um clone, salta sem transição para o real equivalente.
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (pos === count + 1) {
      setAnimate(false);
      setPos(1);
    } else if (pos === 0) {
      setAnimate(false);
      setPos(count);
    }
  };

  const activeDot = (pos - 1 + count) % count;

  // Swipe por toque
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) next();
    else if (delta < -50) prev();
    touchStartX.current = null;
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-[30px] md:text-[40px] font-bold leading-[40px] md:leading-[54px]">
            Quem Comprou{" "}
            <span className="block gradient-text">Aprovou e Recomenda</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="overflow-hidden">
            <div
              className={cn(
                "flex",
                animate && "transition-transform duration-500 ease-out",
              )}
              style={{
                transform: `translateX(calc(${PEEK_OFFSET}% - ${pos * SLIDE_WIDTH}%))`,
              }}
              onTransitionEnd={handleTransitionEnd}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {slides.map((src, i) => {
                const isActive = i === pos;
                return (
                  <div
                    key={i}
                    className="w-[72%] shrink-0 grow-0 px-2"
                    aria-hidden={!isActive}
                  >
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-card shadow-card",
                        animate && "transition-all duration-500",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.82] opacity-50",
                      )}
                    >
                      <Image
                        src={src}
                        alt={`Depoimento ${i}`}
                        width={0}
                        height={0}
                        sizes="(min-width: 768px) 460px, 75vw"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Setas sobrepostas aos depoimentos laterais */}
          <button
            type="button"
            onClick={prev}
            aria-label="Depoimento anterior"
            className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-colors hover:bg-card"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo depoimento"
            className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-colors hover:bg-card"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots de paginação */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonialImages.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goToReal(i)}
                aria-label={`Ir para o depoimento ${i + 1}`}
                className={cn(
                  "h-3 rounded-full transition-all duration-300",
                  i === activeDot
                    ? "w-8 bg-primary"
                    : "w-3 bg-muted hover:bg-muted-foreground/50",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

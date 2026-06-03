"use client";

import Image from "next/image";

import { CtaButton } from "@/components/cta-button";
import { hero } from "@/content/site";
import { scrollToPricing } from "@/lib/scroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-narrow section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-muted-foreground/40 bg-card px-2.5 py-2 animate-fade-in-up">
              <span className="rounded-full bg-[#e11e14] px-3 py-1 text-sm font-bold text-white">
                {hero.badgeCount}
              </span>
              <span className="pr-2 text-sm font-extrabold uppercase tracking-wide text-accent">
                {hero.badgeLabel}
              </span>
            </span>

            <h1
              className="text-[36px] md:text-[47px] lg:text-[59px] font-extrabold leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {hero.titleLead}{" "}
              <span className="gradient-text">{hero.titleHighlight}</span>{" "}
              {hero.titleTail}
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up !mt-[15px]"
              style={{ animationDelay: "0.2s" }}
            >
              {hero.subtitle}
            </p>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CtaButton
                onClick={scrollToPricing}
                className="w-full sm:w-auto"
              >
                {hero.cta}
              </CtaButton>
            </div>
          </div>

          {/* Imagem */}
          <div
            className="relative animate-fade-in-up lg:-mt-[116px]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-card p-3 shadow-elevated">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  width={hero.image.width}
                  height={hero.image.height}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

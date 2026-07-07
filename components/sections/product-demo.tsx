import { ProductVideo } from "@/components/product-video";
import { productDemo } from "@/content/site";

export function ProductDemo() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {productDemo.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {productDemo.titleLead}{" "}
            <span className="gradient-text">{productDemo.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {productDemo.subtitle}
          </p>
        </div>

        {/* Mockup de smartphone com o vídeo dentro */}
        <div className="relative mx-auto w-full max-w-[300px]">
          {/* Botões laterais */}
          <span className="absolute -left-[3px] top-28 h-14 w-[3px] rounded-l bg-neutral-800" />
          <span className="absolute -right-[3px] top-24 h-10 w-[3px] rounded-r bg-neutral-800" />

          {/* Moldura */}
          <div className="relative rounded-[2.75rem] bg-neutral-900 p-2.5 shadow-elevated ring-1 ring-black/10">
            {/* Tela */}
            <div className="relative overflow-hidden rounded-[2.25rem] bg-black">
              <ProductVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

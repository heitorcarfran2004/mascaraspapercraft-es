import { GalleryCarousel } from "@/components/gallery-carousel";
import { galleryCategories } from "@/content/site";

export function Gallery() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            O Que <span className="gradient-text">Você Pode Criar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns exemplos reais de montagens feitas com nossos moldes.
          </p>
        </div>

        <div className="space-y-12">
          {galleryCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-4 px-1">
                <h3 className="text-xl md:text-2xl font-bold gradient-text">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {category.subtitle}
                </p>
              </div>
              <GalleryCarousel images={category.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

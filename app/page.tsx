import { TopBanner } from "@/components/sections/top-banner";
import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { Gallery } from "@/components/sections/gallery";
import { Equipment } from "@/components/sections/equipment";
import { Testimonials } from "@/components/sections/testimonials";
import { ProductDemo } from "@/components/sections/product-demo";
import { Bonus } from "@/components/sections/bonus";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Hero />
      <ProductDemo />
      <Benefits />
      <Gallery />
      <Equipment />
      <Testimonials />
      <Bonus />
      <Pricing />
      <Faq />
    </main>
  );
}

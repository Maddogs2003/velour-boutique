import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandValues } from "@/components/home/brand-values";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandValues />
      <FeaturedProducts />
    </>
  );
}

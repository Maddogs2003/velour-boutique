import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandValues } from "@/components/home/brand-values";
import { EditorialBanner } from "@/components/home/editorial-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandValues />
      <Categories />
      <FeaturedProducts />
      <EditorialBanner />
    </>
  );
}

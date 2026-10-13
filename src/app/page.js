import HeroBanner from "@/components/HeroBanner";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <PopularProducts />
    </main>
  );
}

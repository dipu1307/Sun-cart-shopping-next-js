import HeroBanner from "@/components/HeroBanner";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <PopularProducts />
      <WhyChooseUs/>
      <SummerCareTips/>
      <TopBrands/>
    </main>
  );
}

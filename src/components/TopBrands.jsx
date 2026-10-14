
import Marquee from "react-fast-marquee";
import Image from "next/image";

import brands from "@/data/topBrands";

export default function TopBrands() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#56836F]">
          Our Partners
        </p>

        <h2 className="text-3xl font-bold text-[#244D3F] md:text-4xl">
          Brands You Love
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Discover trusted brands for your summer lifestyle and everyday needs.
        </p>
      </div>

      <Marquee
        speed={40}
        direction="left"
        pauseOnHover
        gradient
        gradientColor="#ffffff"
        gradientWidth={60}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-5 flex h-28 w-40 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition duration-300 hover:border-[#244D3F]/30 hover:shadow-md md:mx-7 md:w-48"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={160}
              height={80}
              className="h-16 w-full object-contain"
              sizes="160px"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

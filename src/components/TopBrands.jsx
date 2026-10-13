import { Sparkles } from 'lucide-react';
import React from 'react';
import brands from "@/data/topBrands";

const TopBrands = () => {
    return (
      <section className="bg-white px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E87551]">
              Brands You Love
            </p>

            <h2 className="text-3xl font-extrabold text-[#174C3E] md:text-4xl">
              Top Brands
            </h2>

            <p className="mt-4 text-gray-600">
              Explore brands bringing style, comfort, and freshness to your
              summer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <article
                key={brand.id}
                className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-[#F8FAF9] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#174C3E]/20 hover:bg-[#E5F1EB] hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#174C3E] shadow-sm transition group-hover:bg-[#174C3E] group-hover:text-white">
                  <Sparkles size={23} />
                </div>

                <h3 className="font-bold text-[#174C3E]">{brand.name}</h3>

                <p className="mt-1 text-xs text-gray-500">{brand.category}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
};

export default TopBrands;
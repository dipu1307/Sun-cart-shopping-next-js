import { Droplets, Shirt, Sun } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import tips from "@/data/summerCareTips";

const iconMap = {
    Sun: Sun,
    Droplets: Droplets,
    Shirt: Shirt,
}

const SummerCareTips = () => {
    return (
      <section className="bg-[#F8FAF9] px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E87551]">
              Summer Wellness
            </p>

            <h2 className="text-3xl font-extrabold text-[#174C3E] md:text-4xl">
              Summer Care Tips
            </h2>

            <p className="mt-4 text-gray-600">
              Simple everyday habits to help you enjoy a happier, healthier
              summer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip) => {
              const Icon = iconMap[tip.icon];

              return (
                <article
                  key={tip.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={tip.image}
                      alt={tip.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F1EB]">
                      <Icon size={24} className="text-[#174C3E]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#174C3E]">
                      {tip.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {tip.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default SummerCareTips;
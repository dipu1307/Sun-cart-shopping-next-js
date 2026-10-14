import React from 'react';
import benefits from '@/data/productDelivery';
import { BadgeCheck, RefreshCcw, ShieldCheck, Truck } from 'lucide-react';

const iconMap = {
    Truck: Truck,
    BadgeCheck: BadgeCheck,
    ShieldCheck: ShieldCheck,
    RefreshCcw: RefreshCcw,
};

const WhyChooseUs = () => {
    return (
      <section className="bg-white px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* section heading  */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E87551]">
              The SunCart Difference
            </p>
            <h2 className="text-3xl font-extrabold text-[#174C3E] md:text-4xl">
              Why Choose SunCart?
            </h2>
            <p className="mt-4 text-gray-600">
              Everything you need for a happier, cooler, and more enjoyable
              summer.
            </p>
          </div>
          {/* Benefits Grid  */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.iconName];
              return (
                <article
                  key={benefit.id}
                  className="group rounded-2xl border border-gray-100 bg-[#F8FAF9] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#174C3E]/20 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F1EB] transition duration-300 group-hover:bg-[#174C3E]">
                    {Icon && (
                      <Icon
                        size={30}
                        strokeWidth={1.8}
                        className="text-[#174C3E] transition duration-300 group-hover:text-white"
                      />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#174C3E]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default WhyChooseUs;
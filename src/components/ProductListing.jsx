'use client';


import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';



const ProductListing = ({products=[],categories=[]}) => {

    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const categoryNames = [
      "All Products",
      ...categories.map((category) => category.name),
    ];
    const filteredProducts =
      selectedCategory === "All Products"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    return (
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
          {/* Left Sidebar */}
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-4 text-lg font-bold text-[#244D3F]">
              Categories
            </h2>

            <div className="flex flex-col gap-2">
              {categoryNames.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                    selectedCategory === category
                      ? "bg-[#244D3F] font-semibold text-white"
                      : "text-gray-600 hover:bg-[#F0F5F1] hover:text-[#244D3F]"
                  }`}
                >
                  {category}

                  {category === "All Products" && (
                    <span className="ml-2">({products.length})</span>
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Product Grid */}
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#244D3F]">
                {selectedCategory}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[#56836F]">
                      {product.brand}
                    </p>

                    <h3 className="font-semibold text-gray-800">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="font-bold text-[#244D3F]">
                        ${Number(product.price).toFixed(2)}
                      </span>

                      <span className="text-sm text-amber-600">
                        ★ {product.rating}
                      </span>
                    </div>

                    {product.originalPrice && (
                      <p className="mt-1 text-sm text-gray-400 line-through">
                        ${Number(product.originalPrice).toFixed(2)}
                      </p>
                    )}
                    <Link
                      href={`/products/${product.id}`}
                      className="mt-4 block w-full rounded-lg bg-[#244D3F] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#19392E]"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="py-12 text-center text-gray-500">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </section>
    );
};

export default ProductListing;
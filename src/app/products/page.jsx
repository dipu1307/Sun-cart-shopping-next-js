
import ProductListing from '@/components/ProductListing';
import { getCategories, getProducts } from '@/lib/data';
import React from 'react';



const ProductsPage =async () => {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  console.log(products);
    return (
      <div>
        <main className="min-h-screen bg-[#F8FAF9]">
          <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#dd2c0d]">
              Explore Our Collection
            </p>

            <h1 className="text-3xl font-bold text-[#244D3F] md:text-4xl">
              All Products
            </h1>

            <p className="mt-3 max-w-2xl text-gray-500">
              Discover summer essentials selected for your everyday lifestyle.
            </p>
          
          </section>
          <ProductListing products={products} categories={categories} />
        </main>
      </div>
    );
};

export default ProductsPage;
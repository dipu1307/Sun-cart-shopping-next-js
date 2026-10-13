import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';
import products from '@/data/products';

const PopularProducts = () => {
    return (
      <section className="bg-[#F8FAF9] px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#E87551]">
                Handpicked for You
              </p>
              <h2 className="text-3xl font-extrabold text-[#174C3E] md:text-4xl">
                Popular Products
              </h2>
              <p className="mt-3 max-w-xl text-gray-600">
                Discover our favorite summer essentials, picked just for you.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold text-[#174C3E] transition hover:text-[#E87551]"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {products.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
            })}
          </div>
        </div>
      </section>
    );
};

export default PopularProducts;
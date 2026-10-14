import { getProductsById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ProductDetailsPage = async({params}) => {
    const {id} = await params;
    const product = await getProductsById(id);

    if(!product){
        notFound();
    }
    return (
      <main className="min-h-screen bg-[#F8F9FA] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/products"
            className="mb-8 inline-block text-sm font-medium text-green-800 hover:underline"
          >
            ← Back to Products
          </Link>

          <div className="grid gap-10 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-10">
            <div className="relative overflow-hidden rounded-xl bg-gray-50 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="h-full max-h-[500px] min-h-[300px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#56836F]">
                {product.brand}
              </p>

              <h1 className="text-3xl font-bold text-[#244D3F] md:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-sm text-gray-500">
                Category: {product.category}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-2xl font-bold text-[#244D3F]">
                  ${Number(product.price).toFixed(2)}
                </span>

                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${Number(product.originalPrice).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="mt-4 text-amber-600">★ {product.rating} / 5</p>

              <p className="mt-6 leading-7 text-gray-600">
                {product.description ||
                  "Discover this summer essential, selected for your everyday lifestyle."}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                {Number(product.stock) > 0
                  ? `${product.stock} items in stock`
                  : "Currently out of stock"}
              </p>

              <button
                disabled={Number(product.stock) <= 0}
                className="mt-8 w-full rounded-xl bg-[#244D3F] px-6 py-3 font-semibold text-white transition hover:bg-[#19392E] disabled:cursor-not-allowed disabled:bg-gray-400 md:w-fit"
              >
                {Number(product.stock) > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
};

export default ProductDetailsPage;
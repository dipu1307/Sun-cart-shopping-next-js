
import { Button } from "@heroui/react";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#F36B55] px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.brand}
        </p>

        <h3 className="mt-1 line-clamp-1 text-base font-bold text-[#174C3E]">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-[#174C3E]">
            ${Number(product.price).toFixed(2)}
          </p>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star
              size={16}
              className="fill-[#F9D66B] text-[#E4B52B]"
            />
            <span>{product.rating}</span>
          </div>
        </div>

        <Button
          fullWidth
          className="mt-4 bg-[#174C3E] font-semibold text-white hover:bg-[#10382E]"
          startContent={<ShoppingCart size={18} />}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;


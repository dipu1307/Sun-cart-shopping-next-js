"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { cartItems, setCartItems } = useCart();

  const handleAddToCart = () => {

    console.log("add to cart")
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={Number(product.stock) <= 0}
      className="mt-8 w-full rounded-xl bg-[#244D3F] px-6 py-3 font-semibold text-white transition hover:bg-[#19392E] disabled:cursor-not-allowed disabled:bg-gray-400 md:w-fit"
    >
      {Number(product.stock) > 0 ? "Add to Cart" : "Out of Stock"}
    </button>
  );
}

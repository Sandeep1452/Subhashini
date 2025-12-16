'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);

  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="font-semibold mt-3">{product.name}</h2>

      {/* Variant Selector */}
      <select
        className="mt-2 w-full border p-2 rounded"
        value={selectedVariant.size}
        onChange={(e) => {
          const variant = product.variants.find(
            (v: any) => v.size === e.target.value
          );
          setSelectedVariant(variant);
        }}
      >
        {product.variants.map((variant: any) => (
          <option key={variant.size} value={variant.size}>
            {variant.size} – ₹{variant.price}
          </option>
        ))}
      </select>

          <button
              onClick={() => {
                  addToCart(product, selectedVariant);
                  setAdded(true);

                  setTimeout(() => setAdded(false), 800); // reset after blink
              }}
              className={`mt-3 px-4 py-2 rounded w-full transition-all duration-300
               ${added
                      ? 'bg-green-800 scale-105'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
          >
              {added ? 'Added ✓' : 'Add to Cart'}
          </button>
      </div>
  );
}

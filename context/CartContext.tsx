'use client';

import { createContext, useContext, useState } from 'react';

type CartItem = {
    id: string;
    productId: string;
    name: string;
    image: string; 
    image1: string;
    size: string;
    price: number;
    qty: number;
  };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: any, variant: any) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: any, variant: any) => {
    setCart(prev => {
      const id = `${product.id}-${variant.size}`;
      const existing = prev.find(item => item.id === id);

      if (existing) {
        return prev.map(item =>
          item.id === id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id,
          productId: product.id,
          name: product.name,
          size: variant.size,
          price: variant.price,
          image: product.image,
          image1: product.image1,
          qty: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

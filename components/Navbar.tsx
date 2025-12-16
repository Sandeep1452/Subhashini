'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between items-center p-4 bg-green-700 text-white">
        <Link href="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Subhashini Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="font-bold text-lg">Subhashini Products</span>
      </Link>

      <Link href="/cart">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

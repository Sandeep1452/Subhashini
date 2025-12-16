'use client';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // PayButton for cart total
  const PayButton = ({ amount }: { amount: number }) => {
    const handleGPay = () => {
      const upiId = 'paytm.s206wak@pty'; // Replace with your UPI ID
      const name = 'Kuppala Sandeep';
      const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
      window.open(upiUrl, '_blank'); // Opens the UPI/GPay app
    };

    return (
      <button
        onClick={handleGPay}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded w-full"
      >
        Pay with GPay / UPI
      </button>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cart.length === 0 && <p className="mt-4">Cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 mt-4 border-b pb-4"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="h-20 w-20 object-contain border rounded"
          />

          {/* Details */}
          <div className="flex-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">
              {item.size} × {item.qty}
            </p>
            <p className="font-semibold">₹{item.price * item.qty}</p>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <h2 className="mt-6 font-semibold">Total: ₹{total}</h2>

      {/* Pay Button */}
      {cart.length > 0 && <PayButton amount={total} />}
    </div>
  );
}

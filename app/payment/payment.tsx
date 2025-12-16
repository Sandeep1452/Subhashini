export function PayButton({ amount }: { amount: number }) {
    const handleGPay = () => {
      // UPI format: upi://pay?pa=upi-id@bank&pn=Name&am=Amount&cu=INR
      const upiId = 'sandeepkuppala123@oksbi';
      const name = 'Sandeep';
      const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
  
      // Open in a new tab (GPay app will handle if on mobile)
      window.open(upiUrl, '_blank');
    };
  
    return (
      <button
        onClick={handleGPay}
        className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded w-full"
      >
        Pay with GPay / UPI
      </button>
    );
  }
  
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="p-8">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          Natural Organic Coconut & Herbal Oils
        </h1>
        <p className="mt-3 text-black font-bold">
          Pure. Ayurvedic. Trusted.
        </p>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

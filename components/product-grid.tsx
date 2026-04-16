import { Product } from '@/lib/types';
import { ProductCard } from '@/components/product-card';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <div key={product.slug} className="h-full">
          <ProductCard key={product.slug} product={product} />
        </div>
      ))}
    </div>
  );
}

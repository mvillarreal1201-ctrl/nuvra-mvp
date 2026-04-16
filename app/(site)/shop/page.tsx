import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { ProductGrid } from '@/components/product-grid';
import { Disclosure } from '@/components/disclosure';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop All',
  description: 'Browse Nuvra’s curated edit of cat products chosen for calm homes and thoughtful living.',
};

export default function ShopPage() {
  return (
    <Container>
      <section className="py-14 sm:py-18">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Shop All</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A calm edit of cat essentials.</h1>
          <p className="text-base leading-7 text-[#5a524a]">Curated across climbing, rest, feeding, scratching, and travel — with aesthetics and everyday use in mind.</p>
        </div>
      </section>
      <Disclosure />
      <section className="py-8 sm:py-10">
        <ProductGrid products={products} />
      </section>
    </Container>
  );
}

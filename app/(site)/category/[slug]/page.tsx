import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/container';
import { ProductGrid } from '@/components/product-grid';
import { Disclosure } from '@/components/disclosure';
import { categories } from '@/data/categories';
import { getCategoryBySlug, getProductsByCategory } from '@/lib/utils';

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <Container>
      <section className="py-14 sm:py-18">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Category</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{category.name}</h1>
          <p className="text-base leading-7 text-[#5b544d]">{category.heroCopy}</p>
        </div>
      </section>
      <Disclosure />
      <section className="py-8 sm:py-10">
        <ProductGrid products={categoryProducts} />
      </section>
    </Container>
  );
}

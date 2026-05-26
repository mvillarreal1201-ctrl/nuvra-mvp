import Link from 'next/link';
import { Container } from '@/components/container';
import { Hero } from '@/components/hero';
import { CategoryCard } from '@/components/category-card';
import { ProductGrid } from '@/components/product-grid';
import { ArticleCard } from '@/components/article-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { categories } from '@/data/categories';
import { getFeaturedProducts } from '@/lib/utils';
import { getAllPosts } from '@/lib/blog';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const posts = getAllPosts().slice(0, 3);

  return (
    <Container>
      <Hero />

      <section className="py-16 sm:py-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
  Nuvra Living
</p>

<h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
  Elevated bowls for modern cat living
</h2>

<p className="mt-3 text-gray-500 max-w-md">
 Thoughtfully selected feeding bowls designed for comfort, cleaner meals, and calmer spaces.
</p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Editor’s Picks</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Curated feeding essentials for calmer cat living.</h2>
              <p className="mt-3 text-gray-500 max-w-md">
            Three elevated bowls selected for comfort, cleaner fedding, and modern homes</p>
          </div>
          <Link href="/shop" className="hidden text-sm font-medium text-stoneink underline decoration-[#d6cabd] underline-offset-4 md:inline-block">
            View all
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="py-8 sm:py-12">
        <div className="card-surface grid gap-6 p-8 sm:grid-cols-3 sm:p-10">
          <div>
            <p className="eyebrow">Why we pick these</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Less noise. Better living.</h2>
          </div>
          <div>
            <h3 className="text-base font-medium">Home-aware</h3>
            <p className="mt-2 text-sm leading-6 text-[#5b544d]">We favor pieces that sit comfortably in calm, modern spaces instead of fighting the room.</p>
          </div>
          <div>
            <h3 className="text-base font-medium">Cat-first</h3>
            <p className="mt-2 text-sm leading-6 text-[#5b544d]">We look for comfort, enrichment, stability, and materials that stand up to regular use.</p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mb-6">
          <p className="eyebrow">From the journal</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Buying guides with a lighter touch.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </Container>
  );
}

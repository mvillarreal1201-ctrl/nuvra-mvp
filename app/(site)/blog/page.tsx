import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { ArticleCard } from '@/components/article-card';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Buying guides, roundups, and thoughtful cat product recommendations from Nuvra.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <section className="py-14 sm:py-18">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Blog</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Editorial guides for thoughtful cat living.</h1>
          <p className="text-base leading-7 text-[#5b544d]">Roundups, comparisons, and buying advice written to help you choose with more clarity and less noise.</p>
        </div>
      </section>
      <section className="grid gap-6 pb-10 lg:grid-cols-2">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </section>
    </Container>
  );
}

import type { Metadata } from 'next';
import { Container } from '@/components/container';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Nuvra and the editorial approach behind our cat-only product recommendations.',
};

export default function AboutPage() {
  return (
    <Container>
      <section className="mx-auto max-w-3xl py-14 sm:py-18">
        <p className="eyebrow">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Nuvra is a calmer way to shop for cat living.</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-[#534c45]">
          <p>
            We created Nuvra for cat owners who want their homes to feel thoughtful, warm, and well-edited — not overrun by noisy pet products.
          </p>
          <p>
            Our approach sits between editorial guidance and ecommerce: we curate pieces that support everyday life with cats while respecting materials, space, and visual calm.
          </p>
          <p>
            The result is a cat-only destination with fewer choices, clearer reasons, and a more considered shopping experience.
          </p>
        </div>
      </section>
    </Container>
  );
}

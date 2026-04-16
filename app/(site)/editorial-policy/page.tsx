import type { Metadata } from 'next';
import { Container } from '@/components/container';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'Read how Nuvra evaluates products, uses affiliate links, and maintains editorial standards.',
};

export default function EditorialPolicyPage() {
  return (
    <Container>
      <section className="mx-auto max-w-3xl py-14 sm:py-18">
        <p className="eyebrow">Editorial Policy & Affiliate Disclosure</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">How we choose what belongs here.</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-[#534c45]">
          <p>
            Nuvra may earn affiliate commissions from select retailers when you purchase through links on this site. That never changes the price you pay.
          </p>
          <p>
            We prioritize function, visual restraint, material quality, cleanability, and how well a product fits into a modern home. We do not aim to list everything available.
          </p>
          <p>
            Products are included because they match our editorial lens: useful, cat-aware, and aesthetically considered. When possible, we compare shape, footprint, maintenance, and overall home impact — not just price.
          </p>
          <p>
            Sponsored placements should be clearly labeled if introduced later. Until then, the site is structured as an editorial-commerce experience built around curated recommendations.
          </p>
        </div>
      </section>
    </Container>
  );
}

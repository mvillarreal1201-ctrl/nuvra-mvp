import Link from 'next/link';
import { Container } from '@/components/container';

export default function NotFound() {
  return (
    <Container>
      <section className="py-24 text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">This page isn’t part of the current edit.</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#5b544d]">The link may be outdated, or the page may have moved as the site evolves.</p>
        <Link href="/" className="button-primary mt-8">Return home</Link>
      </section>
    </Container>
  );
}

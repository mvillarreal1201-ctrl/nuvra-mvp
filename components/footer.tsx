import Link from 'next/link';
import { Container } from '@/components/container';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#e6dbcf] py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-medium">Nuvra</p>
            <p className="max-w-md text-sm leading-6 text-[#5a524a]">
              Curated cat living for homes that value calm, utility, and considered design.
            </p>
            <p className="text-xs leading-5 text-[#766d64]">
              Affiliate disclosure: Nuvra may earn a commission when you purchase through select links, at no extra cost to you.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium">Explore</p>
            <ul className="space-y-2 text-sm text-[#5a524a]">
              <li><Link href="/shop">Shop All</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium">Policy</p>
            <ul className="space-y-2 text-sm text-[#5a524a]">
              <li><Link href="/editorial-policy">Editorial Policy</Link></li>
              <li><a href="mailto:hello@nuvra.example">hello@nuvra.example</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

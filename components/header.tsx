import Link from 'next/link';
import { Container } from '@/components/container';

const links = [
  { href: '/shop', label: 'Shop All' },
  { href: '/category/cat-trees', label: 'Categories' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e9dfd3] bg-cream/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="text-lg font-semibold tracking-[0.08em] text-stoneink focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream">
            NUVRA
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#4c463f] hover:text-stoneink focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/editorial-policy" className="hidden rounded-full border border-[#ddd2c5] px-4 py-2 text-sm font-medium text-stoneink md:inline-flex focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream">
            Editorial Policy
          </Link>
          <Link href="/shop" className="text-sm font-medium text-stoneink md:hidden focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream">
            Shop
          </Link>
        </div>
      </Container>
    </header>
  );
}

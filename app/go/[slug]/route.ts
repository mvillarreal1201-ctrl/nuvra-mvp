import { NextResponse } from 'next/server';
import { getProductBySlug } from '@/lib/utils';

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return NextResponse.redirect(new URL('/shop', request.url));
  }

  return NextResponse.redirect(product.href, {
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
      'Referrer-Policy': 'no-referrer-when-downgrade',
    },
  });
}

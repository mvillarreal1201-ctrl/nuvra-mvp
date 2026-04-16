import type React from 'react';
import Link from 'next/link';
import { Disclosure } from '@/components/disclosure';

export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="mt-12 text-2xl font-semibold tracking-[-0.03em]" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="mt-8 text-xl font-medium" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="leading-7 text-[#48433d]" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link className="underline decoration-[#c4b7aa] underline-offset-4" href={props.href || '#'}>
      {props.children}
    </Link>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="my-6 list-disc pl-6" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="my-6 list-decimal pl-6" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote className="my-8 border-l-2 border-[#ded2c5] pl-4 italic text-[#5a524c]" {...props} />,
  Disclosure,
};

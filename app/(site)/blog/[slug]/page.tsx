import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Container } from '@/components/container';
import { mdxComponents } from '@/components/mdx-components';
import { Disclosure } from '@/components/disclosure';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <Container>
      <article className="mx-auto max-w-3xl py-14 sm:py-18">
        <div className="space-y-4">
          <p className="eyebrow">{post.category}</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
          <p className="text-base leading-7 text-[#5b544d]">{post.excerpt}</p>
          <p className="text-sm text-[#776f66]">{post.publishedAt} · {post.readingTime}</p>
        </div>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-[#e5dacd] bg-sand">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="mt-8">
          <Disclosure />
        </div>
        <div className="prose prose-lg mt-10 max-w-none">{content}</div>
      </article>
    </Container>
  );
}

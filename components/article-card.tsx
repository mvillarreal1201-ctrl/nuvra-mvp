import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-surface overflow-hidden">
      <div className="relative aspect-[16/10] bg-sand">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="eyebrow">{post.category}</p>
        <h3 className="text-xl font-medium leading-snug">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-6 text-[#5c554e]">{post.excerpt}</p>
        <p className="text-sm text-[#756c63]">{post.readingTime}</p>
      </div>
    </article>
  );
}

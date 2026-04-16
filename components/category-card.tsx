import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/lib/types';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group card-surface overflow-hidden focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-medium">{category.name}</h3>
        <p className="text-sm leading-6 text-[#5e5650]">{category.description}</p>
      </div>
    </Link>
  );
}

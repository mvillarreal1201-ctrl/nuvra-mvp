import Image from 'next/image';
import { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-[28px]">
      <div className="relative aspect-[4/4] bg-[#f7f7f5] p-6 flex item-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex fex-1 flex-col p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="min-h-[56px] text-[20px] font-medium leading-snug text-[#2f2a24]">
              {product.name}</h3>
            <span className="text-sm font-medium text-[#4f4841]">{product.price}</span>
          </div>
          <p className="text-sm text-[#72685f]">{product.retailer}</p>
          <p className="min-h-[72px] text-sm leading-6 text-[#5b544d]">
            {product.valueProp}</p>
          
          <div className="mt-3 space-y-2.5">
        {product.tag && (
  <p className="inline-flex rounded-full bg-sand px-3 py-1 text-xs text-[#5f5750]">
    {product.tag} 
  </p>
)}
      </div>
        <div className="mt-3 pt-2 w-full">
        <a
         href={product.href}
          className="mt-3 felx w-full items-center justify-center rounded-full bg-black text-white py-2.5  px-6 text-sm font-medium transition-all duration-300 hover:bg-neutral-800 active:scale-95"
          aria-label={`Check price for ${product.name}`}
          rel="nofollow sponsored"
          target="blank"
        >
          view on Amazon → 
        </a>
      </div>
     
       </div>
      </div>
    </article>
  )
}

import Link from 'next/link';

export function Hero() {
  return (
    <section  className="relative py-14 sm:py-18 lg:py-24 bg-[url('/hero.jpg')] bg-cover bg-center">
      <div className= "absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-6x1 mx-auto px-6 ig:px-12 grid gap-10 md:grid-cols-2 md:item-center ig:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-2xl space-y-6 pl-6 sm:pl-10 ig:p1-12">
          <p className="eyebrow text-stoneink/80">Curated for modern cat living</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-stoneink sm:text-5xl lg:text-6xl">
            Elevated feeding bowls designed for calmer cat mealtimes.
          </h1>
          <p className="max-w-xl text-base leading-7 text-stoneink sm:text-lg">
            
        Thoughtfully chosen cat bowls that blend comfort, cleaner feeding, and modern home aesthetics.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" 
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium transsition-all duration-300 hover:bg-neutral-800 hover:shadow active:scale-[0.98]"
            >
              Shop essentials
              </Link>
            <Link href="/blog" 
            className="border border-neutral-300 bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-neutral-100 hover:border-neutral-400 active:scale-[0.98]"
            >
              Read Journal
            </Link>
          </div>
        </div>
        <div className="card-surface relative overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="relative space-y-6">
            <div className="rounded-[1.5rem] border border-gray/300 bg-white/90 p-5 shadow-[0_20px_rgba (0,0,0,0,08) ] backdrop-blur-md transition-a duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba (0,0,0,0,12)">
              <p className="text-sm font-medium">Editor’s note</p>
              <p className="mt-2 text-sm leading-6 text-[#5f5750]">
                We select elevated bowls that feel calm, clean easily, and fit naturally into modern spaces.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.25rem] bg-[#f8f3ec] p-5">
                <p className="text-2xl font-semibold"></p>
                <p className="mt-1 text-sm text-[#625b54]">Handpicked essentials</p>
              </div>
              <div className="rounded-[1.25rem] bg-[#f4eee6] p-5">
                <p className="text-2xl font-semibold">Bowl</p>
                <p className="mt-1 text-sm text-[#625b54]">first collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsletterSignup() {
  return (
    <section className="card-surface mt-16 overflow-hidden p-8 sm:p-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-3">
          <p className="eyebrow">Newsletter</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">A quieter inbox for cat people.</h2>
          <p className="max-w-xl text-sm leading-6 text-[#5b544d]">
            Monthly product edits, new buying guides, and calm recommendations for living well with cats.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" aria-label="Newsletter signup">
          <label className="sr-only" htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="min-w-[260px] rounded-full border border-[#ddd2c5] bg-white px-4 py-3 text-sm text-stoneink placeholder:text-[#8b8177] focus:outline-none focus:ring-2 focus:ring-stoneink focus:ring-offset-2 focus:ring-offset-cream"
          />
          <button type="submit" className="button-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

# Nuvra MVP

Premium, minimalist cat-only editorial-commerce site built with Next.js App Router, Tailwind CSS, and MDX.

## Stack

- Next.js App Router
- Tailwind CSS
- MDX content via `next-mdx-remote/rsc`
- Static content from local data files

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

- `app/` route handlers and pages
- `components/` reusable UI components
- `content/blog/` MDX blog content
- `data/` product and category content
- `lib/` utilities and content helpers
- `public/images/` local placeholder artwork

## Notes

- Product CTAs route through `/go/[slug]` before redirecting to the placeholder retailer URL.
- Replace placeholder product links and SVG artwork with real affiliate links and photography when ready.
- Update `siteConfig.url` in `lib/site.ts` before deployment.

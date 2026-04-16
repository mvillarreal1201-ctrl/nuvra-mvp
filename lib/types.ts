export type Category = {
  slug: string;
  name: string;
  description: string;
  heroCopy: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  valueProp: string;
  price: string;
  retailer: string;
  category: string;
  image: string;
  href: string;
  tag?: string;
  featured?: boolean;
};

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  coverImage: string;
  readingTime: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

import { categories } from '@/data/categories';
import { products } from '@/data/products';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured).slice(0, 6);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

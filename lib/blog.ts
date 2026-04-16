import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { BlogFrontmatter, BlogPost } from '@/lib/types';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export function getBlogSlugs() {
  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getAllPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, file);
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        content,
        ...(data as BlogFrontmatter),
      };
    })
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    ...(data as BlogFrontmatter),
  };
}

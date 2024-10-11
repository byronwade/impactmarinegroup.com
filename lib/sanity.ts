import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'f9jkdh97',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface SEOMetadata {
  metaDescription: string;
  ogImageUrl: string;
  ogTitle: string;
  ogDescription: string;
}

export interface StructuredPage {
  _id: string;
  title: string;
  slug: string;
  content: any[];
  seo: SEOMetadata;
}

export async function getStructuredPages(): Promise<StructuredPage[]> {
  const query = `*[_type == "page"] {
    _id,
    title,
    "slug": slug.current,
    content,
    seo
  }`;
  const pages = await client.fetch(query);
  return pages.map((page: any) => ({
    ...page,
    path: page.slug === 'home' ? '' : page.slug,
  }));
}

export async function getPageBySlug(slug: string) {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    title,
    content,
    seo
  }`;
  return client.fetch(query, { slug });
}

export async function getMainMenu() {
  const query = `*[_type == "menu" && menuName == "Primary"][0] {
    items[] {
      label,
      url
    }
  }`
  return client.fetch(query)
}
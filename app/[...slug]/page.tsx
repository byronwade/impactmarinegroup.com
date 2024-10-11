import { getStructuredPages, getFlattenedPages } from '@/lib/notion';
import { renderBlock } from '@/components/NotionBlocks';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID!;
  const structuredPages = await getStructuredPages(rootPageId);
  const flattenedPages = getFlattenedPages(structuredPages);
  
  const path = params.slug.join('/');
  const pageContent = flattenedPages.find(page => page.path === path);

  if (!pageContent) {
    return {};
  }

  return {
    title: pageContent.seo.ogTitle,
    description: pageContent.seo.metaDescription,
    openGraph: {
      title: pageContent.seo.ogTitle,
      description: pageContent.seo.ogDescription,
      images: [{ url: pageContent.seo.ogImageUrl }],
    },
  };
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID!;
  const structuredPages = await getStructuredPages(rootPageId);
  const flattenedPages = getFlattenedPages(structuredPages);
  
  const path = params.slug.join('/');
  const pageContent = flattenedPages.find(page => page.path === path);

  if (!pageContent) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{pageContent.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {pageContent.content.map(renderBlock)}
      </CardContent>
    </Card>
  );
}
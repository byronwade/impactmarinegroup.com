import { getStructuredPages } from '@/lib/notion';
import { renderBlock } from '@/components/NotionBlocks';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  console.log('[generateMetadata] Starting');
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID!;
  console.log('[generateMetadata] Root Page ID:', rootPageId);

  const structuredPages = await getStructuredPages(rootPageId);
  const homePage = structuredPages[0];

  if (!homePage) {
    console.error('[generateMetadata] No home page found');
    return {
      title: 'Error',
      description: 'Failed to load page content',
    };
  }

  console.log('[generateMetadata] Generating metadata for home page');
  return {
    title: homePage.seo.ogTitle,
    description: homePage.seo.metaDescription,
    openGraph: {
      title: homePage.seo.ogTitle,
      description: homePage.seo.ogDescription,
      images: homePage.seo.ogImageUrl ? [{ url: homePage.seo.ogImageUrl }] : [],
    },
  };
}

export default async function Home() {
  console.log('[Home] Starting');
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID!;
  console.log('[Home] Root Page ID:', rootPageId);
  
  try {
    console.log('[Home] Fetching structured pages');
    const structuredPages = await getStructuredPages(rootPageId);
    console.log('[Home] Structured Pages:', JSON.stringify(structuredPages, null, 2));
    
    if (structuredPages.length === 0) {
      console.error('[Home] No pages found');
      return <div>Error: No pages found</div>;
    }

    const homePage = structuredPages[0];
    console.log('[Home] Home Page:', JSON.stringify(homePage, null, 2));

    console.log('[Home] Rendering home page');
    return (
      <Card>
        <CardHeader>
          <CardTitle>{homePage.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {homePage.content.map((block, index) => (
            <div key={index}>
              {renderBlock(block)}
            </div>
          ))}
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error('[Home] Error:', error);
    return <div>Error: Failed to load page content</div>;
  }
}
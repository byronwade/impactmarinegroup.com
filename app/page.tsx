import { getStructuredPages, getBlocks } from '@/lib/notion';
import { renderBlock } from '@/components/NotionBlocks';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID!;
  const structuredPages = await getStructuredPages(rootPageId);
  const homePage = structuredPages[0];

  if (!homePage) {
    console.error('No home page found');
    return {
      title: 'Error',
      description: 'Failed to load page content',
    };
  }

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
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID!;
  console.log('Root Page ID:', rootPageId);
  
  try {
    const structuredPages = await getStructuredPages(rootPageId);
    console.log('Structured Pages:', JSON.stringify(structuredPages, null, 2));
    
    if (structuredPages.length === 0) {
      console.error('No pages found');
      return <div>Error: No pages found</div>;
    }

    const homePage = structuredPages[0];
    console.log('Home Page:', JSON.stringify(homePage, null, 2));

    const homePageBlocks = await getBlocks(homePage.id);
    console.log('Home Page Blocks:', JSON.stringify(homePageBlocks, null, 2));

    return (
      <Card>
        <CardHeader>
          <CardTitle>{homePage.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {homePageBlocks && homePageBlocks.map((block: any, index: number) => (
            <div key={index}>
              {renderBlock(block)}
            </div>
          ))}
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error('Error in Home component:', error);
    return <div>Error: Failed to load page content</div>;
  }
}
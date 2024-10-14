import dynamic from 'next/dynamic';
import { getHomePage } from '@/lib/sanity';
import { RenderBlock, Block } from '@/components/RenderBlock';
import { Metadata } from 'next';

import { ImprovedBoatSales } from '@/components/improved-boat-sales';

const DynamicRenderBlock = dynamic(() => import('@/components/RenderBlock').then(mod => mod.RenderBlock), { ssr: false });

export async function generateMetadata(): Promise<Metadata> {
  console.log('[generateMetadata] Starting');
  const homePage = await getHomePage();

  if (!homePage) {
    console.error('[generateMetadata] No home page found');
    return {
      title: 'Impact Marine Group',
      description: 'Welcome to Impact Marine Group',
    };
  }

  return {
    title: homePage.seo?.ogTitle || homePage.title || 'Impact Marine Group',
    description: homePage.seo?.metaDescription || 'Welcome to Impact Marine Group',
    openGraph: {
      title: homePage.seo?.ogTitle || homePage.title || 'Impact Marine Group',
      description: homePage.seo?.ogDescription || homePage.seo?.metaDescription || 'Welcome to Impact Marine Group',
      images: homePage.seo?.ogImageUrl ? [{ url: homePage.seo.ogImageUrl }] : [],
    },
  };
}

export default async function Home() {
  console.log('[Home] Starting');
  
  try {
    const homePage = await getHomePage();

    if (!homePage) {
      console.error('[Home] No home page found');
      return <div>Error: No home page found</div>;
    }

    console.log('[Home] Rendering home page:', homePage.title);

    return (
      <div>
        {homePage.content && homePage.content.map((block: Block, index: number) => (
          <DynamicRenderBlock key={index} block={block as unknown as Block} />
        ))}
        <ImprovedBoatSales />
      </div>
    );
  } catch (error) {
    console.error('[Home] Error:', error);
    return <div>Error: Failed to load page content</div>;
  }
}
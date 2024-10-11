import { Client } from "@notionhq/client";
import slugify from 'slugify';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: '2022-06-28',
});

interface SEOMetadata {
  metaDescription: string;
  ogImageUrl: string;
  ogTitle: string;
  ogDescription: string;
}

interface StructuredPage {
  id: string;
  title: string;
  slug: string;
  path: string;
  content: any[];
  children: StructuredPage[];
  seo: SEOMetadata;
}

export const getStructuredPages = async (pageId: string): Promise<StructuredPage[]> => {
  console.log(`Fetching structured pages for page ID: ${pageId}`);
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    console.log('Retrieved root page:', JSON.stringify(page, null, 2));

    const childrenResponse = await notion.blocks.children.list({ block_id: pageId });
    const childBlocks = childrenResponse.results;
    console.log(`Fetched ${childBlocks.length} child blocks for page ID: ${pageId}`);

    const childPages = childBlocks.filter(block => block.type === 'child_page');
    console.log(`Found ${childPages.length} child pages`);

    console.log('Child page titles:');
    childPages.forEach(childPage => {
      console.log(`- ${childPage.child_page.title}`);
    });

    const structuredPages = await Promise.all(
      childPages.map(async (childPage, index) => {
        const title = childPage.child_page.title;
        const slug = slugify(title, { lower: true });
        const path = index === 0 ? '' : slug;

        return {
          id: childPage.id,
          title,
          slug,
          path,
          content: [],
          children: [],
          seo: {
            metaDescription: '',
            ogImageUrl: '',
            ogTitle: title,
            ogDescription: '',
          },
        };
      })
    );

    console.log(`Total structured pages: ${structuredPages.length}`);
    structuredPages.forEach(page => {
      console.log(`Page: ${page.title}`);
    });

    return structuredPages;
  } catch (error) {
    console.error(`Error fetching structured pages for ID ${pageId}:`, error);
    return [];
  }
};

export const getBlocks = async (blockId: string) => {
  let blocks = [];
  let cursor;
  try {
    while (true) {
      const { results, next_cursor } = await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      });
      blocks = blocks.concat(results);
      if (!next_cursor) {
        break;
      }
      cursor = next_cursor;
    }
    console.log(`Successfully fetched ${blocks.length} blocks for block ID: ${blockId}`);
    return blocks;
  } catch (error) {
    console.error(`Error fetching blocks for block ID ${blockId}:`, error);
    return null;
  }
};

export const getFlattenedPages = (structuredPages: StructuredPage[]): StructuredPage[] => {
  return structuredPages.flatMap(page => [page, ...getFlattenedPages(page.children)]);
};
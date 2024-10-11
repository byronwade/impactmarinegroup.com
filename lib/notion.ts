import { Client } from "@notionhq/client";
import slugify from 'slugify';

console.log('Initializing Notion client');
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: '2022-06-28',
});
console.log('Notion client initialized');

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
  console.log(`[getStructuredPages] Starting for page ID: ${pageId}`);
  try {
    console.log(`[getStructuredPages] Retrieving root page`);
    const page = await notion.pages.retrieve({ page_id: pageId });
    console.log('[getStructuredPages] Retrieved root page:', JSON.stringify(page, null, 2));

    console.log(`[getStructuredPages] Fetching child blocks`);
    const childrenResponse = await notion.blocks.children.list({ block_id: pageId });
    const childBlocks = childrenResponse.results;
    console.log(`[getStructuredPages] Fetched ${childBlocks.length} child blocks`);

    const childPages = childBlocks.filter(block => block.type === 'child_page');
    console.log(`[getStructuredPages] Found ${childPages.length} child pages`);

    console.log('[getStructuredPages] Child page titles:');
    childPages.forEach(childPage => {
      console.log(`- ${childPage.child_page.title}`);
    });

    console.log('[getStructuredPages] Processing child pages');
    const structuredPages = await Promise.all(
      childPages.map(async (childPage, index) => {
        console.log(`[getStructuredPages] Processing child page ${index + 1}: ${childPage.child_page.title}`);
        return getStructuredPage(childPage.id, index === 0);
      })
    );

    console.log(`[getStructuredPages] Processed ${structuredPages.length} structured pages`);
    structuredPages.forEach(page => {
      console.log(`Page: ${page.title}, Slug: ${page.slug}`);
    });

    return structuredPages;
  } catch (error) {
    console.error('[getStructuredPages] Error retrieving page:', error.body || error);
    throw error;
  }
};

const getStructuredPage = async (pageId: string, isHomePage: boolean): Promise<StructuredPage> => {
  console.log(`[getStructuredPage] Starting for page ID: ${pageId}, isHomePage: ${isHomePage}`);
  try {
    console.log(`[getStructuredPage] Retrieving page`);
    const page = await notion.pages.retrieve({ page_id: pageId });
    console.log('[getStructuredPage] Retrieved page:', JSON.stringify(page, null, 2));

    console.log(`[getStructuredPage] Fetching blocks`);
    const blocks = await getBlocks(pageId);
    console.log(`[getStructuredPage] Fetched ${blocks.length} blocks`);

    console.log(`[getStructuredPage] Looking for metadata table`);
    const metadataTable = blocks.find(block => block.type === 'table');
    let metadata = {};
    if (metadataTable) {
      console.log(`[getStructuredPage] Metadata table found, fetching rows`);
      const tableRows = await notion.blocks.children.list({ block_id: metadataTable.id });
      metadata = tableRows.results.reduce((acc, row) => {
        if (row.type === 'table_row') {
          const cells = row.table_row.cells;
          if (cells.length === 2) {
            acc[cells[0][0].plain_text.toLowerCase()] = cells[1][0].plain_text;
          }
        }
        return acc;
      }, {});
      console.log('[getStructuredPage] Extracted metadata:', metadata);
    } else {
      console.log(`[getStructuredPage] No metadata table found`);
    }

    const title = metadata['page name'] || page.properties.title?.title[0]?.plain_text || 'Untitled';
    const slug = isHomePage ? '' : (metadata['page slug'] || slugify(title, { lower: true }));
    const path = isHomePage ? '' : slug;

    console.log(`[getStructuredPage] Page details - Title: ${title}, Slug: ${slug}, Path: ${path}`);

    const seo: SEOMetadata = {
      metaDescription: metadata['meta description'] || '',
      ogImageUrl: metadata['og image url'] || '',
      ogTitle: metadata['og title'] || title,
      ogDescription: metadata['og description'] || '',
    };

    console.log('[getStructuredPage] SEO data:', seo);

    return {
      id: page.id,
      title,
      slug,
      path,
      content: blocks.filter(block => block.id !== metadataTable?.id),
      children: [],
      seo,
    };
  } catch (error) {
    console.error(`[getStructuredPage] Error:`, error);
    throw error;
  }
};

export const getBlocks = async (blockId: string) => {
  console.log(`[getBlocks] Starting for block ID: ${blockId}`);
  let blocks = [];
  let cursor;
  try {
    while (true) {
      console.log(`[getBlocks] Fetching block children, cursor: ${cursor || 'initial'}`);
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
    console.log(`[getBlocks] Successfully fetched ${blocks.length} blocks`);
    return blocks;
  } catch (error) {
    console.error(`[getBlocks] Error:`, error);
    return [];
  }
};

export const getFlattenedPages = (structuredPages: StructuredPage[]): StructuredPage[] => {
  console.log(`[getFlattenedPages] Flattening ${structuredPages.length} pages`);
  const flattened = structuredPages.flatMap(page => [page, ...getFlattenedPages(page.children)]);
  console.log(`[getFlattenedPages] Flattened to ${flattened.length} pages`);
  return flattened;
};
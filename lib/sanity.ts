// Core Configuration



import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { unstable_cache } from "next/cache";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
	throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
	throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

// Client Configuration

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,

	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

	apiVersion: "2024-03-21",

	useCdn: process.env.NODE_ENV === "production",
});

// Image Builder Configuration

const builder = imageUrlBuilder(client);

// Image URL Helper

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

// Type Definitions

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

	content: unknown[];

	seo: SEOMetadata;

	isHomePage?: boolean;

	path?: string;
}

// Add persistent caching layer

export const getCachedPageData = unstable_cache(
	async (slug: string): Promise<StructuredPage | null> => {
		const query = `*[_type == "page" && slug.current == $slug][0]`;

		return client.fetch(query, { slug });
	},

	["page-data"],

	{
		revalidate: 3600,

		tags: ["page"],
	}
);







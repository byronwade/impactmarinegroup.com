// Core Configuration
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Client Configuration
export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-21",
	useCdn: false,
	perspective: "published",
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

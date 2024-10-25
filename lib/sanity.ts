import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { cache } from 'react';

export const client = createClient({
	projectId: "f9jkdh97",
	dataset: "production",
	useCdn: false, // set to `true` to fetch from edge cache
	apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
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
	content: unknown[];
	seo: SEOMetadata;
}

// Cache the getStructuredPages function
export const getStructuredPages = cache(async (): Promise<StructuredPage[]> => {
	const query = `*[_type == "page"] {
	_id,
	title,
	"slug": slug.current,
	"path": select(
		slug.current == "home" => "/",
		"/" + slug.current
	),
	"isHomePage": slug.current == "home",
	order
	} | order(order asc)`;
	const pages = await client.fetch(query);

	return pages.map((page: StructuredPage & { order: number }) => ({
		...page,
		path: page.slug === "home" ? "/" : `/${page.slug}`,
		isHomePage: page.slug === "home",
	}));
});

// Cache the getPageBySlug function
export const getPageBySlug = cache(async (slug: string) => {
	const query = `*[_type in ["page", "landingPage"] && slug.current == $slug][0] {
		_type,
		_id,
		title,
		"slug": slug.current,
		"path": select(
			slug.current == "home" => "/",
			"/" + slug.current
		),
		"isHomePage": slug.current == "home",
		"isLandingPage": _type == "landingPage",
		seo
	}`;
	return await client.fetch(query, { slug });
});

// Cache the getHomePage function
export const getHomePage = cache(async () => {
	const query = `*[_type == "page" && isHomePage == true][0] {
		_id,
		title,
		seo
	}`;
	return client.fetch(query);
});

// Add a new function to fetch content separately
export async function getPageContent(id: string) {
	const query = `*[_id == $id][0].content`;
	return client.fetch(query, { id });
}

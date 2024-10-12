import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

export async function getStructuredPages(): Promise<StructuredPage[]> {
	const query = `*[_type == "page"] {
	_id,
	title,
	"slug": slug.current,
	content,
	seo,
	order
	} | order(order asc)`;
	const pages = await client.fetch(query);

	return pages.map((page: StructuredPage & { order: number }) => ({
		...page,
		path: page.slug === "home" ? "/" : `/${page.slug}`,
		isHomePage: page.slug === "home",
	}));
}

export async function getPageBySlug(slug: string) {
	const query = `*[_type in ["page", "landingPage"] && slug.current == $slug][0] {
		_type,
		_id,
		title,
		"slug": slug.current,
		content,
		sections,
		seo,
		isHomePage,
		isLandingPage
	}`;
	return await client.fetch(query, { slug });
}

export async function getHomePage() {
	const query = `*[_type == "page" && isHomePage == true][0] {
		title,
		content,
		seo
	}`;
	return client.fetch(query);
}

import { client } from "@/lib/sanity";
import { cache } from "react";
import { groq } from "next-sanity";
import type { MenuItem, SanityBoat } from "@/types/sanity";

// Add interface for raw navigation items
interface RawNavigationItem {
	_id?: string;
	_key?: string;
	label?: string;
	title?: string;
	link?: string;
	href?: string;
	order?: number;
}

export const runtime = "edge";

// Site Configuration
export const getSiteConfig = cache(async () => {
	const query = groq`*[_type == "siteConfig"][0] {
		siteName,
		phoneNumber,
		email,
		address,
		socialMedia,
		logo {
			asset-> {
				url,
				metadata
			}
		}
	}`;
	return client.fetch(query);
});

// Page Content with Expanded References
export const getPageBlocks = cache(async (slug: string) => {
	const query = groq`*[_type == "page" && (slug.current == $slug || (isHomePage == true && $slug == "home"))][0].content[] {
		...,
		boats[]-> {
			_id,
			name,
			manufacturer,
			model,
			trim,
			modelYear,
			condition,
			status,
			price,
			description,
			mainImage {
				asset-> {
					url,
					metadata
				}
			},
			specs,
			available
		},
		services[] {
			...,
			image {
				asset-> {
					url,
					metadata
				}
			}
		},
		brands[]-> {
			name,
			logo {
				asset-> {
					url,
					metadata {
						dimensions
					}
				}
			}
		},
		backgroundImage {
			asset-> {
				url,
				metadata
			}
		},
		backgroundVideo {
			asset-> {
				url,
				playbackId,
				status,
				assetId,
				filename,
				_id
			}
		}
	}`;
	return client.fetch(query, { slug });
});

// Navigation - simplified version that was working before
export const getPrimaryNavigation = cache(async () => {
	const query = groq`*[_type == "menu"][0] {
		_id,
		title,
		"items": items[] {
			_key,
			_type == "reference" => @-> {
				"_id": _id,
				"label": title,
				"link": "/" + slug.current,
				"order": order
			},
			_type == "customLink" => {
				"_id": _key,
				"label": title,
				"link": href,
				"order": order
			}
		}
	}`;

	try {
		const nav = await client.fetch(query);
		console.log("Raw navigation data:", nav);

		if (!nav?.items?.length) {
			console.log("No navigation items found");
			return [];
		}

		const validItems = nav.items
			.filter((item: RawNavigationItem): item is RawNavigationItem => Boolean(item && (item.label || item.title) && (item.link || item.href)))
			.map((item: RawNavigationItem) => ({
				_id: item._id || item._key || "",
				label: item.label || item.title || "",
				link: (item.link || item.href || "/").startsWith("//") ? (item.link || item.href || "/").substring(1) : item.link || item.href || "/",
				order: item.order || 0,
			}))
			.sort((a: MenuItem, b: MenuItem) => (a.order || 0) - (b.order || 0));

		console.log("Processed navigation items:", validItems);
		return validItems;
	} catch (error) {
		console.error("Error fetching navigation:", error);
		return [];
	}
});

// Add the getAllInventoryBoats function
export const getAllInventoryBoats = cache(async () => {
	const query = groq`*[_type == "boat" && available == true] {
		_id,
		name,
		manufacturer,
		model,
		trim,
		modelYear,
		condition,
		status,
		price,
		listPrice,
		description,
		mainImage {
			asset-> {
				url,
				metadata
			}
		},
		gallery[] {
			asset-> {
				url,
				metadata
			}
		},
		specs,
		available,
		stockNumber,
		category,
		slug {
			current
		}
	} | order(price asc)`;

	try {
		const boats = await client.fetch<SanityBoat[]>(query);
		return boats || [];
	} catch (error) {
		console.error("Error fetching boats:", error);
		return [];
	}
});

export const getFeaturedBoats = cache(async () => {
	const query = groq`*[_type == "boat" && featured == true] {
		_id,
		name,
		manufacturer,
		model,
		trim,
		modelYear,
		condition,
		status,
		price,
		listPrice,
		description,
		mainImage {
			asset-> {
				url,
				metadata
			}
		},
		specs,
		available,
		stockNumber,
		category,
		slug {
			current
		}
	}`;

	try {
		const boats = await client.fetch<SanityBoat[]>(query);
		return boats || [];
	} catch (error) {
		console.error("Error fetching featured boats:", error);
		return [];
	}
});

export const getHomePage = cache(async () => {
	const query = groq`*[_type == "page" && isHomePage == true][0]`;
	return client.fetch(query);
});

export const getBrands = cache(async () => {
	const query = groq`*[_type == "brand"] {
		name,
		logo {
			asset-> {
				url,
				metadata {
					dimensions
				}
			}
		}
	}`;
	return client.fetch(query);
});

export interface SanityTestimonial {
	_id: string;
	name: string;
	text: string;
	rating: number;
}

export interface SanityBoat {
	_id: string;
	name: string;
	description: string;
	mainImage?: {
		asset?: {
			url: string;
		};
	};
	price: number;
	specs?: {
		length?: string;
		capacity?: string;
		speed?: string;
	};
}

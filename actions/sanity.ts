import { client, StructuredPage } from "@/lib/sanity";
import { cache } from "react";

export const runtime = "edge";

// Types
export interface SiteConfig {
	siteName: string;
	domain: string;
	companyName: string;
	phoneNumber: string;
	email: string;
	logo: {
		url: string;
		metadata: unknown;
	} | null;
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
	socialMedia: Array<{
		platform: string;
		url: string;
	}>;
}

export interface Page {
	_id: string;
	slug: { current: string };
	title: string;
}

export interface Boat {
	_id: string;
	name: string;
	description: string;
	price: number;
	image: unknown; // Use proper Sanity image type
	available: boolean;
	seo: {
		metaTitle: string;
		metaDescription: string;
		keywords: string[];
	};
}

export interface Service {
	_id: string;
	title: string;
	description: string;
	image: unknown;
	price: number;
	seo: {
		metaTitle: string;
		metaDescription: string;
		keywords: string[];
	};
}

export interface BlogPost {
	_id: string;
	title: string;
	slug: { current: string };
	author: string;
	publishedAt: string;
	body: unknown[]; // BlockContent type
	seo: {
		metaTitle: string;
		metaDescription: string;
		keywords: string[];
	};
}

export interface MenuItem {
	_id: string;
	label: string;
	link: string;
	order: number;
}

export interface Menu {
	_id: string;
	title: string;
	items: MenuItem[];
}

// Add this interface at the top with other interfaces
interface SearchResults {
	boats: Boat[];
	services: Service[];
	blogPosts: BlogPost[];
}

// Cached fetch functions
export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
	try {
		const query = `*[_type == "siteConfig"][0] {
			siteName,
			domain,
			companyName,
			phoneNumber,
			email,
			"logo": {
				"asset": {
					"url": logo.asset->url
				}
			},
			"address": {
				"street": address.street,
				"city": address.city,
				"state": address.state,
				"zip": address.zip
			},
			"socialMedia": socialMedia[] {
				platform,
				url
			}
		}`;

		const config = await client.fetch(query, {}, { cache: "force-cache" });
		if (!config) {
			throw new Error("No site config found");
		}
		return config;
	} catch (error) {
		console.error("Error fetching site config:", error);
		throw error;
	}
});

export const getAllBoats = cache(async (): Promise<Boat[]> => {
	const query = `*[_type == "boat"] {
    _id,
    name,
    description,
    price,
    image,
    available,
    seo
  }`;
	return await client.fetch(query);
});

export const getBoatBySlug = cache(async (slug: string): Promise<SanityBoat | null> => {
	const query = `*[_type == "boat" && slug.current == $slug][0] {
		_id,
		slug,
		name,
		manufacturer,
		model,
		trim,
		modelYear,
		stockNumber,
		condition,
		status,
		price,
		listPrice,
		category,
		description,
		specs,
		"mainImage": {
			"asset": {
				"url": mainImage.asset->url
			}
		},
		"gallery": gallery[]{
			"asset": {
				"url": asset->url
			}
		},
		available
	}`;

	return await client.fetch(query, { slug });
});

export const getAllServices = cache(async (): Promise<Service[]> => {
	const query = `*[_type == "service"] {
    _id,
    title,
    description,
    image,
    price,
    seo
  }`;
	return await client.fetch(query);
});

export const getServiceBySlug = cache(async (slug: string): Promise<Service> => {
	const query = `*[_type == "service" && slug.current == $slug][0]`;
	return await client.fetch(query, { slug });
});

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
	const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    body,
    seo
  }`;
	return await client.fetch(query);
});

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost> => {
	const query = `*[_type == "blogPost" && slug.current == $slug][0]`;
	return await client.fetch(query, { slug });
});

export const getAllMenus = cache(async (): Promise<Menu[]> => {
	const query = `*[_type == "menu"] {
    _id,
    title,
    items[] {
      _type == 'reference' => {
        _type,
        _ref,
        "title": @->title,
        "slug": @->slug.current
      },
      _type == 'customLink' => {
        _type,
        title,
        href
      }
    }
  }`;
	return await client.fetch(query);
});

export const getMenuByTitle = cache(async (title: string): Promise<Menu> => {
	const query = `*[_type == "menu" && title == $title][0] {
    _id,
    title,
    items[] {
      _type == 'reference' => {
        _type,
        _ref,
        "title": @->title,
        "slug": @->slug.current
      },
      _type == 'customLink' => {
        _type,
        title,
        href
      }
    }
  }`;
	return await client.fetch(query, { title });
});

// Helper function to expand references in menu items
export const expandMenuItems = cache(async (menu: Menu) => {
	const expandedItems = await Promise.all(
		menu.items.map(async (item) => {
			//@ts-expect-error cant figure it out
			if (item._type === "reference" && item._ref) {
				//@ts-expect-error cant figure it out
				const referenced = await client.getDocument(item._ref);
				return {
					...item,
					...referenced,
				};
			}
			return item;
		})
	);
	return {
		...menu,
		items: expandedItems,
	};
});

// Search functionality
export const searchContent = cache(async (query: string): Promise<SearchResults> => {
	const searchQuery = `{
    "boats": *[_type == "boat" && (name match $searchQuery || description match $searchQuery)],
    "services": *[_type == "service" && (title match $searchQuery || description match $searchQuery)],
    "blogPosts": *[_type == "blogPost" && (title match $searchQuery || body match $searchQuery)]
  }`;
	return await client.fetch(searchQuery, { searchQuery: `*${query}*` });
});

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
	const query = `*[_type == "page" && (slug.current == $slug || (isHomePage == true && $slug == "home"))][0] {
		_id,
		_type,
		title,
		"slug": slug.current,
		isHomePage,
		seo {
			metaTitle,
			metaDescription,
			keywords
		},
		content[] {
			_type,
			_key,
			// Hero section
			heading,
			subheading,
			backgroundImage {
				asset-> {
					url,
					metadata { dimensions }
				}
			},
			backgroundVideo {
				asset-> { url }
			},
			primaryCta,
			secondaryCta,
			rating,
			
			// Brands section
			_type == "featuredBrands" => {
				_type,
				_key,
				brands[] {
					name,
					logo {
						asset-> {
							url,
							metadata {
								dimensions
							}
						}
					}
				}
			},
			
			// Fleet section
			"boats": boats[]-> {
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
				specs,
				"mainImage": {
					"asset": {
						"url": mainImage.asset->url
					}
				},
				available
			},
			
			// Services section
			_type == "services" => {
				_type,
				_key,
				title,
				subtitle,
				services[] {
					_id,
					title,
					description,
					icon,
					"image": {
						"asset": {
							"url": image.asset->url,
							"metadata": image.asset->metadata
						},
						"alt": image.alt
					}
				}
			},
			
			// Testimonials section
			"testimonials": testimonials[] {
				_id,
				name,
				text,
				rating
			},
			
			// Accordion section
			items[] {
				_key,
				trigger,
				content
			}
		}
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
export const getPageContent = cache(async (id: string): Promise<unknown[]> => {
	try {
		const query = `*[_id == $id][0].content`;
		const content = await client.fetch(query, { id });
		return content || [];
	} catch (error) {
		console.error("Error fetching page content:", error);
		return [];
	}
});

// Add this to your existing types
export interface SanityBoat {
	_id: string;
	slug: string;
	name: string;
	manufacturer: string;
	model: string;
	trim?: string;
	modelYear: string;
	condition: string;
	status: string;
	price: number;
	listPrice?: number;
	shortDescription?: string;
	description: string;
	mainImage: {
		asset: {
			url: string;
		};
	};
	gallery?: Array<{
		asset: {
			url: string;
		};
	}>;
	specs?: {
		length?: string;
		capacity?: string;
		speed?: string;
	};
	available: boolean;
}

// Add this function to fetch featured boats
export const getFeaturedBoats = cache(async (): Promise<SanityBoat[]> => {
	const query = `*[_type == "boat" && available == true] | order(_createdAt desc)[0...5] {
		_id,
		name,
		price,
		description,
		"mainImage": {
			"asset": {
				"url": mainImage.asset->url
			}
		},
		specs,
		available
	}`;

	return await client.fetch(query);
});

export const getAllInventoryBoats = cache(async (): Promise<SanityBoat[]> => {
	const query = `*[_type == "boat"] {
		_id,
		"slug": slug.current,
		manufacturer,
		model,
		trim,
		modelYear,
		condition,
		status,
		price,
		listPrice,
		shortDescription,
		description,
		"mainImage": {
			"asset": {
				"url": mainImage.asset->url
			}
		},
		"gallery": gallery[]{
			"asset": {
				"url": asset->url
			}
		},
		specs,
		available
	}`;

	return await client.fetch(query);
});

export const getBoatById = cache(async (id: string): Promise<SanityBoat | null> => {
	const query = `*[_type == "boat" && _id == $id][0] {
		_id,
		name,
		manufacturer,
		model,
		trim,
		modelYear,
		stockNumber,
		condition,
		status,
		price,
		listPrice,
		category,
		description,
		specs,
		"mainImage": {
			"asset": {
				"url": mainImage.asset->url
			}
		},
		"gallery": gallery[]{
			"asset": {
				"url": asset->url
			}
		},
		available
	}`;

	return await client.fetch(query, { id });
});

// Add this query function
export const getPrimaryNavigation = cache(async (): Promise<MenuItem[]> => {
	const query = `*[_type == "menu" && title == "Primary"][0].items[] {
		_type == 'reference' => {
			"_id": @->_id,
			"label": @->title,
			"link": "/" + @->slug.current,
			"order": @._key
		},
		_type == 'customLink' => {
			"_id": _key,
			"label": title,
			"link": href,
			"order": _key
		}
	}`;

	const defaultNavItems = [
		{ _id: "home", label: "Home", link: "/", order: 1 },
		{ _id: "boats", label: "Boats", link: "/boats", order: 2 },
		{ _id: "services", label: "Services", link: "/services", order: 3 },
		{ _id: "about", label: "About Us", link: "/about", order: 4 },
		{ _id: "financing", label: "Financing", link: "/financing", order: 5 },
		{ _id: "contact", label: "Contact", link: "/contact", order: 6 },
	];

	try {
		const items = await client.fetch(query);

		// Filter and maintain array order from Sanity Studio
		const validItems = items
			?.filter((item: MenuItem) => item.label && item.link)
			.map((item: MenuItem, index: number) => ({
				...item,
				_id: item._id || `nav-item-${index}`,
				link: item.link.startsWith("//") ? item.link.substring(1) : item.link,
				order: index, // Use the array index for ordering
			}));

		return validItems?.length ? validItems : defaultNavItems;
	} catch (error) {
		console.error("Error fetching navigation:", error);
		return defaultNavItems;
	}
});

export const getPageBlocks = cache(async (slug: string) => {
	const query = `*[_type == "page" && slug.current == $slug][0] {
		content[] {
			_type,
			_key,
			...,
			// Resolve brand references
			brands[]-> {
				name,
				"logo": logo.asset->{
					url,
					metadata {
						dimensions
					}
				}
			},
			// Resolve boat references
			boats[]-> {
				...,
				mainImage {
					asset-> {
						url,
						metadata {
							dimensions
						}
					}
				}
			},
			// Resolve service references
			services[]-> {
				...,
				image {
					asset-> {
						url,
						metadata {
							dimensions
						}
					}
				}
			},
			// Resolve testimonial references
			testimonials[]-> {
				_id,
				name,
				text,
				rating
			},
			// Resolve background assets
			backgroundImage {
				asset-> {
					url,
					metadata {
						dimensions
					}
				}
			},
			backgroundVideo {
				asset-> {
					url
				}
			}
		}
	}`;

	try {
		const page = await client.fetch(query, { slug });
		const blocks = page?.content || [];
		//console.log("Raw page data:", page);
		return blocks;
	} catch (error) {
		console.error("Error fetching page blocks:", error);
		return [];
	}
});

// Add these interfaces
export interface SanityService {
	_id: string;
	title: string;
	description: string;
	icon?: "wrench" | "anchor" | "users";
	image?: {
		asset: {
			url: string;
			metadata: {
				dimensions: {
					width: number;
					height: number;
				};
			};
		};
		alt?: string;
	};
}

export interface SanityTestimonial {
	_id: string;
	name: string;
	text: string;
	rating: number;
}

export interface SanityBrand {
	name: string;
	logo: {
		asset: {
			url: string;
			metadata: {
				dimensions: {
					width: number;
					height: number;
				};
			};
		};
	};
}

export const getServices = cache(async () => {
	const query = `*[_type == "service"] {
		_id,
		title,
		description,
		icon,
		"image": {
			"asset": {
				"url": image.asset->url,
				"metadata": image.asset->metadata
			}
		}
	}`;
	return client.fetch(query);
});

export const getTestimonials = cache(async () => {
	const query = `*[_type == "testimonial"] {
		_id,
		name,
		text,
		rating
	}`;
	return client.fetch(query);
});

export const getBrands = cache(async () => {
	// Query to find featuredBrands blocks within page content
	const query = `*[_type == "page" && defined(content) && count(content[_type == "featuredBrands"]) > 0] {
		"brandBlocks": content[_type == "featuredBrands"] {
			brands[] {
				name,
				logo {
					asset-> {
						url,
						metadata {
							dimensions
						}
					}
				}
			}
		}
	}[0].brandBlocks[0].brands`;

	try {
		const brands = await client.fetch(query);
		console.log("Fetched brands from page content:", brands);

		if (!brands?.length) {
			console.log("No brands found in content blocks");
			return [];
		}

		// Filter out invalid brands
		//@ts-expect-error cant figure it out
		const validBrands = brands.filter((brand) => {
			console.log("Checking brand:", brand);
			return brand && brand.name && brand.logo?.asset?.url;
		});

		console.log("Valid brands to return:", validBrands);
		return validBrands;
	} catch (error) {
		console.error("Error in getBrands:", error);
		return [];
	}
});

export interface InstagramSection {
	title?: string;
	displayCount?: number;
}

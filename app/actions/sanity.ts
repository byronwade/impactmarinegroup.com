import { Block } from "@/components/RenderBlock";
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

export interface PageContent {
	content: Block[];
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
	_type: "reference" | "customLink";
	_ref?: string;
	title?: string;
	href?: string;
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

export const getBoatBySlug = cache(async (slug: string): Promise<Boat> => {
	const query = `*[_type == "boat" && slug.current == $slug][0]`;
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
export const expandMenuItems = async (menu: Menu) => {
	const expandedItems = await Promise.all(
		menu.items.map(async (item) => {
			if (item._type === "reference" && item._ref) {
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
};

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
export const getPageContent = cache(async (id: string): Promise<Block[]> => {
	try {
		const query = `*[_id == $id][0].content`;
		const content = await client.fetch(query, { id });
		return content || [];
	} catch (error) {
		console.error("Error fetching page content:", error);
		return [];
	}
});

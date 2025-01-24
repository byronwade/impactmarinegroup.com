import payload, { Payload } from "payload";
import { cache } from "react";
import config from "../payload.config";
import { postgresAdapter } from "@payloadcms/db-postgres";

const cached: { client: Payload | null; promise: Promise<Payload> | null } = {
	client: null,
	promise: null,
};

// Get Payload instance with improved error handling
export const getPayloadClient = cache(async () => {
	if (cached.client) {
		return cached.client;
	}

	if (!cached.promise) {
		cached.promise = initPayloadClient();
	}

	try {
		cached.client = await cached.promise;
		return cached.client;
	} catch (e) {
		cached.promise = null;
		throw e;
	}
});

async function initPayloadClient(): Promise<Payload> {
	if (!process.env.PAYLOAD_SECRET) {
		throw new Error("PAYLOAD_SECRET environment variable is not set");
	}

	if (!process.env.POSTGRES_URL) {
		throw new Error("POSTGRES_URL environment variable is not set");
	}

	console.log("Initializing Payload client...");

	// Initialize Payload with improved error handling
	try {
		const resolvedConfig = await config;
		await payload.init({
			config: resolvedConfig,
		});
		console.log("Payload client initialized successfully");
		return payload;
	} catch (error) {
		console.error("Failed to initialize Payload:", error);
		throw error;
	}
}

// Get site configuration with improved caching
export const getSiteConfig = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "settings",
			limit: 1,
			depth: 2,
		});
		return docs[0] || null;
	} catch (error) {
		console.error("Failed to fetch site config:", error);
		return null;
	}
});

// Get page by slug with improved error handling and caching
export const getPageBySlug = cache(async (slug: string) => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "pages",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
			limit: 1,
		});
		return docs[0] || null;
	} catch (error) {
		console.error(`Failed to fetch page with slug ${slug}:`, error);
		return null;
	}
});

// Get all boats with improved caching
export const getBoats = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "boats",
			sort: "-createdAt",
			depth: 2,
		});
		return docs || [];
	} catch (error) {
		console.error("Failed to fetch boats:", error);
		return [];
	}
});

// Get featured boats with improved caching
export const getFeaturedBoats = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "boats",
			where: {
				featured: {
					equals: true,
				},
			},
			sort: "-createdAt",
			depth: 2,
		});
		return docs || [];
	} catch (error) {
		console.error("Failed to fetch featured boats:", error);
		return [];
	}
});

// Get boat by slug with improved error handling
export const getBoatBySlug = cache(async (slug: string) => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "boats",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
			limit: 1,
		});
		return docs[0] || null;
	} catch (error) {
		console.error(`Failed to fetch boat with slug ${slug}:`, error);
		return null;
	}
});

// Get all brands with improved caching
export const getBrands = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "brands",
			sort: "-createdAt",
			depth: 2,
		});
		return docs || [];
	} catch (error) {
		console.error("Failed to fetch brands:", error);
		return [];
	}
});

// Get featured brands with improved caching
export const getFeaturedBrands = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "brands",
			where: {
				featured: {
					equals: true,
				},
			},
			sort: "-createdAt",
			depth: 2,
		});
		return docs || [];
	} catch (error) {
		console.error("Failed to fetch featured brands:", error);
		return [];
	}
});

// Get all services with improved caching
export const getServices = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "services",
			sort: "-createdAt",
			depth: 2,
		});
		return docs || [];
	} catch (error) {
		console.error("Failed to fetch services:", error);
		return [];
	}
});

// Get featured services with improved caching
export const getFeaturedServices = cache(async () => {
	try {
		const payload = await getPayloadClient();
		const { docs } = await payload.find({
			collection: "services",
			where: {
				featured: {
					equals: true,
				},
			},
			sort: "-createdAt",
			depth: 2,
		});
		return docs || [];
	} catch (error) {
		console.error("Failed to fetch featured services:", error);
		return [];
	}
});

// Get media URL
export const getMediaUrl = (mediaId: string) => {
	if (!mediaId) return "";
	return `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${mediaId}`;
};

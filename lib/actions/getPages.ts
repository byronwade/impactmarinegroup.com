import { getPayloadClient } from "@/payload/payloadClient";
import type { Page } from "@/payload-types";
import { unstable_cache } from "next/cache";

// Cache the page data fetch with server-side caching
const getPageData = unstable_cache(
	async (slug: string): Promise<Page | null> => {
		try {
			const payload = await getPayloadClient();
			console.log("Fetching page with slug:", slug);

			// Query by slug with all necessary options
			const { docs } = await payload.find({
				collection: "pages",
				where: {
					slug: {
						equals: slug,
					},
				},
				depth: 10,
				draft: false, // Only get published content
				locale: "all",
				sort: "-updatedAt",
				limit: 1,
				populate: {
					content: {
						depth: 10,
						sort: "-updatedAt",
					},
					image: {
						depth: 1,
					},
					features: {
						depth: 2,
					},
				},
			});

			if (!docs || docs.length === 0) {
				console.log("No page found with slug:", slug);
				return null;
			}

			const page = docs[0];

			// Log the raw page data for debugging
			console.log("Raw page data from find:", JSON.stringify(page, null, 2));

			// Log specific block data if it exists
			if (page?.content && page.content.length > 0) {
				console.log(
					"Content blocks found:",
					page.content.map((block) => ({
						type: block.blockType,
						id: block.id,
						hasRequiredFields: block.blockType === "about" ? !!(block.title && block.content && block.image && block.features) : true,
					}))
				);
			} else {
				console.log("No content blocks found in page");
				console.log("Content field exists:", page?.hasOwnProperty("content"));
				console.log("Content field type:", typeof page?.content);
				console.log("Content field value:", page?.content);
			}

			return page;
		} catch (error) {
			console.error("Error fetching page:", error);
			return null;
		}
	},
	["page-data"],
	{
		revalidate: 1, // Revalidate every second in development
		tags: (args) => ["pages", "page-content", `page-${args[0]}`],
	}
);

export const getPageBySlug = async (slug: string) => {
	try {
		const payload = await getPayloadClient();
		console.log("Fetching page with slug:", slug);

		const { docs } = await payload.find({
			collection: "pages",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
			draft: false,
			locale: "all",
			sort: "-updatedAt",
			limit: 1,
		});

		if (!docs || docs.length === 0) {
			console.log("No page found with slug:", slug);
			return null;
		}

		const page = docs[0];
		console.log("Raw page data from find:", JSON.stringify(page, null, 2));
		return page;
	} catch (error) {
		console.error("Error in getPageBySlug:", error);
		return null;
	}
};

export async function getAllPages() {
	try {
		const payload = await getPayloadClient();
		return await payload.find({
			collection: "pages",
			depth: 10,
			draft: false,
			locale: "all",
			sort: "-updatedAt",
			populate: {
				content: {
					depth: 10,
					sort: "-updatedAt",
				},
				image: {
					depth: 1,
				},
				features: {
					depth: 2,
				},
			},
		});
	} catch (error) {
		console.error("Error fetching all pages:", error);
		return { docs: [] };
	}
}

export async function getPageById(id: string): Promise<Page | null> {
	try {
		const payload = await getPayloadClient();
		const page = await payload.findByID({
			collection: "pages",
			id,
			depth: 10,
			draft: false,
			locale: "all",
			populate: {
				content: {
					depth: 10,
					sort: "-updatedAt",
				},
				image: {
					depth: 1,
				},
				features: {
					depth: 2,
				},
			},
		});

		return page || null;
	} catch (error) {
		console.error("Error fetching page by ID:", error);
		return null;
	}
}

import { getPayloadClient } from "@/payload/payloadClient";
import type { Page } from "@/payload-types";

export async function getPageBySlug(slug: string): Promise<Page | null> {
	try {
		const payload = await getPayloadClient();
		const {
			docs: [page],
		} = await payload.find({
			collection: "pages",
			where: {
				slug: {
					equals: slug,
				},
			},
			depth: 2,
		});

		return page || null;
	} catch (error) {
		console.error("Error fetching page:", error);
		return null;
	}
}

export async function getAllPages() {
	try {
		const payload = await getPayloadClient();
		return await payload.find({
			collection: "pages",
			depth: 1,
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
			depth: 2,
		});

		return page || null;
	} catch (error) {
		console.error("Error fetching page by ID:", error);
		return null;
	}
}

import { getPayloadClient } from "@/payload/payloadClient";

export async function getNavigation(location: "header" | "footer") {
	try {
		const payload = await getPayloadClient();
		const {
			docs: [navigation],
		} = await payload.find({
			collection: "navigation",
			where: {
				location: {
					equals: location,
				},
			},
			depth: 2,
		});

		return navigation || null;
	} catch (error) {
		console.error(`Error fetching ${location} navigation:`, error);
		return null;
	}
}

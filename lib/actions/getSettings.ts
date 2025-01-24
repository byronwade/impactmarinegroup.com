import { getPayloadClient } from "@/payload/payloadClient";
import type { Setting } from "@/payload-types";

export async function getSettings(): Promise<Setting | null> {
	try {
		const payload = await getPayloadClient();
		const {
			docs: [settings],
		} = await payload.find({
			collection: "settings",
			limit: 1,
		});

		return settings || null;
	} catch (error) {
		console.error("Error fetching settings:", error);
		return null;
	}
}

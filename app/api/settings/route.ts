import { getSettings } from "@/lib/actions/getSettings";
import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

const getCachedSettings = unstable_cache(
	async () => {
		return await getSettings();
	},
	["settings"],
	{
		revalidate: 30,
		tags: ["settings"],
	}
);

export async function GET() {
	try {
		const settings = await getCachedSettings();
		return NextResponse.json(settings);
	} catch (error) {
		console.error("Error fetching settings:", error);
		return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
	}
}

import { headers } from "next/headers";
import { cache } from "react";

export const getViewport = cache(async () => {
	const headersList = await headers();
	return headersList.get("viewport-type") ?? "desktop";
});

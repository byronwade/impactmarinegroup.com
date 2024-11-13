import { createClient } from "@sanity/client";

import { clientConfig } from "@/lib/sanity.config";

export const runtime = "edge";

const edgeClient = createClient({
	...clientConfig,

	useCdn: true,

	perspective: "published",
});

export async function getStaticPageData(slug: string) {
	const query = `*[_type == "page" && slug.current == $slug][0]`;

	return edgeClient.fetch(query, { slug });
}

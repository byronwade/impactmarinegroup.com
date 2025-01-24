import type { Metadata } from "next";

interface MetadataProps {
	title: {
		template?: string;
		default: string;
	};
	description?: string;
	openGraph?: {
		title?: string;
		description?: string;
		images?: Array<{ url: string }>;
	};
}

export function getMetadata({ title, description, openGraph }: MetadataProps): Metadata {
	return {
		title,
		description,
		openGraph: openGraph
			? {
					title: openGraph.title,
					description: openGraph.description,
					images: openGraph.images,
				}
			: null,
		metadataBase: new URL("https://impactmarinegroup.com"),
		robots: {
			index: true,
			follow: true,
		},
		twitter: {
			card: "summary_large_image",
			title: title.default,
			description,
			creator: "@impactmarinegroup",
		},
		viewport: {
			width: "device-width",
			initialScale: 1,
			maximumScale: 1,
		},
		icons: {
			icon: [
				{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
				{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			],
			apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
			other: [
				{
					rel: "mask-icon",
					url: "/safari-pinned-tab.svg",
					color: "#00446a",
				},
			],
		},
		manifest: "/site.webmanifest",
		other: {
			"msapplication-TileColor": "#00446a",
			"theme-color": "#ffffff",
		},
	};
}

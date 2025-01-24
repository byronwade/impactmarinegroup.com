import { Suspense } from "react";
import { getPageBySlug } from "@/lib/actions/getPages";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";
import type { Block } from "payload/types";

interface PageProps {
	params: {
		slug?: string[];
	};
}

// Cache the page data fetch
const getCachedPageData = unstable_cache(
	async (slug: string | null) => {
		try {
			console.log("Fetching page data for slug:", slug);
			const page = await getPageBySlug(slug || "home");
			console.log("Page data:", page);
			return page;
		} catch (error) {
			console.error("Error fetching page data:", error);
			return null;
		}
	},
	["page-data"],
	{
		revalidate: 30,
		tags: ["pages"],
	}
);

// Improved error boundary component
function ErrorBoundary({ error }: { error: Error }) {
	return (
		<div className="flex min-h-[400px] items-center justify-center">
			<div className="text-center">
				<h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
				<p className="text-muted-foreground">{error.message}</p>
			</div>
		</div>
	);
}

// Block renderer with error boundary
function RenderPageBlock({ block }: { block: Block }) {
	const blockType = block.blockType;

	switch (blockType) {
		case "hero":
			return <div>Hero Block</div>;
		case "featuredBrands":
			return <div>Featured Brands Block</div>;
		case "fleet":
			return <div>Fleet Block</div>;
		case "services":
			return <div>Services Block</div>;
		case "testimonials":
			return <div>Testimonials Block</div>;
		case "content":
			return <div>Content Block</div>;
		default:
			return null;
	}
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const nextjs15 = await params;
	const slugArray = nextjs15.slug || [];
	const slug = slugArray.join("/") || "home";
	const page = await getCachedPageData(slug);

	if (!page) {
		return {
			title: "Page Not Found",
			description: "The requested page could not be found.",
		};
	}

	return {
		title: page.title,
		description: page.seo?.metaDescription || "Welcome to Impact Marine Group",
		openGraph: {
			title: page.seo?.ogTitle || page.title,
			description: page.seo?.ogDescription || page.seo?.metaDescription || "Welcome to Impact Marine Group",
			images: page.seo?.ogImage
				? [
						{
							url: page.seo.ogImage.url,
							width: 1200,
							height: 630,
							alt: page.title,
						},
					]
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title: page.seo?.ogTitle || page.title,
			description: page.seo?.ogDescription || page.seo?.metaDescription || "Welcome to Impact Marine Group",
			images: page.seo?.ogImage ? [page.seo.ogImage.url] : undefined,
		},
		alternates: {
			canonical: `https://impactmarinegroup.com/${slug === "home" ? "" : slug}`,
		},
	};
}

export default async function Page({ params }: PageProps) {
	const nextjs15 = await params;
	const slugArray = nextjs15.slug || [];
	const slug = slugArray.join("/") || "home";
	const page = await getCachedPageData(slug);

	if (!page) {
		notFound();
	}

	return (
		<main className="w-full">
			<Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>{page.content?.map((block: Block) => <RenderPageBlock key={block.id} block={block} />)}</Suspense>
		</main>
	);
}

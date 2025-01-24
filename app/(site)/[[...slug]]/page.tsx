import { Suspense } from "react";
import { getPageBySlug } from "@/lib/actions/getPages";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { Hero, FeaturedBrands, Fleet, Services, Testimonials, Content } from "@/blocks";

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

// Block renderer with error boundary
function RenderPageBlock({ block }: { block: any }) {
	const blockType = block.blockType;

	switch (blockType) {
		case "hero":
			return <Hero {...block} />;
		case "featuredBrands":
			return <FeaturedBrands {...block} />;
		case "fleet":
			return <Fleet {...block} />;
		case "services":
			return <Services {...block} />;
		case "testimonials":
			return <Testimonials {...block} />;
		case "content":
			return <Content {...block} />;
		default:
			return null;
	}
}

export const metadata: Metadata = {
	title: "Impact Marine Group",
	description: "Your premier destination for boats and marine services in Lake Lanier",
};

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
			<Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>{page.content?.map((block: any) => <RenderPageBlock key={block.id} block={block} />)}</Suspense>
		</main>
	);
}

import { getHomePage, getPageContent } from "@/lib/sanity";
import { Block, RenderBlock } from "@/components/RenderBlock";
import { Metadata } from "next";
import { Suspense, lazy } from "react";

const ImprovedBoatSales = lazy(() => import("@/components/improved-boat-sales"));

export const experimental_ppr = true;

export async function generateMetadata(): Promise<Metadata> {
	console.log("[generateMetadata] Starting");
	const homePage = await getHomePage();

	if (!homePage) {
		console.error("[generateMetadata] No home page found");
		return {
			title: "Impact Marine Group",
			description: "Welcome to Impact Marine Group",
		};
	}

	return {
		title: homePage.seo?.ogTitle || homePage.title || "Impact Marine Group",
		description: homePage.seo?.metaDescription || "Welcome to Impact Marine Group",
		openGraph: {
			title: homePage.seo?.ogTitle || homePage.title || "Impact Marine Group",
			description: homePage.seo?.ogDescription || homePage.seo?.metaDescription || "Welcome to Impact Marine Group",
			images: homePage.seo?.ogImageUrl ? [{ url: homePage.seo.ogImageUrl }] : [],
		},
	};
}

export default async function Home() {
	const homePage = await getHomePage();

	if (!homePage) {
		throw new Error("No home page found");
	}

	return (
		<div>
			<Suspense fallback={<div>Loading content...</div>}>
				<HomePageContent id={homePage._id} />
			</Suspense>
			<Suspense fallback={<div>Loading boat sales...</div>}>
				<ImprovedBoatSales />
			</Suspense>
		</div>
	);
}

async function HomePageContent({ id }: { id: string }) {
	const content = await getPageContent(id);
	return (
		<>
			{content &&
				content.map((block: Block, index: number) => (
					<Suspense key={index} fallback={<div>Loading block...</div>}>
						<RenderBlock block={block} />
					</Suspense>
				))}
		</>
	);
}

import { getHomePage, getPageContent } from "@/lib/sanity";
import { Block, RenderBlock } from "@/components/RenderBlock";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicImprovedBoatSales = dynamic(() => import("@/components/DynamicImprovedBoatSales"), {
	loading: () => <div>Loading boat sales...</div>,
});

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
	const homePage = await getHomePage();

	if (!homePage) {
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
		<Suspense fallback={<div>Loading page content...</div>}>
			<HomePageContent id={homePage._id} />
			<Suspense fallback={<div>Loading boat sales...</div>}>
				<DynamicImprovedBoatSales />
			</Suspense>
		</Suspense>
	);
}

async function HomePageContent({ id }: { id: string }) {
	const content = await getPageContent(id);
	return (
		<>
			{content?.map((block: Block, index: number) => (
				<RenderBlock key={index} block={block} />
			))}
		</>
	);
}
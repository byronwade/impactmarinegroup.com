import { getHomePage } from "@/app/actions/sanity";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHero = dynamic(() => import("@/components/hero"), {
	loading: () => <div>Loading page content...</div>,
});

const DynamicHome = dynamic(() => import("@/components/home"), {
	loading: () => <div>Loading page content...</div>,
});

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
		<>
			<div role="region" aria-label="Home page content">
				<Suspense fallback={<div>Loading page content...</div>}>
					<DynamicHero />
				</Suspense>
				<Suspense fallback={<div>Loading page content...</div>}>
					<DynamicHome />
				</Suspense>
			</div>
		</>
	);
}

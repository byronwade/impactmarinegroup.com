import { getHomePage } from "@/lib/sanity";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { headers } from "next/headers";

const DynamicHero = dynamic(() => import("@/components/hero"), {
	loading: () => <div>Loading page content...</div>,
});

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
	const viewport = (await headers()).get("x-viewport");

	if (!homePage) {
		throw new Error("No home page found");
	}

	return (
		<>
			<link rel="preload" as="image" href="https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/boat-WpdgiqdkSASGXYJVptrk77IVfslKyO.webp" type="image/webp" />
			{viewport !== "mobile" && <link rel="preload" href="https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/impactlogo-HV2Dx0Ahlp1CxDNLc9mT81i3QKal3X.mp4" as="video" type="video/mp4" />}
			<Suspense fallback={<div>Loading page content...</div>}>
				<DynamicHero />
				<DynamicImprovedBoatSales />
			</Suspense>
		</>
	);
}

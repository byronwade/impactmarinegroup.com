import { getFeaturedBoats, getHomePage } from "@/actions/sanity";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const FeaturedBrands = dynamic(() => import("@/components/sections/featured-brands"), {
	loading: () => <div>Loading featured brands...</div>,
});
const FleetSection = dynamic(() => import("@/components/sections/fleet"), {
	loading: () => <div>Loading fleet...</div>,
});
const ServicesSection = dynamic(() => import("@/components/sections/service"), {
	loading: () => <div>Loading services...</div>,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials"), {
	loading: () => <div>Loading testimonials...</div>,
});
const SocialSection = dynamic(() => import("@/components/sections/instagram"), {
	loading: () => <div>Loading social...</div>,
});
const DynamicHero = dynamic(() => import("@/components/hero"), {
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
	const boats = await getFeaturedBoats();

	if (!homePage) {
		throw new Error("No home page found");
	}

	const brands = [
		{ name: "Godfrey", logo: "/godfrey.svg", width: 100, height: 32 },
		{ name: "Tige", logo: "/tige.svg", width: 100, height: 32 },
		{ name: "Lund", logo: "/lund.svg", width: 100, height: 32 },
		{ name: "Sea Ray", logo: "/sea-ray.svg", width: 100, height: 32 },
		{ name: "Bayliner", logo: "/bayliner.svg", width: 100, height: 32 },
		{ name: "Boston Whaler", logo: "/boston-whaler.svg", width: 100, height: 32 },
	];

	const testimonials = [
		{ name: "John D.", text: "The team at Impact Marine Group made buying my first yacht a breeze. Their expertise and customer service are unmatched!", rating: 5 },
		{ name: "Sarah M.", text: "I've been a loyal customer for years. Their maintenance services keep my boat in top shape season after season.", rating: 5 },
		{ name: "Mike R.", text: "The selection of boats is impressive. I found exactly what I was looking for at a great price.", rating: 4 },
	];
	return (
		<>
			<div role="region" aria-label="Home page content">
				<Suspense fallback={<div>Loading page content...</div>}>
					<DynamicHero />
				</Suspense>
				<main className="bg-background">
					<Suspense fallback={<div>Loading page content...</div>}>
						<FeaturedBrands brands={brands} />
					</Suspense>
					<Suspense fallback={<div>Loading page content...</div>}>{boats.length > 0 && <FleetSection boats={boats} />}</Suspense>
					<Suspense fallback={<div>Loading page content...</div>}>
						<ServicesSection />
					</Suspense>
					<Suspense fallback={<div>Loading page content...</div>}>
						<TestimonialsSection testimonials={testimonials} />
					</Suspense>
					<Suspense fallback={<div>Loading page content...</div>}>
						<SocialSection />
					</Suspense>
				</main>
			</div>
		</>
	);
}

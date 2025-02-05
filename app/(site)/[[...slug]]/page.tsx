import { Suspense } from "react";
import { getPageBySlug } from "@/lib/actions/getPages";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Hero, FeaturedBrands, Fleet, Services, Testimonials, Content, About, Brands, Contact, Financing } from "@/blocks";

interface PageProps {
	params: {
		slug?: string[];
	};
}

type Media = {
	id: string;
	url: string;
	filename: string;
	mimeType?: string;
	filesize?: number;
	width?: number;
	height?: number;
	alt?: string;
};

type BaseBlock = {
	id: string;
	blockType: string;
};

type HeroBlock = BaseBlock & {
	blockType: "hero";
	title: string;
	description: string;
	phoneNumber?: string;
	rating?: {
		value: number;
		text: string;
	};
	backgroundImage?: Media;
	backgroundVideo?: Media;
};

type FeaturedBrandsBlock = BaseBlock & {
	blockType: "featuredBrands";
	title: string;
	description: string;
	brands: Array<{
		id: string;
		name: string;
		description?: string;
		logo?: Media;
	}>;
};

type FleetBlock = BaseBlock & {
	blockType: "fleet";
	title: string;
	description: string;
	boats: Array<{
		id: string;
		name: string;
		description?: string;
		image?: Media;
	}>;
};

type ServicesBlock = BaseBlock & {
	blockType: "services";
	title: string;
	subtitle?: string;
	services: Array<{
		id: string;
		title: string;
		description?: string;
		icon?: string;
	}>;
};

type TestimonialsBlock = BaseBlock & {
	blockType: "testimonials";
	title: string;
	description: string;
	testimonials: Array<{
		id: string;
		name: string;
		text: string;
		rating: number;
	}>;
};

type ContentBlock = BaseBlock & {
	blockType: "content";
	content: unknown;
};

type AboutBlock = BaseBlock & {
	blockType: "about";
	title: string;
	content: Array<{ paragraph: string }>;
	image: Media;
	features: Array<{
		icon: "users" | "zap";
		title: string;
		description: string;
	}>;
};

type BrandsBlock = BaseBlock & {
	blockType: "brands";
	title: string;
	subtitle: string;
	brands: Array<{
		name: string;
		description: string;
		features: Array<{ text: string }>;
		image: Media;
		popularModels: Array<{ model: string }>;
	}>;
};

type ContactBlock = BaseBlock & {
	blockType: "contact";
	title: string;
	subtitle: string;
	address: string;
	hours: Array<{ text: string }>;
	phones: Array<{ label: string; number: string }>;
	emails: Array<{ email: string }>;
	areasServed: Array<{ area: string }>;
	mapImage: Media;
	ctaTitle: string;
	ctaDescription: string;
	ctaButtonText: string;
};

type FinancingBlock = BaseBlock & {
	blockType: "financing";
	title: string;
	subtitle: string;
	boatFinancing: {
		title: string;
		description: string;
		features: Array<{ text: string }>;
	};
	serviceFinancing: {
		title: string;
		description: string;
		features: Array<{ text: string }>;
	};
	calculator: {
		title: string;
		defaultAmount: number;
		defaultRate: number;
		defaultTerm: number;
		phoneNumber: string;
	};
	faq: Array<{
		question: string;
		answer: string;
	}>;
	cta: {
		title: string;
		description: string;
		phoneNumber: string;
	};
};

type Block = HeroBlock | FeaturedBrandsBlock | FleetBlock | ServicesBlock | TestimonialsBlock | ContentBlock | AboutBlock | BrandsBlock | ContactBlock | FinancingBlock;

// Block renderer with error boundary
function RenderPageBlock({ block }: { block: Block }) {
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
		case "about":
			return <About {...block} />;
		case "brands":
			return <Brands {...block} />;
		case "contact":
			return <Contact {...block} />;
		case "financing":
			return <Financing {...block} />;
		default:
			console.warn(`Unknown block type: ${blockType}`);
			return null;
	}
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const nextjs15 = await params;
	const page = await getPageBySlug(nextjs15.slug?.join("/") || "home");

	if (!page) {
		return {
			title: "Not Found",
			description: "The page you are looking for does not exist.",
		};
	}

	return {
		title: page.title,
		description: page.seo?.metaDescription,
		openGraph: {
			title: page.seo?.ogTitle || page.title,
			description: page.seo?.ogDescription || page.seo?.metaDescription,
			images: page.seo?.ogImage ? [{ url: page.seo.ogImage.url }] : undefined,
		},
	};
}

export default async function Page({ params }: PageProps) {
	const nextjs15 = await params;
	const slug = nextjs15.slug?.join("/") || "home";

	try {
		console.log("Fetching page data directly for slug:", slug);
		const page = await getPageBySlug(slug);

		if (!page) {
			console.log("Page not found for slug:", slug);
			notFound();
		}

		console.log("Page data:", JSON.stringify(page, null, 2));

		if (!page.content || !Array.isArray(page.content) || page.content.length === 0) {
			console.warn("Page content is empty for page:", page.title);
			return (
				<div className="container mx-auto px-4 py-8">
					<h1 className="text-3xl font-bold mb-4">{page.title}</h1>
					<p className="text-gray-600">This page needs content. Please add blocks in the admin panel.</p>
				</div>
			);
		}

		return (
			<div className="flex flex-col min-h-screen">
				<Suspense fallback={<div>Loading...</div>}>
					<main className="flex-grow">
						{page.content.map((block) => (
							<RenderPageBlock key={block.id} block={block} />
						))}
					</main>
				</Suspense>
			</div>
		);
	} catch (error) {
		console.error("Error rendering page:", error);
		throw error;
	}
}

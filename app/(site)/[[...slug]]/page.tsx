import { Suspense } from "react";
import { getPageBySlug } from "@/lib/actions/getPages";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Hero, FeaturedBrands, Fleet, Services, Testimonials, Content, About, Brands, Contact, Financing, AboutUs } from "@/blocks";
import type { RichTextContent } from "@/components/ui/rich-text";

interface PageProps {
	params: {
		slug?: string[];
	};
}

type BaseBlock = {
	id?: string | null | undefined;
	blockType: string;
};

type ImageType = {
	url: string;
	alt?: string;
};

type OptionalImageType = ImageType | null | undefined;

type HeroBlock = BaseBlock & {
	blockType: "hero";
	title: string;
	description: string;
	phoneNumber?: string;
	rating?: {
		value: number;
		text: string;
	};
	backgroundImage?: OptionalImageType;
	backgroundVideo?: OptionalImageType;
};

type FeaturedBrandsBlock = BaseBlock & {
	blockType: "featuredBrands";
	title: string;
	description: string;
	brands: Array<{
		id?: string | null | undefined;
		name: string;
		description?: string;
		logo?: OptionalImageType;
	}>;
};

type FleetBlock = BaseBlock & {
	blockType: "fleet";
	title: string;
	description: string;
	boats: Array<{
		id?: string | null | undefined;
		name: string;
		description?: string;
		image?: OptionalImageType;
	}>;
};

type ServicesBlock = BaseBlock & {
	blockType: "services";
	title: string;
	subtitle: string;
	services: Array<{
		id?: string | null | undefined;
		title: string;
		description?: string;
		icon?: string;
	}>;
	phoneNumber: string;
	reasons: string[];
	reasonsImage: OptionalImageType;
	servicePolicies: Array<{
		title: string;
		description: string;
	}>;
};

type TestimonialsBlock = BaseBlock & {
	blockType: "testimonials";
	title: string;
	description: string;
	testimonials: Array<{
		id?: string | null | undefined;
		name: string;
		text: string;
		rating: number;
	}>;
};

type ContentBlock = BaseBlock & {
	blockType: "content";
	content: RichTextContent;
};

type AboutBlock = BaseBlock & {
	blockType: "about";
	title: string;
	content: Array<{ paragraph: string }>;
	image: OptionalImageType;
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
		image: OptionalImageType;
		popularModels: Array<{ model: string }>;
	}>;
};

type ContactBlock = BaseBlock & {
	blockType: "contact";
	title: string;
	subtitle: string;
	address: string;
	hours: Array<{ text: string; id?: string | null | undefined }>;
	phones: Array<{ label: string; number: string; id?: string | null | undefined }>;
	emails: Array<{ email: string; id?: string | null | undefined }>;
	areasServed: Array<{ area: string; id?: string | null | undefined }>;
	mapImage: OptionalImageType;
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

type AboutUsBlock = BaseBlock & {
	blockType: "aboutUs";
	aboutSection: {
		title: string;
		content: Array<{ paragraph: string }>;
		image: OptionalImageType;
		features: Array<{
			icon: "users" | "zap";
			title: string;
			description: string;
		}>;
	};
	brandsSection: {
		title: string;
		subtitle: string;
		brands: Array<{
			name: string;
			description: string;
			features: Array<{ text: string }>;
			image: OptionalImageType;
			popularModels: Array<{ model: string }>;
		}>;
	};
	servicesSection: {
		title: string;
		subtitle: string;
		description: string;
		services: Array<{
			icon: "ship" | "wrench" | "compass" | "lifeBuoy" | "dollarSign" | "users" | "zap" | "shield" | "award";
			title: string;
			description: string;
		}>;
	};
	testimonialsSection: {
		title: string;
		subtitle: string;
		testimonials: Array<{
			name: string;
			location: string;
			text: string;
		}>;
	};
	contactSection: {
		title: string;
		subtitle: string;
		address: string;
		hours: Array<{ text: string }>;
		phones: Array<{ label: string; number: string }>;
		emails: Array<{ email: string }>;
		areasServed: Array<{ area: string }>;
		mapImage: OptionalImageType;
		ctaTitle: string;
		ctaDescription: string;
		ctaButtonText: string;
	};
};

type Block = HeroBlock | FeaturedBrandsBlock | FleetBlock | ServicesBlock | TestimonialsBlock | ContentBlock | AboutBlock | BrandsBlock | ContactBlock | FinancingBlock | AboutUsBlock;

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
		case "aboutUs":
			return <AboutUs {...block} />;
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
	const page = await getPageBySlug(slug);

	if (!page) {
		notFound();
	}

	if (!page.content || page.content.length === 0) {
		return <div>Please add content to this page.</div>;
	}

	return (
		<Suspense>
			{page.content.map((block: Block) => (
				<RenderPageBlock key={block.id || undefined} block={block} />
			))}
		</Suspense>
	);
}

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SanityBrand, SanityService } from "@/actions/sanity";

// Dynamic imports for client components
const CallToActionRenderer = dynamic(() => import("./BlockRenderers").then((mod) => mod.CallToActionRenderer), {
	loading: () => <div>Loading call to action...</div>,
});

const VideoRenderer = dynamic(() => import("./BlockRenderers").then((mod) => mod.VideoRenderer), {
	loading: () => <div>Loading video...</div>,
});

// Dynamic imports for sections
const FeaturedBrands = dynamic(() => import("./sections/featured-brands"), {
	loading: () => <div>Loading brands...</div>,
});

const FleetSection = dynamic(() => import("./sections/fleet"), {
	loading: () => <div>Loading fleet...</div>,
});

const ServicesSection = dynamic(() => import("./sections/service"), {
	loading: () => <div>Loading services...</div>,
});

const TestimonialsSection = dynamic(() => import("./sections/testimonials"), {
	loading: () => <div>Loading testimonials...</div>,
});

const SocialSection = dynamic(() => import("./sections/instagram"), {
	loading: () => <div>Loading social...</div>,
});

const Hero = dynamic(() => import("./sections/hero"), {
	loading: () => <div>Loading hero...</div>,
});

const AccordionBlock = dynamic(() => import("./blocks/AccordionBlock"), {
	loading: () => <div>Loading accordion...</div>,
});

// Base interfaces
interface BlockBase {
	_type: string;
	_key: string;
	title?: string;
}

interface Asset {
	url: string;
	metadata: {
		dimensions: {
			width: number;
			height: number;
		};
	};
}

// Specific block interfaces
interface HeroBlock extends BlockBase {
	_type: "hero";
	heading?: string;
	subheading?: string;
	backgroundImage?: {
		asset?: Asset;
	};
	backgroundVideo?: {
		asset?: {
			url: string;
		};
	};
	primaryCta?: {
		text: string;
		link: string;
		icon?: string;
	};
	secondaryCta?: {
		text: string;
		link: string;
	};
	rating?: {
		show: boolean;
		value: string;
	};
}

interface BrandsBlock extends BlockBase {
	_type: "featuredBrands";
	brands?: SanityBrand[];
}

interface ServicesBlock extends BlockBase {
	_type: "services";
	services?: SanityService[];
	subtitle?: string;
}

interface FleetBlock extends BlockBase {
	_type: "fleet";
	boats?: Array<{
		_id: string;
		name: string;
		manufacturer: string;
		model: string;
		trim?: string;
		modelYear: string;
		condition: string;
		status: string;
		price: number;
		description: string;
		mainImage: {
			asset: {
				url: string;
			};
		};
		specs?: {
			length?: string;
			capacity?: string;
			speed?: string;
		};
		available: boolean;
	}>;
}

interface TestimonialsBlock extends BlockBase {
	_type: "testimonialSection";
	testimonials?: Array<{
		_id: string;
		name: string;
		text: string;
		rating: number;
	}>;
}

interface InstagramBlock extends BlockBase {
	_type: "instagramFeed";
	displayCount?: number;
}

interface AccordionContent {
	_type: string;
	children?: unknown;
	[key: string]: unknown;
}

interface AccordionItem {
	_key: string;
	trigger: string;
	content: AccordionContent[];
}

interface AccordionBlock extends BlockBase {
	_type: "accordion";
	items?: AccordionItem[];
}

interface CallToActionBlock extends BlockBase {
	_type: "callToAction";
	heading?: string;
	text?: string;
	buttonText?: string;
	buttonLink?: string;
}

interface VideoBlock extends BlockBase {
	_type: "video";
	videoRef: React.RefObject<HTMLVideoElement>;
	isMobile: boolean;
}

type Block = HeroBlock | BrandsBlock | ServicesBlock | FleetBlock | TestimonialsBlock | InstagramBlock | AccordionBlock | CallToActionBlock | VideoBlock;

export default function RenderBlock({ block }: { block: Block }) {
	if (!block) return null;

	// Add detailed logging for each block type
	console.log(`Rendering block type: ${block._type}`, {
		blockData: block,
		hasBackgroundImage: block._type === "hero" && !!(block as HeroBlock).backgroundImage?.asset?.url,
		hasBackgroundVideo: block._type === "hero" && !!(block as HeroBlock).backgroundVideo?.asset?.url,
		brandsLength: block._type === "featuredBrands" ? (block as BrandsBlock).brands?.length : undefined,
		boatsLength: block._type === "fleet" ? (block as FleetBlock).boats?.length : undefined,
		servicesLength: block._type === "services" ? (block as ServicesBlock).services?.length : undefined,
		testimonialsLength: block._type === "testimonialSection" ? (block as TestimonialsBlock).testimonials?.length : undefined,
	});

	return (
		<Suspense fallback={<div>Loading block...</div>}>
			{(() => {
				switch (block._type) {
					case "hero":
						console.log("Hero data:", block);
						return <Hero {...block} />;

					case "featuredBrands":
						console.log("Featured brands block data:", block);
						console.log("Featured brands array:", block.brands);
						return block.brands?.some((brand) => brand && brand.name && brand.logo?.asset?.url) ? <FeaturedBrands brands={block.brands} /> : null;

					case "fleet":
						console.log("Fleet data:", block.boats);
						//@ts-expect-error cant figure it out
						return block.boats?.length ? <FleetSection boats={block.boats} title={block.title} /> : null;

					case "services":
						console.log("Services data:", block.services);
						return block.services?.length ? <ServicesSection services={block.services} title={block.title} subtitle={block.subtitle} /> : null;

					case "testimonialSection":
						console.log("Testimonials data:", block.testimonials);
						return block.testimonials?.length ? <TestimonialsSection testimonials={block.testimonials} title={block.title} /> : null;

					case "instagramFeed":
						console.log("Instagram data:", {
							title: block.title,
							displayCount: block.displayCount,
						});
						return block.displayCount ? <SocialSection title={block.title} displayCount={block.displayCount} /> : null;

					case "accordion":
						//@ts-expect-error cant figure it out
						return block.items?.length ? <AccordionBlock items={block.items} /> : null;

					case "callToAction":
						return <CallToActionRenderer block={block} />;

					case "video":
						return <VideoRenderer {...block} />;

					default:
						return null;
				}
			})()}
		</Suspense>
	);
}

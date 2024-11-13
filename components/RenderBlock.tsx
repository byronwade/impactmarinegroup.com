import dynamic from "next/dynamic";
import type { Block, HeroBlock, BrandsBlock, ServicesBlock, FleetBlock, TestimonialsBlock, InstagramBlock, AccordionBlock, CallToActionBlock, VideoBlock, AccordionContent, AccordionItem, SanityImage } from "@/types/sanity";

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

// Add type guards
const isAccordionBlock = (block: Block): block is AccordionBlock => block._type === "accordion";

const isCallToActionBlock = (block: Block): block is CallToActionBlock => block._type === "callToAction";

const isVideoBlock = (block: Block): block is VideoBlock => block._type === "video";

// Add type guard for AccordionContent
const isValidAccordionContent = (content: unknown): content is AccordionContent => {
	if (!content || typeof content !== "object") return false;
	const c = content as AccordionContent;
	return c._type === "block" && Array.isArray(c.children) && c.children.every((child) => typeof child === "object" && child !== null && "text" in child && typeof child.text === "string");
};

// Add type guard for SanityImage
const isSanityImage = (image: unknown): image is SanityImage => {
	if (!image || typeof image !== "object") return false;
	const img = image as SanityImage;
	return img._type === "image" && !!img.asset?.url;
};

export default function RenderBlock({ block }: { block: Block }) {
	if (!block) return null;

	// Type guard functions
	const isHeroBlock = (block: Block): block is HeroBlock => block._type === "hero";
	const isBrandsBlock = (block: Block): block is BrandsBlock => block._type === "featuredBrands";
	const isFleetBlock = (block: Block): block is FleetBlock => block._type === "fleet";
	const isServicesBlock = (block: Block): block is ServicesBlock => block._type === "services";
	const isTestimonialsBlock = (block: Block): block is TestimonialsBlock => block._type === "testimonialSection";
	const isInstagramBlock = (block: Block): block is InstagramBlock => block._type === "instagramFeed";

	// Logging with type guards
	console.log("Rendering block type:", block._type, {
		blockData: block,
		hasBackgroundImage: isHeroBlock(block) && !!block.backgroundImage?.asset?.url,
		hasBackgroundVideo: isHeroBlock(block) && !!block.backgroundVideo?.asset?.url,
		brandsLength: isBrandsBlock(block) ? block.brands?.length : undefined,
		boatsLength: isFleetBlock(block) ? block.boats?.length : undefined,
		servicesLength: isServicesBlock(block) ? block.services?.length : undefined,
	});

	return (
		<div className="w-full">
			{(() => {
				switch (block._type) {
					case "hero":
						return <Hero {...block} />;

					case "featuredBrands":
						return isBrandsBlock(block) && block.brands?.some((brand) => brand?.name && brand?.logo?.asset?.url) ? <FeaturedBrands brands={block.brands} /> : null;

					case "fleet":
						if (!isFleetBlock(block)) return null;
						return block.boats?.length && block.boats.every((boat) => boat.mainImage && isSanityImage(boat.mainImage)) ? <FleetSection boats={block.boats} title={block.title} /> : null;

					case "services":
						return isServicesBlock(block) && block.services?.length ? <ServicesSection services={block.services} title={block.title} subtitle={block.subtitle} /> : null;

					case "testimonialSection":
						return isTestimonialsBlock(block) && block.testimonials?.length ? <TestimonialsSection testimonials={block.testimonials} title={block.title} /> : null;

					case "instagramFeed":
						return isInstagramBlock(block) && block.displayCount ? <SocialSection title={block.title} displayCount={block.displayCount} /> : null;

					case "accordion":
						if (!isAccordionBlock(block)) return null;

						const validItems: AccordionItem[] = block.items
							.filter((item) => item.content.every(isValidAccordionContent))
							.map((item) => ({
								_key: item._key,
								trigger: item.trigger,
								content: item.content as AccordionContent[],
							}));

						return validItems.length ? <AccordionBlock items={validItems} /> : null;

					case "callToAction":
						if (!isCallToActionBlock(block)) return null;
						return <CallToActionRenderer heading={block.heading} text={block.text} buttonText={block.buttonText} buttonLink={block.buttonLink} />;

					case "video":
						if (!isVideoBlock(block)) return null;
						return <VideoRenderer videoRef={block.videoRef} isMobile={block.isMobile} video={block.video} />;

					default:
						return null;
				}
			})()}
		</div>
	);
}

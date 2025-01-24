"use client";

import dynamic from "next/dynamic";
import type { Block } from "@/types/payload";
import { useRef } from "react";

// Dynamic imports for client components
const CallToActionRenderer = dynamic(() => import("./BlockRenderers").then((mod) => mod.CallToActionRenderer), {
	loading: () => <div className="animate-pulse h-32 bg-muted rounded-lg" />,
});

const VideoRenderer = dynamic(() => import("./BlockRenderers").then((mod) => mod.VideoRenderer), {
	loading: () => <div className="animate-pulse h-64 bg-muted rounded-lg" />,
});

// Dynamic imports for sections
const FeaturedBrands = dynamic(() => import("./sections/featured-brands"), {
	loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />,
});

const FleetSection = dynamic(() => import("./sections/fleet"), {
	loading: () => <div className="animate-pulse h-96 bg-muted rounded-lg" />,
});

const ServicesSection = dynamic(() => import("./sections/service"), {
	loading: () => <div className="animate-pulse h-64 bg-muted rounded-lg" />,
});

const TestimonialsSection = dynamic(() => import("./sections/testimonials"), {
	loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />,
});

const SocialSection = dynamic(() => import("./sections/instagram"), {
	loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />,
});

const Hero = dynamic(() => import("./sections/hero"), {
	loading: () => <div className="animate-pulse h-[80vh] bg-muted rounded-lg" />,
});

const AccordionBlock = dynamic(() => import("./blocks/AccordionBlock"), {
	loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />,
});

// Error boundary component
function ErrorBoundary({ error }: { error: Error }) {
	return (
		<div className="flex min-h-[200px] items-center justify-center bg-muted/10 rounded-lg p-4">
			<div className="text-center">
				<h3 className="text-lg font-semibold mb-2">Failed to load block</h3>
				<p className="text-sm text-muted-foreground">{error.message}</p>
			</div>
		</div>
	);
}

// Block renderer with error handling
export default function RenderBlock({ block }: { block: Block }) {
	if (!block) return null;

	try {
		const blockType = block.blockType;

		switch (blockType) {
			case "hero":
				return <Hero {...block} />;

			case "featuredBrands":
				return <FeaturedBrands brands={block.brands} />;

			case "fleet":
				return <FleetSection boats={block.boats} title={block.title} />;

			case "services":
				return <ServicesSection services={block.services} title={block.title} subtitle={block.subtitle} />;

			case "testimonialSection":
				return <TestimonialsSection testimonials={block.testimonials} title={block.title} />;

			case "instagramFeed":
				return <SocialSection title={block.title} displayCount={block.displayCount} />;

			case "accordion":
				return <AccordionBlock items={block.items} />;

			case "callToAction":
				return <CallToActionRenderer {...block} />;

			case "video": {
				const videoRef = useRef<HTMLVideoElement>(null);
				return <VideoRenderer videoRef={videoRef} video={block.video} isMobile={false} />;
			}

			default:
				console.warn(`Unknown block type: ${blockType}`);
				return null;
		}
	} catch (error) {
		console.error("Error rendering block:", error);
		return <ErrorBoundary error={error as Error} />;
	}
}

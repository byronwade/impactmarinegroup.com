import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for client components
const CallToActionRenderer = dynamic(() => import("./client/BlockRenderers").then((mod) => mod.CallToActionRenderer), {
	loading: () => <div>Loading call to action...</div>,
});
const VideoRenderer = dynamic(() => import("./client/BlockRenderers").then((mod) => mod.VideoRenderer), {
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

const Hero = dynamic(() => import("./Hero"), {
	loading: () => <div>Loading hero...</div>,
});

const AccordionBlock = dynamic(() => import("./blocks/AccordionBlock"), {
	loading: () => <div>Loading accordion...</div>,
});

export interface Block {
	_type: string;
	_key: string;
	brands?: any[];
	services?: any[];
	testimonials?: any[];
	boats?: any[];
	items?: any[];
}

export default function RenderBlock({ block }: { block: Block }) {
	if (!block) return null;

	return (
		<Suspense fallback={<div>Loading block...</div>}>
			{(() => {
				switch (block._type) {
					case "hero":
						return <Hero {...block} />;
					case "featuredBrands":
						return <FeaturedBrands brands={block.brands} />;
					case "fleet":
						return <FleetSection boats={block.boats} />;
					case "services":
						return <ServicesSection services={block.services} />;
					case "testimonials":
						return <TestimonialsSection testimonials={block.testimonials} />;
					case "instagram":
						return <SocialSection />;
					case "accordion":
						return block.items?.length ? <AccordionBlock items={block.items} /> : null;
					case "callToAction":
						return <CallToActionRenderer block={block} />;
					case "video":
						return <VideoRenderer block={block} />;
					default:
						return null;
				}
			})()}
		</Suspense>
	);
}

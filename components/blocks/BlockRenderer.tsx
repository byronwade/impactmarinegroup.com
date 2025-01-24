import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const FeaturedBrands = dynamic(() => import("./FeaturedBrands"));
const Fleet = dynamic(() => import("./Fleet"));
const Services = dynamic(() => import("./Services"));
const Testimonials = dynamic(() => import("./Testimonials"));

interface Block {
	blockType: "hero" | "featuredBrands" | "fleet" | "services" | "testimonials";
	id?: string;
	heading?: string;
	subheading?: string;
	primaryCta?: {
		text: string;
		link: string;
	};
	secondaryCta?: {
		text: string;
		link: string;
	};
	brands?: string[];
	boats?: string[];
	services?: string[];
	testimonials?: string[];
	subtitle?: string;
}

interface BlockRendererProps {
	blocks: Block[];
}

const blockComponents = {
	hero: Hero,
	featuredBrands: FeaturedBrands,
	fleet: Fleet,
	services: Services,
	testimonials: Testimonials,
} as const;

export function BlockRenderer({ blocks }: BlockRendererProps) {
	if (!blocks) {
		return null;
	}

	return (
		<div className="w-full">
			{blocks.map((block, index) => {
				const Component = blockComponents[block.blockType];
				if (!Component) {
					console.warn(`Block type not found: ${block.blockType}`);
					return null;
				}
				return <Component key={index} {...block} />;
			})}
		</div>
	);
}

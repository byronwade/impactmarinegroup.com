"use client";

import { Hero, FeaturedBrands, Fleet, Services, Testimonials, Content, About, Brands, Contact } from "@/blocks";

const blockComponents = {
	hero: Hero,
	featuredBrands: FeaturedBrands,
	fleet: Fleet,
	services: Services,
	testimonials: Testimonials,
	content: Content,
	about: About,
	brands: Brands,
	contact: Contact,
} as const;

interface Block {
	id: string;
	blockType: keyof typeof blockComponents;
	[key: string]: any;
}

export default function BlockRenderer({ block }: { block: Block }) {
	const Component = blockComponents[block.blockType];
	if (!Component) return null;
	return <Component {...block} />;
}

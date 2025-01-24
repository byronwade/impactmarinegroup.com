"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
	loading: () => null,
});

interface HeroProps {
	title: string;
	description: string;
	primaryCta?: {
		label: string;
		link: string;
	};
	secondaryCta?: {
		label: string;
		link: string;
	};
}

export default function Hero({ title, description, primaryCta, secondaryCta }: HeroProps) {
	return (
		<section className="relative py-20 overflow-hidden bg-white">
			<div className="container relative z-10 px-4 mx-auto">
				<HeroContent title={title} description={description} primaryCta={primaryCta} secondaryCta={secondaryCta} />
			</div>
		</section>
	);
}

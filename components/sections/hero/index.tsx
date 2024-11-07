"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
	loading: () => null,
});

const HeroContent = dynamic(() => import("./HeroContent"), {
	ssr: false,
});

interface HeroProps {
	heading?: string;
	subheading?: string;
	backgroundImage?: {
		asset?: {
			url?: string;
		};
	};
	backgroundVideo?: {
		asset?: {
			url?: string;
		};
	};
	primaryCta?: {
		text?: string;
		link?: string;
		icon?: string;
	};
	secondaryCta?: {
		text?: string;
		link?: string;
	};
	rating?: {
		show?: boolean;
		value?: string;
	};
}

export default function Hero(props: HeroProps) {
	//console.log("Hero props:", props); // Debug log

	if (!props?.heading && !props?.subheading) {
		return (
			<section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
				<div className="text-white text-center">Loading...</div>
			</section>
		);
	}

	return (
		<section className="relative w-full h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
			<Suspense fallback={<div className="absolute inset-0 bg-gray-900" />}>
				<HeroBackground data={props} />
			</Suspense>
			<Suspense fallback={null}>
				<HeroContent data={props} />
			</Suspense>
		</section>
	);
}

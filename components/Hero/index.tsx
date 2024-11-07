"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
	loading: () => null,
});

const HeroContent = dynamic(() => import("./HeroContent"), {
	ssr: false,
});

export default function Hero() {
	return (
		<section className="relative w-full h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
			<Suspense fallback={<div className="absolute inset-0 bg-gray-900" />}>
				<HeroBackground />
			</Suspense>
			<Suspense fallback={null}>
				<HeroContent />
			</Suspense>
		</section>
	);
}

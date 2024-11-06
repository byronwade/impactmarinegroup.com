"use client";

import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("./HeroContent"), {
	loading: () => null,
	ssr: false,
});

export default function ClientHeroWrapper() {
	return <HeroContent />;
}

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getViewport } from "@/app/actions/viewport";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
	loading: () => null,
});

const ClientHeroWrapper = dynamic(() => import("./ClientHeroWrapper"));

export default async function Hero() {
	const viewport = await getViewport();

	return (
		<section className="relative w-full h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
			<Suspense fallback={<div className="absolute inset-0 bg-gray-900" />}>
				<HeroBackground viewport={viewport} />
			</Suspense>
			<Suspense fallback={null}>
				<ClientHeroWrapper />
			</Suspense>
		</section>
	);
}

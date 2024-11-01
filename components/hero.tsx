import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
	loading: () => <div>Loading hero background...</div>,
});
const HeroContent = dynamic(() => import("@/components/HeroContent"), {
	loading: () => <div>Loading hero content...</div>,
});

export default function Hero() {
	return (
		<section className="relative w-full h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
			<Suspense fallback={<>Loading...</>}>
				<HeroBackground />
				<HeroContent />
			</Suspense>
		</section>
	);
}

import HeroBackground from "@/components/HeroBackground";
import HeroContent from "@/components/HeroContent";
export default function Hero() {
	return (
		<section className="relative w-full h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
			<HeroBackground />
			<HeroContent />
		</section>
	);
}

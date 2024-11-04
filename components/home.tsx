"use client";

import { useMemo, useCallback, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SanityBoat, getFeaturedBoats } from "@/app/actions/sanity";

const FeaturedBrands = dynamic(() => import("./sections/featured-brands"), {
	loading: () => <div>Loading featured brands...</div>,
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

export default function Home() {
	const [currentBoat, setCurrentBoat] = useState(0);
	const [boats, setBoats] = useState<SanityBoat[]>([]);

	// Fetch boats from Sanity
	useEffect(() => {
		const fetchBoats = async () => {
			const boats = await getFeaturedBoats();
			setBoats(boats);
		};
		fetchBoats();
	}, []);

	const brands = useMemo(
		() => [
			{ name: "Godfrey", logo: "/godfrey.svg", width: 100, height: 32 },
			{ name: "Tige", logo: "/tige.svg", width: 100, height: 32 },
			{ name: "Lund", logo: "/lund.svg", width: 100, height: 32 },
			{ name: "Sea Ray", logo: "/sea-ray.svg", width: 100, height: 32 },
			{ name: "Bayliner", logo: "/bayliner.svg", width: 100, height: 32 },
			{ name: "Boston Whaler", logo: "/boston-whaler.svg", width: 100, height: 32 },
		],
		[]
	);

	const testimonials = useMemo(
		() => [
			{ name: "John D.", text: "The team at Impact Marine Group made buying my first yacht a breeze. Their expertise and customer service are unmatched!", rating: 5 },
			{ name: "Sarah M.", text: "I've been a loyal customer for years. Their maintenance services keep my boat in top shape season after season.", rating: 5 },
			{ name: "Mike R.", text: "The selection of boats is impressive. I found exactly what I was looking for at a great price.", rating: 4 },
		],
		[]
	);

	const nextBoat = useCallback(() => setCurrentBoat((prev) => (prev + 1) % boats.length), [boats.length]);

	const prevBoat = useCallback(() => setCurrentBoat((prev) => (prev - 1 + boats.length) % boats.length), [boats.length]);

	return (
		<div className="bg-background">
			<main>
				<FeaturedBrands brands={brands} />
				{boats.length > 0 && <FleetSection currentBoat={currentBoat} nextBoat={nextBoat} prevBoat={prevBoat} boats={boats} />}
				<ServicesSection />
				<TestimonialsSection testimonials={testimonials} />
				<SocialSection />
			</main>
		</div>
	);
}

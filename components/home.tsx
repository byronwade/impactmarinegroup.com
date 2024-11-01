"use client";

import { useMemo, useCallback, useState } from "react";
import dynamic from "next/dynamic";

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
	const boats = useMemo(
		() => [
			{ name: "Luxury Yacht 2024", price: "1,200,000", image: "/service-department.webp" },
			{ name: "Speedboat Deluxe", price: "500,000", image: "/service-department.webp" },
			{ name: "Family Cruiser", price: "800,000", image: "/service-department.webp" },
		],
		[]
	);

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

	const [currentBoat, setCurrentBoat] = useState(0);

	const nextBoat = useCallback(() => setCurrentBoat((prev) => (prev + 1) % boats.length), [boats.length]);
	const prevBoat = useCallback(() => setCurrentBoat((prev) => (prev - 1 + boats.length) % boats.length), [boats.length]);

	return (
		<div className="bg-background">
			<main>
				<FeaturedBrands brands={brands} />
				<FleetSection currentBoat={currentBoat} nextBoat={nextBoat} prevBoat={prevBoat} boats={boats} />
				<ServicesSection />
				<TestimonialsSection testimonials={testimonials} />
				<SocialSection />
			</main>
		</div>
	);
}

"use client";

import { useMemo, useCallback, useState, lazy, Suspense } from "react";

const FeaturedBrands = lazy(() => import("./sections/featured-brands"));
const FleetSection = lazy(() => import("./sections/fleet"));
const ServicesSection = lazy(() => import("./sections/service"));
const TestimonialsSection = lazy(() => import("./sections/testimonials"));
const SocialSection = lazy(() => import("./sections/instagram"));

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
				<Suspense fallback={<div>Loading featured brands...</div>}>
					<FeaturedBrands brands={brands} />
				</Suspense>
				<Suspense fallback={<div>Loading fleet...</div>}>
					<FleetSection currentBoat={currentBoat} nextBoat={nextBoat} prevBoat={prevBoat} boats={boats} />
				</Suspense>
				<Suspense fallback={<div>Loading services...</div>}>
					<ServicesSection />
				</Suspense>
				<Suspense fallback={<div>Loading testimonials...</div>}>
					<TestimonialsSection testimonials={testimonials} />
				</Suspense>
				<Suspense fallback={<div>Loading social...</div>}>
					<SocialSection />
				</Suspense>
			</main>
		</div>
	);
}

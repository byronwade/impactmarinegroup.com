"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useConfig } from "@/hooks/useConfig";

const AnimatedElement = ({ delay, children }: { delay: number; children: React.ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	return <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>{children}</div>;
};

export default function HeroContent() {
	const { config, loading } = useConfig();

	if (loading) return <div>Loading...</div>;
	if (!config) return null;

	// Format phone number for tel: link
	const phoneNumberRaw = config.phoneNumber.replace(/[^0-9+]/g, "");

	return (
		<div className="relative container max-w-7xl mx-auto px-4 py-12 sm:py-24 lg:py-32 z-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
				<div className="lg:col-span-2 space-y-8">
					<AnimatedElement delay={500}>
						<h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
							Expert Boat Service <br className="hidden sm:inline" />
							You Can Trust
						</h1>
					</AnimatedElement>
					<AnimatedElement delay={700}>
						<p className="text-xl sm:text-2xl text-white/90 max-w-2xl">Certified Technicians, Fast Turnaround, and Unmatched Care for Your Boat.</p>
					</AnimatedElement>
					<AnimatedElement delay={900}>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" className="bg-primary hover:bg-primary/90">
								<Calendar className="mr-2 h-5 w-5" /> Schedule Service
							</Button>
							<Button variant="outline" size="lg" className="text-primary border-primary">
								View Our Services <ChevronRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</AnimatedElement>
					<AnimatedElement delay={1100}>
						<div className="flex items-center text-white">
							<PhoneCall className="h-6 w-6 mr-2" aria-hidden="true" />
							<a href={`tel:${phoneNumberRaw}`} className="text-xl font-semibold hover:text-primary transition-colors">
								<span>Call Now: </span>
								<span>{config.phoneNumber}</span>
							</a>
						</div>
					</AnimatedElement>
					<AnimatedElement delay={1300}>
						<div>
							<Badge variant="secondary" className="text-lg px-3 py-1 bg-primary text-white">
								<svg className="h-5 w-5 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<span className="font-bold">4.9 Star Rated</span>
							</Badge>
						</div>
					</AnimatedElement>
				</div>
			</div>
		</div>
	);
}

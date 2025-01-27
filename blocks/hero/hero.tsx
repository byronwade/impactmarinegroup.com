"use client";

import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { useSettings } from "@/hooks/useSettings";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
	loading: () => null,
});

interface HeroBlock {
	id: string;
	blockType: "hero";
	title: string;
	description: string;
	phoneNumber?: string;
	rating?: {
		value: number;
		text: string;
	};
	backgroundImage?: {
		id: string;
		url: string;
		filename: string;
	};
	backgroundVideo?: {
		id: string;
		url: string;
		filename: string;
	};
	primaryCta?: {
		label: string;
		link: string;
		icon?: string;
	};
	secondaryCta?: {
		label: string;
		link: string;
		icon?: string;
	};
}

export default function Hero(props: HeroBlock) {
	const { title, description, primaryCta, secondaryCta, rating, backgroundImage, backgroundVideo } = props;
	const settings = useSettings();
	const phoneNumber = props.phoneNumber || settings?.phone || "(770) 881-7808";

	// Debug logs
	console.log("Hero props:", props);
	console.log("Background video:", backgroundVideo);
	console.log("Background image:", backgroundImage);

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<HeroBackground backgroundImage={backgroundImage} backgroundVideo={backgroundVideo} />
			<div className="relative container mx-auto px-4 py-12 sm:py-24 lg:py-32 z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div className="space-y-8">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white" style={{ contentVisibility: "auto" }}>
							{title}
						</h1>
						<p className="text-xl sm:text-2xl text-white/90 max-w-2xl">{description}</p>
						<div className="flex flex-wrap gap-4">
							{primaryCta && (
								<Button size="lg" className="bg-primary hover:bg-primary/90">
									{primaryCta.icon === "calendar" && <Calendar className="mr-2 h-5 w-5" />}
									{primaryCta.label}
								</Button>
							)}
							{secondaryCta && (
								<Button variant="outline" size="lg" className="bg-white text-primary border-primary hover:bg-white/90">
									{secondaryCta.label}
									<ChevronRight className="ml-2 h-5 w-5" />
								</Button>
							)}
						</div>
						{phoneNumber && (
							<div className="flex items-center text-white">
								<PhoneCall className="h-6 w-6 mr-2" />
								<span className="text-xl font-semibold">Call Now: {phoneNumber}</span>
							</div>
						)}
						{rating && (
							<div>
								<Badge variant="secondary" className="text-lg px-3 py-1 bg-primary text-white">
									<svg className="h-5 w-5 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span className="font-bold">{rating.text}</span>
								</Badge>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

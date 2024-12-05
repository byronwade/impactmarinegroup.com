"use client";

import { memo, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Waves, Anchor, Wind } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SanityBoat } from "@/actions/sanity";
import { formatCurrency } from "@/lib/utils";

const BoatImage = memo(function BoatImage({ boat, priority }: { boat: SanityBoat; priority?: boolean }) {
	return <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">{boat.mainImage?.asset?.url && <Image alt={`${boat.name} - Luxury boat by Impact Marine Group`} src={boat.mainImage.asset.url} className="object-cover transition-transform duration-500 hover:scale-105" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={priority} quality={75} loading={priority ? "eager" : "lazy"} />}</div>;
});

export default function FleetSection({ boats, title = "Discover Our Premium Fleet" }: { boats: SanityBoat[]; title?: string }) {
	//console.log("Fleet section data:", { boats, title });

	const [currentBoat, setCurrentBoat] = useState(0);

	const nextBoat = useCallback(() => setCurrentBoat((prev) => (prev + 1) % boats.length), [boats.length]);

	const prevBoat = useCallback(() => setCurrentBoat((prev) => (prev - 1 + boats.length) % boats.length), [boats.length]);
	if (!boats?.length) return null;

	const currentBoatData = boats[currentBoat];

	return (
		<section id="fleet" aria-labelledby="fleet-heading" className="py-16">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<h2 id="fleet-heading" className="text-4xl font-bold tracking-tighter text-center mb-8">
					{title}
				</h2>
				<div key="fleet-content" className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div key="fleet-image" className="w-full lg:w-3/5 relative">
						<BoatImage boat={currentBoatData} priority />
						<Button variant="outline" size="icon" className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/80 hover:bg-background" onClick={prevBoat} aria-label="Previous boat">
							<ChevronLeft className="h-6 w-6" />
						</Button>
						<Button variant="outline" size="icon" className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/80 hover:bg-background" onClick={nextBoat} aria-label="Next boat">
							<ChevronRight className="h-6 w-6" />
						</Button>
					</div>
					<div key="fleet-details" className="w-full lg:w-2/5 space-y-6">
						<div key="fleet-header">
							<h3 className="text-3xl font-bold mb-2">{currentBoatData.name}</h3>
							<p className="text-lg text-foreground mb-4">{currentBoatData.description}</p>
							<div key="fleet-specs" className="flex flex-wrap gap-4 mb-6">
								{currentBoatData.specs?.length && (
									<Badge variant="outline" className="text-sm font-medium">
										<Waves className="w-4 h-4 mr-1" />
										Length: {currentBoatData.specs.length}
									</Badge>
								)}
								{currentBoatData.specs?.capacity && (
									<Badge variant="outline" className="text-sm font-medium">
										<Anchor className="w-4 h-4 mr-1" />
										Capacity: {currentBoatData.specs.capacity}
									</Badge>
								)}
								{currentBoatData.specs?.speed && (
									<Badge variant="outline" className="text-sm font-medium">
										<Wind className="w-4 h-4 mr-1" />
										Speed: {currentBoatData.specs.speed}
									</Badge>
								)}
							</div>
							<p className="text-2xl font-bold mb-6">{formatCurrency(currentBoatData.price)}</p>
							<Button size="lg" className="w-full sm:w-auto text-lg px-8 py-3">
								Request a Viewing
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

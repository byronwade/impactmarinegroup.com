import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Waves, Anchor, Wind } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const BoatImage = memo(function BoatImage({ boat, priority }: { boat: { image: string; name: string }; priority?: boolean }) {
	return <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">{boat.image && <Image alt={`${boat.name} - Luxury boat by Impact Marine Group`} src={boat.image} className="object-cover transition-transform duration-500 hover:scale-105" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={priority} quality={75} loading={priority ? "eager" : "lazy"} />}</div>;
});

export default function FleetSection({ currentBoat, nextBoat, prevBoat, boats }: { currentBoat: number; nextBoat: () => void; prevBoat: () => void; boats: Array<{ name: string; price: string; image: string }> }) {
	return (
		<section id="fleet" aria-labelledby="fleet-heading" className="py-16">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<h2 id="fleet-heading" className="text-4xl font-bold tracking-tighter text-center mb-8">
					Discover Our Premium Fleet
				</h2>
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div className="w-full lg:w-3/5 relative">
						<BoatImage boat={boats[currentBoat]} priority />
						<Button variant="outline" size="icon" className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/80 hover:bg-background" onClick={prevBoat} aria-label="Previous boat">
							<ChevronLeft className="h-6 w-6" />
						</Button>
						<Button variant="outline" size="icon" className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/80 hover:bg-background" onClick={nextBoat} aria-label="Next boat">
							<ChevronRight className="h-6 w-6" />
						</Button>
					</div>
					<div className="w-full lg:w-2/5 space-y-6">
						<div>
							<h3 className="text-3xl font-bold mb-2">{boats[currentBoat].name}</h3>
							<p className="text-lg text-foreground mb-4">Experience unparalleled luxury on the high seas with our latest yacht model.</p>
							<div className="flex flex-wrap gap-4 mb-6">
								<Badge variant="outline" className="text-sm font-medium">
									<Waves className="w-4 h-4 mr-1" />
									Length: 120 ft
								</Badge>
								<Badge variant="outline" className="text-sm font-medium">
									<Anchor className="w-4 h-4 mr-1" />
									Capacity: 12 guests
								</Badge>
								<Badge variant="outline" className="text-sm font-medium">
									<Wind className="w-4 h-4 mr-1" />
									Speed: 25 knots
								</Badge>
							</div>
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

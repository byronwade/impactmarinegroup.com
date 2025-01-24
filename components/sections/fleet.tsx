"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Boat {
	name: string;
	mainImage: {
		url: string;
		alt?: string;
		asset?: {
			url: string;
			metadata?: {
				dimensions?: {
					width: number;
					height: number;
				};
			};
		};
	};
	description?: string;
	price?: number;
	specs?: Record<string, string>;
}

interface FleetSectionProps {
	boats: Boat[];
	title?: string;
}

export default function FleetSection({ boats, title = "Our Fleet" }: FleetSectionProps) {
	if (!boats?.length) return null;

	return (
		<section className="py-16 bg-background">
			<div className="container">
				<h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{boats.map((boat, index) => {
						const imageUrl = boat.mainImage.url || boat.mainImage.asset?.url;
						if (!imageUrl) return null;

						return (
							<Card key={index} className="overflow-hidden">
								<div className="relative h-48">
									<Image src={imageUrl} alt={boat.mainImage.alt || boat.name} fill className="object-cover" />
								</div>
								<CardHeader>
									<CardTitle>{boat.name}</CardTitle>
								</CardHeader>
								<CardContent>
									{boat.description && <p className="mb-4 text-muted-foreground line-clamp-2">{boat.description}</p>}
									{boat.price && (
										<p className="text-lg font-semibold">
											{new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: "USD",
											}).format(boat.price)}
										</p>
									)}
									{boat.specs && (
										<dl className="grid grid-cols-2 gap-2 mt-4 text-sm">
											{Object.entries(boat.specs).map(([key, value]) => (
												<div key={key}>
													<dt className="font-medium">{key}</dt>
													<dd className="text-muted-foreground">{value}</dd>
												</div>
											))}
										</dl>
									)}
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}

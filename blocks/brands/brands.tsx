import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface BrandsBlockProps {
	title: string;
	subtitle: string;
	brands: Array<{
		name: string;
		description: string;
		features: Array<{ text: string }>;
		image: {
			url: string;
			alt?: string;
		};
		popularModels: Array<{ model: string }>;
	}>;
}

export default function BrandsBlock({ title, subtitle, brands }: BrandsBlockProps) {
	return (
		<section id="brands" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
				{brands.map((brand, brandIndex) => (
					<div key={brandIndex} className="space-y-6">
						<h4 className="text-lg font-semibold">{brand.name}</h4>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-4">
								<p>{brand.description}</p>
								<ul className="list-disc list-inside space-y-2">
									{brand.features.map((feature, featureIndex) => (
										<li key={featureIndex}>{feature.text}</li>
									))}
								</ul>
							</div>
							<div className="space-y-4">
								<div className="relative h-64">
									<Image src={brand.image.url} alt={brand.image.alt || `${brand.name} Boat`} layout="fill" objectFit="cover" className="rounded-lg" />
								</div>
								<Card>
									<CardContent className="p-4">
										<h3 className="font-semibold mb-2">Popular Models</h3>
										<ul className="list-disc list-inside space-y-1">
											{brand.popularModels.map((model, modelIndex) => (
												<li key={modelIndex}>{model.model}</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

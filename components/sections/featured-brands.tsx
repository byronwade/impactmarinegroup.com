import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Brand {
	name: string;
	logo: {
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
}

interface FeaturedBrandsProps {
	brands: Brand[];
}

export default function FeaturedBrands({ brands }: FeaturedBrandsProps) {
	if (!brands?.length) return null;

	return (
		<section className="py-16 bg-background">
			<div className="container">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{brands.map((brand, index) => {
						const imageUrl = brand.logo.url || brand.logo.asset?.url;
						if (!imageUrl) return null;

						return (
							<Card key={index} className="bg-white">
								<CardContent className="flex items-center justify-center p-6 h-32">
									<Image
										src={imageUrl}
										alt={brand.logo.alt || brand.name}
										width={200}
										height={100}
										className="object-contain"
										style={{
											maxWidth: "100%",
											height: "auto",
										}}
									/>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}

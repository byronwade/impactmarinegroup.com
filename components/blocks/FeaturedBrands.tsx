import { getPayloadClient } from "@/payload/payloadClient";

interface Brand {
	id: string;
	name: string;
	description: string;
	logo?: {
		url: string;
	};
}

interface FeaturedBrandsProps {
	brands: string[];
}

export default async function FeaturedBrands({ brands }: FeaturedBrandsProps) {
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "brands",
		where: {
			id: {
				in: brands,
			},
		},
	});

	const brandDocs = docs as Brand[];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{brandDocs.map((brand) => (
						<div key={brand.id} className="bg-white p-6 rounded-lg shadow-md">
							{brand.logo && (
								<div className="h-20 flex items-center justify-center mb-4">
									<img src={brand.logo.url} alt={brand.name} className="max-h-full" />
								</div>
							)}
							<h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
							<p className="text-gray-600">{brand.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

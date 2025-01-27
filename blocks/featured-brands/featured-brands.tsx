import dynamic from "next/dynamic";
import type { Page, Brand } from "@/payload-types";

const FeaturedBrandsSection = dynamic(() => import("@/components/blocks/FeaturedBrands"), {
	loading: () => (
		<div className="py-16 bg-gray-50 animate-pulse">
			<div className="container mx-auto px-4">
				<div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-12" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="bg-white p-6 rounded-lg shadow-md">
							<div className="h-20 bg-gray-100 rounded mb-4" />
							<div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
							<div className="h-4 bg-gray-100 rounded" />
						</div>
					))}
				</div>
			</div>
		</div>
	),
});

interface FeaturedBrandsBlock {
	id: string;
	blockType: "featuredBrands";
	title: string;
	description: string;
	brands: Array<Brand>;
}

export default function FeaturedBrands(props: FeaturedBrandsBlock) {
	const { brands, title, description } = props;

	console.log("FeaturedBrands block props:", props);

	if (!brands?.length) {
		console.log("No brands found in block");
		return null;
	}

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">{title}</h2>
					{description && <p className="text-xl text-gray-600">{description}</p>}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{brands.map((brand) => (
						<div key={brand.id} className="bg-white p-6 rounded-lg shadow-md">
							{brand.logo && (
								<div className="h-20 flex items-center justify-center mb-4">
									<img src={brand.logo.url} alt={brand.name} className="max-h-full max-w-full object-contain" />
								</div>
							)}
							<h3 className="text-xl font-semibold text-center mb-2">{brand.name}</h3>
							<p className="text-gray-600 text-center">{brand.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

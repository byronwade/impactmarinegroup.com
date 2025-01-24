import dynamic from "next/dynamic";

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
	brands: Array<{
		id: string;
	}>;
}

export default function FeaturedBrands(props: FeaturedBrandsBlock) {
	const { brands } = props;

	if (!brands?.length) return null;

	// Extract just the IDs from the brand references
	const brandIds = brands.map((brand) => brand.id);

	return <FeaturedBrandsSection brands={brandIds} />;
}

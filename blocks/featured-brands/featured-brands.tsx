import Image from "next/image";
import Link from "next/link";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type FeaturedBrandsBlock = Extract<LayoutType[number], { blockType: "featuredBrands" }>;

export default function FeaturedBrands(props: FeaturedBrandsBlock) {
	const { title, description, brands } = props;

	return (
		<section className="py-20 bg-gray-50">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="mb-6 text-4xl font-bold tracking-tight">{title}</h2>
					<p className="mb-12 text-lg text-muted-foreground">{description}</p>
				</div>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{brands?.map((brand) => (
						<Link key={brand.id} href={`/brands/${brand.slug}`} className="flex flex-col items-center p-8 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
							{brand.logo && (
								<div className="relative w-48 h-24 mb-6">
									<Image src={brand.logo.url} alt={brand.name} fill className="object-contain" />
								</div>
							)}
							<h3 className="mb-2 text-xl font-semibold">{brand.name}</h3>
							{brand.description && <p className="text-center text-muted-foreground line-clamp-3">{brand.description}</p>}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

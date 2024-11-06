import Image from "next/image";
import { SanityBrand } from "@/app/actions/sanity";

export default async function FeaturedBrands({ brands }: { brands: SanityBrand[] }) {
	if (!brands?.length) return null;

	return (
		<section aria-label="Featured Brands" className="bg-muted py-6 overflow-hidden hidden md:block">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
					{brands.map((brand, index) => {
						if (!brand.logo?.asset?.url) return null;

						return (
							<div key={index} className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto">
								<Image className={`w-auto h-[24px] sm:h-[28px] md:h-[32px] grayscale hover:grayscale-0 transition-all duration-300 ${brand.name === "Bayliner" ? "invert" : ""}`} src={brand.logo.asset.url} alt={`${brand.name} logo`} width={brand.logo.asset.metadata.dimensions.width} height={brand.logo.asset.metadata.dimensions.height} loading="lazy" />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

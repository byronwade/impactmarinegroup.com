import Image from "next/image";
import { SanityBrand } from "@/actions/sanity";

export default async function FeaturedBrands({ brands }: { brands: SanityBrand[] }) {
	// Filter out invalid brands first
	const validBrands = brands?.filter((brand) => brand && brand.name && brand.logo?.asset?.url) ?? [];

	if (!validBrands.length) {
		return null;
	}

	return (
		<section aria-label="Featured Brands" className="bg-muted py-6 overflow-hidden hidden md:block">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
					{validBrands.map((brand, index) => {
						const dimensions = brand.logo.asset.metadata.dimensions;

						return (
							<div key={`brand-${index}-${brand.name}`} className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto">
								<Image
									src={brand.logo.asset.url}
									alt={`${brand.name} logo`}
									width={dimensions.width}
									height={dimensions.height}
									className={`
										w-auto 
										h-[24px] sm:h-[28px] md:h-[32px] 
										grayscale hover:grayscale-0 
										transition-all duration-300
										${brand.name === "Bayliner" ? "invert" : ""}
									`}
									loading="lazy"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
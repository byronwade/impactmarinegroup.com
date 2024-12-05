import Image from "next/image";

import { memo } from "react";

import { chunk } from "lodash";

import type { SanityBrand } from "@/types/sanity";

const BrandCard = memo(function BrandCard({ brand }: { brand: SanityBrand }) {
	const dimensions = brand.logo.asset.metadata.dimensions;

	return (
		<div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto">
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
});

const FeaturedBrands = memo(function FeaturedBrands({ brands }: { brands: SanityBrand[] }) {
	const brandRows = chunk(brands, 3);

	return (
		<section>
			{brandRows.map((row, i) => (
				<div key={`brand-row-${i}`} className="grid grid-cols-3 gap-4">
					{row.map((brand) => (
						<BrandCard key={brand.name} brand={brand} />
					))}
				</div>
			))}
		</section>
	);
});

export default FeaturedBrands;

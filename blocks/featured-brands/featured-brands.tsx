"use client";

import Image from "next/image";
import type { Brand } from "@/payload-types";

interface FeaturedBrandsBlock {
	id: string;
	blockType: "featuredBrands";
	title: string;
	description: string;
	brands: Array<Brand>;
}

export default function FeaturedBrands(props: FeaturedBrandsBlock) {
	const { brands, title, description } = props;

	if (!brands?.length) {
		return null;
	}

	return (
		<section className="bg-white py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="lg:flex lg:items-start lg:justify-between">
					<div className="lg:w-1/2 lg:pr-8">
						<h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">{title}</h2>
						{description && <p className="mt-4 text-base text-gray-600 sm:text-lg lg:text-xl">{description}</p>}
					</div>
					<div className="mt-10 lg:mt-0 lg:w-1/2">
						<div className="flex flex-col items-end justify-center gap-8 sm:flex-row sm:gap-12">
							{brands.slice(0, 2).map((brand) => (
								<div key={brand.id} className="relative w-[180px] h-[120px] bg-white">
									{brand.logo?.url && <Image src={brand.logo.url} alt={brand.name || "Brand logo"} fill sizes="180px" className="object-contain" priority />}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

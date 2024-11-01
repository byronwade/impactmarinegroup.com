import Image from "next/image";

interface Brand {
	name: string;
	logo: string;
	width: number;
	height: number;
}

export default function FeaturedBrands({ brands }: { brands: Brand[] }) {
	return (
		<section aria-label="Featured Brands" className="bg-muted py-6 overflow-hidden hidden md:block">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
					{brands.map((brand, index) => (
						<div key={index} className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto">
							{brand.logo && <Image className={`w-auto h-[24px] sm:h-[28px] md:h-[32px] grayscale hover:grayscale-0 transition-all duration-300 ${brand.name === "Bayliner" ? "invert" : ""}`} src={brand.logo} alt={`${brand.name} logo`} width={brand.width} height={brand.height} loading="lazy" />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

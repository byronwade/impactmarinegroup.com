import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type FleetBlock = Extract<LayoutType[number], { blockType: "fleet" }>;

export default function Fleet(props: FleetBlock) {
	const { title, description, boats, cta } = props;

	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="mb-6 text-4xl font-bold tracking-tight">{title}</h2>
					<p className="mb-12 text-lg text-muted-foreground">{description}</p>
				</div>
				<div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-3">
					{boats?.map((boat) => (
						<Link key={boat.id} href={`/boats/${boat.slug}`} className="overflow-hidden transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
							{boat.mainImage && (
								<div className="relative w-full h-48">
									<Image src={boat.mainImage.url} alt={boat.name} fill className="object-cover" />
								</div>
							)}
							<div className="p-6">
								<h3 className="mb-2 text-xl font-semibold">{boat.name}</h3>
								<p className="mb-4 text-muted-foreground line-clamp-2">{boat.description}</p>
								<div className="flex items-center justify-between">
									<span className="text-lg font-bold text-red-600">{boat.price ? `$${boat.price.toLocaleString()}` : "Contact for Price"}</span>
									<span className="text-sm text-muted-foreground">
										{boat.year} {boat.manufacturer}
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
				{cta && (
					<div className="text-center">
						<Button asChild size="lg" className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700">
							<Link href={cta.link}>{cta.label}</Link>
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}

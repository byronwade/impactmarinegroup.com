import dynamic from "next/dynamic";
import type { Page, Boat } from "@/payload-types";

const FleetSection = dynamic(() => import("@/components/blocks/Fleet"), {
	loading: () => (
		<div className="py-16 animate-pulse">
			<div className="container mx-auto px-4">
				<div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-12" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
							<div className="aspect-[16/9] bg-gray-100" />
							<div className="p-6 space-y-3">
								<div className="h-6 w-3/4 bg-gray-200 rounded" />
								<div className="space-y-2">
									<div className="h-4 w-1/2 bg-gray-100 rounded" />
									<div className="h-4 w-1/3 bg-gray-100 rounded" />
								</div>
								<div className="flex justify-between items-center">
									<div className="h-5 w-24 bg-gray-200 rounded" />
									<div className="h-4 w-20 bg-gray-100 rounded" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	),
});

interface FleetBlock {
	id: string;
	blockType: "fleet";
	title: string;
	description: string;
	boats: Array<Boat>;
	cta?: {
		label: string;
		link: string;
	};
}

export default function Fleet(props: FleetBlock) {
	const { boats, title, description, cta } = props;

	console.log("Fleet block props:", props);

	if (!boats?.length) {
		console.log("No boats found in block");
		return null;
	}

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">{title}</h2>
					{description && <p className="text-xl text-gray-600">{description}</p>}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{boats.map((boat) => (
						<div key={boat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
							{boat.image && (
								<div className="aspect-[16/9] relative">
									<img src={boat.image.url} alt={boat.title} className="object-cover w-full h-full" />
								</div>
							)}
							<div className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">{boat.title}</h3>
								<p className="text-gray-600">{boat.description}</p>
								<div className="flex justify-between items-center">
									<span className="text-lg font-bold text-primary">{boat.price ? `$${boat.price.toLocaleString()}` : "Contact for Price"}</span>
									{boat.status && <span className="text-sm text-gray-500">{boat.status}</span>}
								</div>
							</div>
						</div>
					))}
				</div>
				{cta && (
					<div className="text-center mt-12">
						<a href={cta.link} className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
							{cta.label}
						</a>
					</div>
				)}
			</div>
		</section>
	);
}

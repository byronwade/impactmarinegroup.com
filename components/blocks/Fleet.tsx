import { getPayloadClient } from "@/payload/payloadClient";
import Link from "next/link";
import Image from "next/image";
import type { Boat as PayloadBoat } from "@/payload-types";

interface FleetProps {
	boats: string[];
}

export default async function Fleet({ boats }: FleetProps) {
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "boats",
		where: {
			id: {
				in: boats,
			},
		},
	});

	const boatDocs = docs as PayloadBoat[];

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Our Fleet</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{boatDocs.map((boat) => (
						<Link href={`/fleet/${boat.slug}`} key={boat.id} className="group">
							<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-[1.02]">
								{boat.mainImage && typeof boat.mainImage !== "number" ?
									<div className="aspect-[16/9] relative">
										<Image src={boat.mainImage.url} alt={boat.name} fill className="object-cover" />
									</div>
								:	<div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
										<span className="text-gray-400">No image available</span>
									</div>
								}
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">{boat.name}</h3>
									<div className="text-gray-600 space-y-1">
										<p>
											{boat.manufacturer} {boat.model}
										</p>
										<p>
											{boat.modelYear} | {boat.condition}
										</p>
										<p className="text-lg font-semibold text-blue-600">${boat.price.toLocaleString()}</p>
										<span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">{boat.status}</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

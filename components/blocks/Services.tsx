import { getPayloadClient } from "@/payload/payloadClient";
import Link from "next/link";

interface Service {
	id: string;
	title: string;
	description: string;
	slug: string;
	icon?: {
		url: string;
	};
}

interface ServicesProps {
	services: string[];
	subtitle?: string;
}

export default async function Services({ services, subtitle }: ServicesProps) {
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "services",
		where: {
			id: {
				in: services,
			},
		},
	});

	const serviceDocs = docs as Service[];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Our Services</h2>
					{subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{serviceDocs.map((service) => (
						<Link href={`/services/${service.slug}`} key={service.id} className="group">
							<div className="bg-white p-6 rounded-lg shadow-md transition-transform group-hover:scale-[1.02]">
								{service.icon && (
									<div className="w-16 h-16 mx-auto mb-4">
										<img src={service.icon.url} alt="" className="w-full h-full object-contain" />
									</div>
								)}
								<h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
								<p className="text-gray-600 text-center">{service.description}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

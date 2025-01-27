import dynamic from "next/dynamic";
import type { Page, Service } from "@/payload-types";

const ServicesSection = dynamic(() => import("@/components/blocks/Services"), {
	loading: () => (
		<div className="py-20 bg-gray-50 animate-pulse">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-6" />
					<div className="h-6 w-96 bg-gray-100 rounded mx-auto mb-12" />
				</div>
				<div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-3">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="p-8 bg-white rounded-lg shadow-sm">
							<div className="w-12 h-12 mb-6 bg-gray-200 rounded" />
							<div className="h-6 w-48 bg-gray-200 rounded mb-2" />
							<div className="space-y-2">
								<div className="h-4 w-full bg-gray-100 rounded" />
								<div className="h-4 w-2/3 bg-gray-100 rounded" />
							</div>
						</div>
					))}
				</div>
				<div className="text-center">
					<div className="h-12 w-40 bg-gray-200 rounded inline-block" />
				</div>
			</div>
		</div>
	),
});

type LayoutType = NonNullable<Page["layout"]>;
type ServicesBlock = Extract<LayoutType[number], { blockType: "services" }>;

export default function Services(props: ServicesBlock) {
	const { services, title, description } = props;

	console.log("Services block props:", props);

	if (!services?.length) {
		console.log("No services found in block");
		return null;
	}

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">{title}</h2>
					{description && <p className="text-xl text-gray-600">{description}</p>}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
							{service.icon && (
								<div className="w-16 h-16 mx-auto mb-4">
									<img src={service.icon.url} alt="" className="w-full h-full object-contain" />
								</div>
							)}
							<h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
							<p className="text-gray-600 text-center">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

import dynamic from "next/dynamic";
import type { Page } from "@/payload-types";

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
	const { services } = props;

	if (!services?.length) return null;

	// Extract just the IDs from the service references
	const serviceIds = services.map((service) => service.id);

	return <ServicesSection services={serviceIds} />;
}

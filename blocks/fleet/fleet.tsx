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
	boats: Array<{
		id: number;
	}>;
	cta?: {
		label: string;
		link: string;
	};
}

export default function Fleet(props: FleetBlock) {
	const { boats } = props;

	if (!boats?.length) return null;

	// Extract just the IDs from the boat references
	const boatIds = boats.map((boat) => boat.id.toString());

	return <FleetSection boats={boatIds} />;
}

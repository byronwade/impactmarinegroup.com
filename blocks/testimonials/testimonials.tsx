import dynamic from "next/dynamic";
import type { Page } from "@/payload-types";

const TestimonialsSection = dynamic(() => import("@/components/blocks/Testimonials"), {
	loading: () => (
		<div className="py-20 animate-pulse">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-6" />
					<div className="h-6 w-96 bg-gray-100 rounded mx-auto mb-12" />
				</div>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{[...Array(3)].map((_, i) => (
						<div key={i} className="p-8 bg-white rounded-lg shadow-sm">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 rounded-full bg-gray-200" />
								<div className="space-y-2">
									<div className="h-5 w-32 bg-gray-200 rounded" />
									<div className="h-4 w-24 bg-gray-100 rounded" />
								</div>
							</div>
							<div className="space-y-3">
								<div className="flex gap-1">
									{[...Array(5)].map((_, j) => (
										<div key={j} className="w-5 h-5 bg-gray-200 rounded" />
									))}
								</div>
								<div className="space-y-2">
									<div className="h-4 w-full bg-gray-100 rounded" />
									<div className="h-4 w-2/3 bg-gray-100 rounded" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	),
});

type LayoutType = NonNullable<Page["layout"]>;
type TestimonialsBlock = Extract<LayoutType[number], { blockType: "testimonials" }>;

export default function Testimonials(props: TestimonialsBlock) {
	const { testimonials } = props;

	if (!testimonials?.length) return null;

	// Extract just the IDs from the testimonial references
	const testimonialIds = testimonials.map((testimonial) => testimonial.id);

	return <TestimonialsSection testimonials={testimonialIds} />;
}

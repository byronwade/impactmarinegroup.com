import dynamic from "next/dynamic";
import type { Page, Testimonial } from "@/payload-types";

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
	const { testimonials, title, description } = props;

	console.log("Testimonials block props:", props);

	if (!testimonials?.length) {
		console.log("No testimonials found in block");
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
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
							<div className="flex items-center mb-4">
								{testimonial.avatar ?
									<div className="relative w-12 h-12 overflow-hidden rounded-full mr-4">
										<img src={testimonial.avatar.url} alt={testimonial.name} className="object-cover w-full h-full" />
									</div>
								:	<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
										<span className="text-blue-600 font-semibold text-lg">{testimonial.name.charAt(0)}</span>
									</div>
								}
								<div>
									<h3 className="font-semibold">{testimonial.name}</h3>
									{(testimonial.position || testimonial.company) && (
										<p className="text-sm text-gray-600">
											{testimonial.position}
											{testimonial.position && testimonial.company && " at "}
											{testimonial.company}
										</p>
									)}
								</div>
							</div>
							<div className="flex mb-4">
								{[...Array(5)].map((_, i) => (
									<svg key={i} className={`w-5 h-5 ${i < (testimonial.rating || 5) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
							<p className="text-gray-600">{testimonial.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

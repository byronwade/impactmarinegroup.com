import { getPayloadClient } from "@/payload/payloadClient";

interface Testimonial {
	id: string;
	name: string;
	text: string;
	rating: number;
	position?: string;
	company?: string;
	avatar?: {
		url: string;
	};
}

interface TestimonialsProps {
	testimonials: string[];
}

export default async function Testimonials({ testimonials }: TestimonialsProps) {
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "testimonials",
		where: {
			id: {
				in: testimonials,
			},
		},
	});

	const testimonialDocs = docs as Testimonial[];

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonialDocs.map((testimonial) => (
						<div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
							<div className="flex items-center mb-4">
								{testimonial.avatar ? (
									<img src={testimonial.avatar.url} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
								) : (
									<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
										<span className="text-blue-600 font-semibold text-lg">{testimonial.name.charAt(0)}</span>
									</div>
								)}
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
									<svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
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

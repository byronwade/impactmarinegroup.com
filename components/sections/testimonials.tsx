import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SanityTestimonial } from "@/app/actions/sanity";

export default function TestimonialsSection({ testimonials }: { testimonials: SanityTestimonial[] }) {
	if (!testimonials?.length) return null;

	return (
		<section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 overflow-hidden">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<h2 id="testimonials-heading" className="text-4xl font-bold text-center mb-16">
					What Our Customers Say
				</h2>
				<div className="relative">
					<div className="absolute inset-0 flex items-center justify-center opacity-5">
						<Quote className="w-96 h-96" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
						{testimonials.map((testimonial) => (
							<div key={testimonial._id} className="flex flex-col items-center">
								<div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg">
									<span className="text-3xl font-bold text-primary-foreground">{testimonial.name.charAt(0)}</span>
								</div>
								<div className="text-center">
									<p className="text-lg italic mb-4 relative">
										<span className="absolute -top-4 -left-2 text-4xl text-muted">"</span>
										{testimonial.text}
										<span className="absolute -bottom-4 -right-2 text-4xl text-muted">"</span>
									</p>
									<p className="font-semibold">{testimonial.name}</p>
									<div className="flex items-center justify-center mt-2">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="mt-16 text-center">
					<Button variant="outline" size="lg">
						Read More Reviews
					</Button>
				</div>
			</div>
		</section>
	);
}

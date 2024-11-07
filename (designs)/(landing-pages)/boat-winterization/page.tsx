import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Shield, Calendar, Wrench, Check, Star, Clock, Phone } from "lucide-react";
import { getSiteConfig } from "@/actions/sanity";

export default async function WinterizationLanding() {
	const config = await getSiteConfig();

	return (
		<div className="min-h-screen bg-white text-black">
			{/* Hero Section */}
			<div className="container flex flex-col items-center">
				<div className="w-full text-clip rounded-lg bg-gray-100">
					<div className="grid items-center gap-8 lg:grid-cols-2">
						<div className="container flex flex-col items-center px-16 py-32 text-center lg:mx-auto lg:items-start lg:text-left">
							<p className="text-gray-600">Professional Boat Care</p>
							<h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">Expert Boat Winterization</h1>
							<p className="mb-8 max-w-xl text-gray-700 lg:text-xl">Protect your investment with our comprehensive winterization services. Don&apos;t let the cold catch you off guard - prepare your boat for the off-season today.</p>
							<Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800">
								<Phone className="mr-2 size-4" />
								Call {config.phoneNumber}
							</Button>
						</div>
						<Image src="/winterize-a-boat.webp" alt="Boat winterization" width={600} height={400} className="size-full object-cover" />
					</div>
				</div>
			</div>

			<main className="container mx-auto px-4 py-12 space-y-24 max-w-7xl">
				{/* Services Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-semibold text-black mb-8 text-center">Our Winterization Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ icon: Snowflake, title: "Engine Winterization", description: "Protect your engine from freezing temperatures and corrosion." },
							{ icon: Shield, title: "Hull Protection", description: "Apply protective coatings to safeguard your boat's exterior." },
							{ icon: Calendar, title: "Storage Preparation", description: "Properly prepare your boat for long-term winter storage." },
							{ icon: Wrench, title: "Systems Check", description: "Thorough inspection and maintenance of all onboard systems." },
						].map((service, index) => (
							<Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
								<CardHeader>
									<service.icon className="w-12 h-12 text-black mb-2" />
									<CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-gray-600">{service.description}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Why Choose Us Section */}
				<section className="mb-16">
					<div className="bg-black text-white rounded-lg p-8 flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-6 md:mb-0">
							<h2 className="text-3xl font-bold mb-4">Why Choose Our Winterization Services?</h2>
							<ul className="space-y-2">
								{["Expert technicians with years of experience", "Comprehensive protection for all boat types", "Use of premium, marine-grade winterization products", "Customized winterization plans for your specific needs", "Peace of mind knowing your boat is protected all winter"].map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className="mr-2 h-5 w-5 text-green-400" />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<Button className="mt-6 bg-white text-black hover:bg-gray-200">
								<Phone className="mr-2 h-5 w-5" />
								Call {config.phoneNumber}
							</Button>
						</div>
						<div className="md:w-1/2 md:pl-8">
							<Image src="/placeholder.svg?height=300&width=500" alt="Technician winterizing a boat" width={500} height={300} className="rounded-lg shadow-xl" />
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-semibold text-black mb-8 text-center">Our Winterization Process</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ icon: Phone, title: "Contact Us", description: "Call us to discuss your winterization needs." },
							{ icon: Clock, title: "Schedule", description: "We'll set up an appointment that works for you." },
							{ icon: Wrench, title: "Winterize", description: "Our experts apply industry-leading techniques to protect your boat." },
							{ icon: Check, title: "Secure", description: "Your boat is safely prepared for the winter season." },
						].map((step, index) => (
							<Card key={index} className="bg-white border border-gray-200">
								<CardHeader>
									<div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
										<step.icon className="w-6 h-6" />
									</div>
									<CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-gray-600">{step.description}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-semibold text-black mb-8 text-center">What Our Customers Say</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{[
							{ name: "John D.", quote: "The winterization service was top-notch. My boat has never been better prepared for the off-season.", rating: 5 },
							{ name: "Sarah M.", quote: "Professional, thorough, and friendly. I wouldn't trust anyone else with my boat's winter care.", rating: 5 },
							{ name: "Mike R.", quote: "Their attention to detail is impressive. They caught and fixed issues I didn't even know about.", rating: 4 },
							{ name: "Emily L.", quote: "The peace of mind I get from their winterization service is worth every penny.", rating: 5 },
						].map((testimonial, index) => (
							<Card key={index} className="bg-white border border-gray-200">
								<CardContent className="pt-6">
									<div className="flex mb-2">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
										))}
									</div>
									<p className="italic mb-4 text-gray-600">&quot;{testimonial.quote}&quot;</p>
									<p className="font-semibold">- {testimonial.name}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* FAQ Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-semibold text-black mb-8 text-center">Frequently Asked Questions</h2>
					<div className="space-y-4">
						{[
							{ question: "When should I winterize my boat?", answer: "It's best to winterize your boat before the first freeze, typically in late fall. Call us for specific recommendations based on your location." },
							{ question: "How long does the winterization process take?", answer: "The process usually takes 2-4 hours, depending on the size and type of your boat. Contact us for a more accurate estimate for your specific vessel." },
							{ question: "Can I winterize my boat myself?", answer: "While some aspects can be DIY, professional winterization ensures comprehensive protection and peace of mind. Call us to learn about the benefits of professional service." },
							{ question: "What's included in your winterization service?", answer: "Our service includes engine winterization, fuel system treatment, freshwater system winterization, hull inspection and protection, and proper storage preparation. Call for a detailed breakdown." },
							{ question: "How do I get a quote for winterization?", answer: "For accurate pricing tailored to your boat, please call us at {config.phoneNumber}. We'll be happy to provide a detailed quote based on your specific needs." },
						].map((faq, index) => (
							<Card key={index} className="bg-white border border-gray-200">
								<CardHeader>
									<CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">{faq.answer}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Call to Action */}
				<section className="text-center bg-black text-white rounded-lg p-8">
					<h2 className="text-3xl font-bold mb-4">Ready to Winterize Your Boat?</h2>
					<p className="text-xl mb-8">Don&apos;t wait until it&apos;s too late. Call us today to schedule your winterization service and protect your investment.</p>
					<Button size="lg" className="bg-white text-black hover:bg-gray-200">
						<Phone className="mr-2 h-5 w-5" />
						Call {config.phoneNumber}
					</Button>
				</section>
			</main>
		</div>
	);
}

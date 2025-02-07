"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Star, Ship, Wrench, Compass, LifeBuoy, DollarSign, Users, Zap, Shield, Award } from "lucide-react";
import type { Media, Service, Testimonial } from "../../../types/payload-types";

interface AboutUsBlock {
	id: string;
	blockType: "aboutUs";
	aboutSection: {
		title: string;
		content: Array<{ paragraph: string }>;
		image: Media;
		features: Array<{
			icon: "users" | "zap";
			title: string;
			description: string;
		}>;
	};
	brandsSection: {
		title: string;
		subtitle: string;
		brands: Array<{
			name: string;
			description: string;
			features: Array<{ text: string }>;
			image: Media;
			popularModels: Array<{ model: string }>;
		}>;
	};
	servicesSection: {
		title: string;
		subtitle: string;
		description: string;
		services: Array<Service>;
	};
	testimonialsSection: {
		title: string;
		subtitle: string;
		testimonials: Array<Testimonial>;
	};
	contactSection: {
		title: string;
		subtitle: string;
		address: string;
		hours: Array<{ text: string }>;
		phones: Array<{ label: string; number: string }>;
		emails: Array<{ email: string }>;
		areasServed: Array<{ area: string }>;
		mapImage: Media;
		ctaTitle: string;
		ctaDescription: string;
		ctaButtonText: string;
	};
}

const iconMap = {
	ship: Ship,
	wrench: Wrench,
	compass: Compass,
	lifeBuoy: LifeBuoy,
	dollarSign: DollarSign,
	users: Users,
	zap: Zap,
	shield: Shield,
	award: Award,
};

export default function AboutUs(props: AboutUsBlock) {
	return (
		<main role="main" aria-label="Main content" className="flex-grow">
			<div className="min-h-screen bg-gray-50">
				<main className="container mx-auto px-4 py-12 space-y-24 max-w-7xl">
					<AboutSection {...props.aboutSection} />
					<BrandsSection {...props.brandsSection} />
					<ServicesSection {...props.servicesSection} />
					<TestimonialsSection {...props.testimonialsSection} />
					<ContactSection {...props.contactSection} />
				</main>
			</div>
		</main>
	);
}

function AboutSection({ title, content, image, features }: AboutUsBlock["aboutSection"]) {
	return (
		<section id="about" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-4">
						{content.map((item, index) => (
							<p key={index}>{item.paragraph}</p>
						))}
					</div>
					<div className="space-y-6">
						<div className="relative h-64 md:h-80">
							<Image src={image.url} alt="Impact Marine Group Showroom" fill sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg object-cover" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							{features.map((feature, index) => {
								const Icon = iconMap[feature.icon];
								return (
									<Card key={index}>
										<CardContent className="p-4">
											<Icon className="w-8 h-8 mb-2 text-blue-600" />
											<h3 className="font-semibold mb-1">{feature.title}</h3>
											<p className="text-sm">{feature.description}</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function BrandsSection({ title, subtitle, brands }: AboutUsBlock["brandsSection"]) {
	return (
		<section id="brands" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
				{brands.map((brand, brandIndex) => (
					<div key={brandIndex} className="space-y-6">
						<h4 className="text-lg font-semibold">{brand.name}</h4>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-4">
								<p>{brand.description}</p>
								<ul className="list-disc list-inside space-y-2">
									{brand.features.map((feature, featureIndex) => (
										<li key={featureIndex}>{feature.text}</li>
									))}
								</ul>
							</div>
							<div className="space-y-4">
								<div className="relative h-64">
									<Image src={brand.image.url} alt={brand.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg object-cover" />
								</div>
								<Card>
									<CardContent className="p-4">
										<h3 className="font-semibold mb-2">Popular Models</h3>
										<ul className="list-disc list-inside space-y-1">
											{brand.popularModels.map((model, modelIndex) => (
												<li key={modelIndex}>{model.model}</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function ServicesSection({ title, subtitle, description, services }: AboutUsBlock["servicesSection"]) {
	return (
		<section id="services" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
				<div className="space-y-6">
					<p className="text-lg">{description}</p>
					<div className="grid md:grid-cols-3 gap-6">
						{services.map((service) => {
							const Icon = service.icon ? iconMap[service.icon as keyof typeof iconMap] : Wrench;
							return (
								<Card key={service.id}>
									<CardContent className="p-6">
										<Icon className="w-12 h-12 mb-4 text-blue-600" />
										<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
										<p className="text-sm text-gray-600">{service.description}</p>
										{service.price?.startingAt && (
											<p className="mt-4 font-semibold">
												Starting at ${service.price.startingAt}/{service.price.unit || "service"}
											</p>
										)}
										{service.details && service.details.length > 0 && (
											<ul className="mt-4 space-y-2">
												{service.details.map((detail: { title: string; icon?: string | null }, index: number) => (
													<li key={index} className="flex items-start">
														{detail.icon && iconMap[detail.icon as keyof typeof iconMap] && <span className="mr-2 mt-1">{iconMap[detail.icon as keyof typeof iconMap]({ className: "h-4 w-4" })}</span>}
														<span>{detail.title}</span>
													</li>
												))}
											</ul>
										)}
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

function TestimonialsSection({ title, subtitle, testimonials }: AboutUsBlock["testimonialsSection"]) {
	return (
		<section id="testimonials" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
				<div className="grid md:grid-cols-2 gap-6">
					{testimonials.map((testimonial) => (
						<Card key={testimonial.id}>
							<CardContent className="p-6">
								<div className="flex items-start gap-4">
									{testimonial.avatar?.url && (
										<div className="relative w-16 h-16 rounded-full overflow-hidden">
											<Image src={testimonial.avatar.url} alt={testimonial.name} fill className="object-cover" />
										</div>
									)}
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-2">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
											))}
										</div>
										<p className="mb-4 italic">{`"${testimonial.text}"`}</p>
										<div>
											<p className="font-semibold">{testimonial.name}</p>
											{testimonial.position && <p className="text-sm text-gray-600">{testimonial.position}</p>}
											{testimonial.company && <p className="text-sm text-gray-600">{testimonial.company}</p>}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

function ContactSection(props: AboutUsBlock["contactSection"]) {
	return (
		<section id="contact" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{props.title}</h2>
				<h3 className="text-xl font-semibold mb-4">{props.subtitle}</h3>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<div className="space-y-4">
							<div className="flex items-center">
								<MapPin className="w-6 h-6 mr-2 text-blue-600" />
								<p>{props.address}</p>
							</div>
							<div className="flex items-center">
								<Clock className="w-6 h-6 mr-2 text-blue-600" />
								<div>
									{props.hours.map((hour, index) => (
										<p key={index}>{hour.text}</p>
									))}
								</div>
							</div>
							<div className="flex items-center">
								<Phone className="w-6 h-6 mr-2 text-blue-600" />
								<div>
									{props.phones.map((phone, index) => (
										<p key={index}>
											{phone.label}: {phone.number}
										</p>
									))}
								</div>
							</div>
							<div className="flex items-center">
								<Mail className="w-6 h-6 mr-2 text-blue-600" />
								<div>
									{props.emails.map((email, index) => (
										<p key={index}>{email.email}</p>
									))}
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Areas We Serve</h3>
							<p>Impact Marine Group proudly serves boating enthusiasts across Georgia, with a focus on:</p>
							<ul className="list-disc list-inside space-y-1">
								{props.areasServed.map((area, index) => (
									<li key={index}>{area.area}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="space-y-6">
						<div className="relative h-64 md:h-80">
							<Image src={props.mapImage.url} alt="Map to Impact Marine Group" fill sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg object-cover" />
						</div>
						<Card>
							<CardContent className="p-4">
								<h3 className="font-semibold mb-2">{props.ctaTitle}</h3>
								<p className="text-sm mb-4">{props.ctaDescription}</p>
								<Button asChild className="w-full">
									<Link href="/contact">{props.ctaButtonText}</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Music, PhoneCall, Shield, Snowflake, Sun, Users, Wrench, Zap } from "lucide-react";
import type { Media } from "@/payload-types";

interface ServicesPageBlock {
	id: string;
	blockType: "servicesPage";
	title: string;
	subtitle: string;
	phoneNumber: string;
	services: Array<{
		icon: "Wrench" | "Anchor" | "Snowflake" | "Music" | "Sun" | "Zap" | "Users" | "Shield";
		title: string;
		description: string;
	}>;
	reasons: Array<{
		text: string;
	}>;
	reasonsImage: Media;
	winterizationPackages: Array<{
		title: string;
		description: string;
		services: Array<{ text: string }>;
		price: string;
		note: string;
	}>;
	servicePolicies: Array<{
		text: string;
	}>;
}

const iconMap = {
	Wrench,
	Anchor,
	Snowflake,
	Music,
	Sun,
	Zap,
	Users,
	Shield,
};

export default function ServicesPage(props: ServicesPageBlock) {
	return (
		<main role="main" aria-label="Main content" className="flex-grow">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<main className="space-y-16">
					<section className="text-center">
						<h1 className="text-4xl font-bold mb-4">{props.title}</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{props.subtitle}</p>
						<Button asChild size="sm" className="hidden md:inline-flex items-center text-xs">
							<Link href={`tel:+1${props.phoneNumber.replace(/\D/g, "")}`}>
								<PhoneCall className="h-3 w-3 mr-2" />
								{props.phoneNumber}
							</Link>
						</Button>
					</section>

					<section>
						<h2 className="text-3xl font-semibold mb-8 text-center">Our Comprehensive Services</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{props.services.map((service, index) => {
								const Icon = iconMap[service.icon];
								return (
									<Card key={index} className="hover:shadow-lg transition-shadow">
										<CardHeader>
											<Icon className="h-12 w-12 mb-4" />
											<CardTitle>{service.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="text-muted-foreground">{service.description}</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</section>

					<section className="bg-secondary rounded-lg p-8">
						<h2 className="text-3xl font-semibold text-secondary-foreground mb-6 text-center">Why Choose Impact Marine Group?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<ul className="space-y-4">
								{props.reasons.map((reason, index) => (
									<li key={index} className="flex items-center">
										<Anchor className="h-5 w-5 mr-2" />
										<span className="text-secondary-foreground">{reason.text}</span>
									</li>
								))}
							</ul>
							<div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden">
								<Image src={props.reasonsImage.url} alt="Impact Marine Group Service Center" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-3xl font-semibold mb-6 text-center">2024 Boat Winterization Specials</h2>
						<p className="text-center text-muted-foreground mb-8">Save Time, Save Money, And Protect Your Investment.</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{props.winterizationPackages.map((pkg, index) => (
								<Card key={index}>
									<CardHeader>
										<CardTitle>{pkg.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground mb-4">{pkg.description}</p>
										<ul className="list-disc list-inside text-muted-foreground mb-4">
											{pkg.services.map((service, serviceIndex) => (
												<li key={serviceIndex}>{service.text}</li>
											))}
										</ul>
										<p className="font-semibold text-2xl mb-2 text-primary">{pkg.price}</p>
										<p className="text-sm text-muted-foreground">{pkg.note}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section className="text-center">
						<h2 className="text-3xl font-semibold mb-4">Ready to Schedule Your Service?</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">Our team is standing by to assist you with all your boating service needs. Don't wait, call now to speak with a service advisor!</p>
						<Button asChild size="sm" className="hidden md:inline-flex items-center text-xs">
							<Link href={`tel:+1${props.phoneNumber.replace(/\D/g, "")}`}>
								<PhoneCall className="h-3 w-3 mr-2" />
								{props.phoneNumber}
							</Link>
						</Button>
					</section>

					<section className="bg-muted rounded-lg p-8">
						<h2 className="text-2xl font-semibold mb-4">Important Service Policies</h2>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							{props.servicePolicies.map((policy, index) => (
								<li key={index}>{policy.text}</li>
							))}
						</ul>
					</section>
				</main>
			</div>
		</main>
	);
}

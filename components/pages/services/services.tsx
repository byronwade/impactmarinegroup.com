import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Music, PhoneCall, Shield, Snowflake, Sun, Users, Wrench, Zap } from "lucide-react";

const services = [
	{ icon: Wrench, title: "Comprehensive Engine Service", description: "Our Lead Techs have extensive experience with I/O, Inboard, and PWC engines. We're certified by leading manufacturers including Yamaha and Indmar Marine Engines, supporting our Tige boater community." },
	{ icon: Anchor, title: "Repairs & Troubleshooting", description: "From simple maintenance to comprehensive engine repair, our 10,000 sq ft shop is equipped to handle all your boating needs." },
	{ icon: Snowflake, title: "Winterization Services", description: "Protect your investment during the off-season with our thorough winterization services. We offer several packages to fit your boat's needs, ensuring it's ready to launch when spring arrives." },
	{ icon: Music, title: "Audio & Lighting Installation", description: "Upgrade your boat with the latest audio systems and LED lighting. Our technicians are skilled in installing and configuring a wide range of devices to enhance your boating experience." },
	{ icon: Sun, title: "Gel Coat & Fiberglass Repair", description: "Keep your boat looking its best with our expert gel coat and fiberglass repair services. We restore damage and maintain the pristine appearance of your vessel." },
	{ icon: Zap, title: "Wake Boat Performance", description: "We specialize in wake boat performance enhancements, including surf systems and ballast installation. Maximize your wake for the ultimate riding experience." },
	{ icon: Users, title: "On-Dock Lake Service", description: "We offer on-dock lake service for inboard and I/O boats. We also provide free pickup from nearby ramps and storage locations for your convenience." },
	{ icon: Shield, title: "Parts & Accessories", description: "Access our complete catalog of marine supplies, parts, and accessories. From ropes and bumpers to cleaners and waxes, we likely have what you need with next-day delivery for orders placed before 4 PM." },
];

const reasons = ["Over 10,000 sq ft of fully equipped shop space", "Certified technicians with extensive experience", "Authorized Indmar and Yamaha Outboards service center", "Serving Lake Lanier, Lake Allatoona, Lake Burton, and more", "On-dock lake service and free local pickup available", "Comprehensive parts catalog with quick delivery"];

const winterizationPackages = [
	{
		title: "Winterization Station",
		description: "While You Wait or Same Day Pick Up – Complete Protection with the convenience of Same Day Service",
		services: ["Draining Water", "Anti-Freeze throughout system", "Fogging Oil", "Fuel Stabilizer"],
		price: "$229",
		note: "Up to 3 gallons of anti-freeze – additional may incur additional fee",
	},
	{
		title: "Winterization - Drop Off Only",
		description: "Complete Protection – Your boat will be ready to go in the spring",
		services: ["Draining Water", "Anti-Freeze throughout engine", "Fogging Oil", "Fuel Stabilizer"],
		price: "$199",
		note: "Up to 3 gallons of anti-freeze – additional may incur additional fee",
	},
	{
		title: "Winterize and Oil Change Special",
		description: "Protect for the winter and be ready for spring!",
		services: ["Complete winterization", "Complete Oil Change"],
		price: "$399",
		note: "Up to 6 quarts of standard oil and filter – additional may incur additional fee",
	},
];

const servicePolicies = ["Leave your keys in the ignition", "Provide us with your current engine hours", "Cover your boat or we'll assume you prefer it uncovered", "Remove personal items to keep labor costs down", "Invoices must be paid before boat can be released", "Pick up vessels within 3 days of completion to avoid storage fees", "Parts over $300 or non-returnable parts require a deposit", "Remote services must be paid for in advance"];

export default function ServiceCenter() {
	return (
		<main role="main" aria-label="Main content" className="flex-grow">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<main className="space-y-16">
					<section className="text-center">
						<h1 className="text-4xl font-bold mb-4">Impact Marine Group Service Center</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Expert marine services on Lake Lanier and beyond. We're boaters too, and we know how important it is to have your boat running right while keeping it affordable.</p>
						<Button asChild size="sm" className="hidden md:inline-flex items-center text-xs">
							<Link href="tel:+17708817808">
								<PhoneCall className="h-3 w-3 mr-2" />
								770-881-7808
							</Link>
						</Button>
					</section>

					<section>
						<h2 className="text-3xl font-semibold mb-8 text-center">Our Comprehensive Services</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{services.map((service, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<service.icon className="h-12 w-12 mb-4" />
										<CardTitle>{service.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground">{service.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section className="bg-secondary rounded-lg p-8">
						<h2 className="text-3xl font-semibold text-secondary-foreground mb-6 text-center">Why Choose Impact Marine Group?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<ul className="space-y-4">
								{reasons.map((reason, index) => (
									<li key={index} className="flex items-center">
										<Anchor className="h-5 w-5 mr-2" />
										<span className="text-secondary-foreground">{reason}</span>
									</li>
								))}
							</ul>
							<div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden">
								<Image src="/service-department.webp" alt="Impact Marine Group Service Center" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-3xl font-semibold mb-6 text-center">2024 Boat Winterization Specials</h2>
						<p className="text-center text-muted-foreground mb-8">Save Time, Save Money, And Protect Your Investment.</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{winterizationPackages.map((pkg, index) => (
								<Card key={index}>
									<CardHeader>
										<CardTitle>{pkg.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground mb-4">{pkg.description}</p>
										<ul className="list-disc list-inside text-muted-foreground mb-4">
											{pkg.services.map((service, serviceIndex) => (
												<li key={serviceIndex}>{service}</li>
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
							<Link href="tel:+17708817808">
								<PhoneCall className="h-3 w-3 mr-2" />
								770-881-7808
							</Link>
						</Button>
					</section>

					<section className="bg-muted rounded-lg p-8">
						<h2 className="text-2xl font-semibold mb-4">Important Service Policies</h2>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							{servicePolicies.map((policy, index) => (
								<li key={index}>{policy}</li>
							))}
						</ul>
					</section>
				</main>
			</div>
		</main>
	);
}

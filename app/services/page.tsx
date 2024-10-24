import Image from "next/legacy/image"
import { Phone, Wrench, Anchor, Zap, Users, Shield, Snowflake, Music, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServiceCenterLanding() {
	const phoneNumber = "770-881-7808";

	const services = [
		{
			icon: Wrench,
			title: "Comprehensive Engine Service",
			description: "Our Lead Techs have extensive experience with I/O, Inboard, and PWC engines. We&apos;re certified by leading manufacturers including Yamaha and Indmar Marine Engines, supporting our Tige boater community.",
		},
		{
			icon: Anchor,
			title: "Repairs & Troubleshooting",
			description: "From simple maintenance to comprehensive engine repair, our 10,000 sq ft shop is equipped to handle all your boating needs.",
		},
		{
			icon: Snowflake,
			title: "Winterization Services",
			description: "Protect your investment during the off-season with our thorough winterization services. We offer several packages to fit your boat's needs, ensuring it's ready to launch when spring arrives.",
		},
		{
			icon: Music,
			title: "Audio & Lighting Installation",
			description: "Upgrade your boat with the latest audio systems and LED lighting. Our technicians are skilled in installing and configuring a wide range of devices to enhance your boating experience.",
		},
		{
			icon: Sun,
			title: "Gel Coat & Fiberglass Repair",
			description: "Keep your boat looking its best with our expert gel coat and fiberglass repair services. We restore damage and maintain the pristine appearance of your vessel.",
		},
		{
			icon: Zap,
			title: "Wake Boat Performance",
			description: "We specialize in wake boat performance enhancements, including surf systems and ballast installation. Maximize your wake for the ultimate riding experience.",
		},
		{
			icon: Users,
			title: "On-Dock Lake Service",
			description: "We offer on-dock lake service for inboard and I/O boats. We also provide free pickup from nearby ramps and storage locations for your convenience.",
		},
		{
			icon: Shield,
			title: "Parts & Accessories",
			description: "Access our complete catalog of marine supplies, parts, and accessories. From ropes and bumpers to cleaners and waxes, we likely have what you need with next-day delivery for orders placed before 4 PM.",
		},
	];

	return (
		<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<main className="container mx-auto px-4 py-8">
				<section className="text-center mb-12">
					<h1 className="text-4xl font-bold text-black mb-4">Impact Marine Group Service Center</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">Expert marine services on Lake Lanier and beyond. We&apos;re boaters too, and we know how important it is to have your boat running right while keeping it affordable.</p>
					<Button size="lg" className="bg-black hover:bg-gray-800 text-white">
						<Phone className="mr-2 h-5 w-5" />
						Call Now: {phoneNumber}
					</Button>
				</section>

				<section className="mb-12">
					<h2 className="text-3xl font-semibold text-black mb-8 text-center">Our Comprehensive Services</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
								<service.icon className="h-12 w-12 text-black mb-4" />
								<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
								<p className="text-gray-600">{service.description}</p>
							</div>
						))}
					</div>
				</section>

				<section className="bg-gray-100 rounded-lg p-8 mb-12">
					<h2 className="text-3xl font-semibold text-black mb-6 text-center">Why Choose Impact Marine Group?</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<ul className="space-y-4">
							<li className="flex items-center">
								<Anchor className="h-5 w-5 text-black mr-2" />
								<span>Over 10,000 sq ft of fully equipped shop space</span>
							</li>
							<li className="flex items-center">
								<Anchor className="h-5 w-5 text-black mr-2" />
								<span>Certified technicians with extensive experience</span>
							</li>
							<li className="flex items-center">
								<Anchor className="h-5 w-5 text-black mr-2" />
								<span>Authorized Indmar and Yamaha Outboards service center</span>
							</li>
							<li className="flex items-center">
								<Anchor className="h-5 w-5 text-black mr-2" />
								<span>Serving Lake Lanier, Lake Allatoona, Lake Burton, and more</span>
							</li>
							<li className="flex items-center">
								<Anchor className="h-5 w-5 text-black mr-2" />
								<span>On-dock lake service and free local pickup available</span>
							</li>
							<li className="flex items-center">
								<Anchor className="h-5 w-5 text-black mr-2" />
								<span>Comprehensive parts catalog with quick delivery</span>
							</li>
						</ul>
						<div className="relative h-[300px] rounded-lg overflow-hidden">
							<Image src="/service-department.webp" alt="Impact Marine Group Service Center" layout="fill" objectFit="cover" />
						</div>
					</div>
				</section>

				<section className="mb-12">
					<h2 className="text-3xl font-semibold text-black mb-6 text-center">2024 Boat Winterization Specials</h2>
					<p className="text-center text-gray-600 mb-6">Save Time, Save Money, And Protect Your Investment.</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="border border-gray-200 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-2">Winterization Station</h3>
							<p className="text-gray-600 mb-4">While You Wait or Same Day Pick Up – Complete Protection with the convenience of Same Day Service</p>
							<ul className="list-disc list-inside text-gray-600 mb-4">
								<li>Draining Water</li>
								<li>Anti-Freeze throughout system</li>
								<li>Fogging Oil</li>
								<li>Fuel Stabilizer</li>
							</ul>
							<p className="font-semibold text-2xl mb-2">$229</p>
							<p className="text-sm text-gray-500">Up to 3 gallons of anti-freeze – additional may incur additional fee</p>
						</div>
						<div className="border border-gray-200 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-2">Winterization - Drop Off Only</h3>
							<p className="text-gray-600 mb-4">Complete Protection – Your boat will be ready to go in the spring</p>
							<ul className="list-disc list-inside text-gray-600 mb-4">
								<li>Draining Water</li>
								<li>Anti-Freeze throughout engine</li>
								<li>Fogging Oil</li>
								<li>Fuel Stabilizer</li>
							</ul>
							<p className="font-semibold text-2xl mb-2">$199</p>
							<p className="text-sm text-gray-500">Up to 3 gallons of anti-freeze – additional may incur additional fee</p>
						</div>
						<div className="border border-gray-200 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-2">Winterize and Oil Change Special</h3>
							<p className="text-gray-600 mb-4">Protect for the winter and be ready for spring!</p>
							<ul className="list-disc list-inside text-gray-600 mb-4">
								<li>Complete winterization</li>
								<li>Complete Oil Change</li>
							</ul>
							<p className="font-semibold text-2xl mb-2">$399</p>
							<p className="text-sm text-gray-500">Up to 6 quarts of standard oil and filter – additional may incur additional fee</p>
						</div>
					</div>
				</section>

				<section className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-black mb-4">Ready to Schedule Your Service?</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">Our team is standing by to assist you with all your boating service needs. Don&apos;t wait, call now to speak with a service advisor!</p>
					<Button size="lg" className="bg-black hover:bg-gray-800 text-white">
						<Phone className="mr-2 h-5 w-5" />
						Schedule Now: {phoneNumber}
					</Button>
				</section>

				<section className="bg-gray-100 rounded-lg p-8">
					<h2 className="text-2xl font-semibold text-black mb-4">Important Service Policies</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-600">
						<li>Leave your keys in the ignition</li>
						<li>Provide us with your current engine hours</li>
						<li>Cover your boat or we&apos;ll assume you prefer it uncovered</li>
						<li>Remove personal items to keep labor costs down</li>
						<li>Invoices must be paid before boat can be released</li>
						<li>Pick up vessels within 3 days of completion to avoid storage fees</li>
						<li>Parts over $300 or non-returnable parts require a deposit</li>
						<li>Remote services must be paid for in advance</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
'use client'

import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ExternalLink, Menu, ChevronRight } from "lucide-react"
import { getSiteConfig, SiteConfig } from "@/app/actions/sanity";
import Link from "next/link";

export async function getConfig() {
	const config = await getSiteConfig();
	return config;
}

const useConfig = () => {
	const [config, setConfig] = useState<SiteConfig | null>(null);

	useEffect(() => {
		getConfig().then(setConfig);
	}, []);

	return config;
};

const PrivacyPolicyPage = () => {
	const config = useConfig();
	const [activeSection, setActiveSection] = useState("");

	const sections = useMemo(
		() => [
			{ id: "overview", title: "Overview" },
			{ id: "vessel-service", title: "Vessel Service Requirements" },
			{ id: "additional-policies", title: "Additional Policies" },
			{ id: "scheduling", title: "Scheduling Services" },
			{ id: "communication", title: "Communication" },
			{ id: "payment", title: "Payment Information" },
		],
		[]
	);

	const scrollToSection = (sectionId: string) => {
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100; // Adjust offset as needed
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section.id);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
				}
				return false;
			});
			if (currentSection) {
				setActiveSection(currentSection.id);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call once to set initial active section
		return () => window.removeEventListener("scroll", handleScroll);
	}, [sections]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const TableOfContents = () => (
		<div>
			<h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
			<ul className="space-y-2">
				{sections.map((section) => (
					<li key={section.id}>
						<Button variant="ghost" className={`w-full justify-between text-left ${activeSection === section.id ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-100"}`} onClick={() => scrollToSection(section.id)}>
							{section.title}
							<ChevronRight className={`h-4 w-4 transition-transform ${activeSection === section.id ? "rotate-90" : ""}`} />
						</Button>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<>
			<Head>
				<title>Impact Marine Group Service Policies | Boat Repair and Maintenance</title>
				<meta name="description" content="Review Impact Marine Group's service policies for boat repair and maintenance. Learn about our vessel service requirements, scheduling, and payment information." />
				<meta name="keywords" content="boat repair, marine services, vessel maintenance, Impact Marine Group, service policies" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://impactmarinegroup.com/service-policies" />
			</Head>
			<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
				<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="lg:flex">
						<nav className="w-full lg:w-64 lg:mr-8 mb-8 lg:mb-0">
							<div className="bg-white p-4 rounded-lg shadow-sm lg:sticky lg:top-4">
								<div className="lg:hidden mb-4">
									<Sheet>
										<SheetTrigger asChild>
											<Button variant="outline" className="w-full">
												<Menu className="mr-2 h-4 w-4" /> Table of Contents
											</Button>
										</SheetTrigger>
										<SheetContent side="left">
											<ScrollArea className="h-[calc(100vh-100px)]">
												<TableOfContents />
											</ScrollArea>
										</SheetContent>
									</Sheet>
								</div>
								<div className="hidden lg:block">
									<ScrollArea className="h-[calc(100vh-200px)]">
										<TableOfContents />
									</ScrollArea>
								</div>
							</div>
						</nav>

						<div className="flex-1">
							<article className="bg-white p-8 rounded-lg shadow-sm">
								<h1 className="text-3xl font-bold text-gray-900 mb-8">Impact Marine Group Service Policies</h1>

								<section id="overview" className="mb-8">
									<h2 className="text-2xl font-bold mb-4">Overview</h2>
									<p className="text-gray-600 mb-4">At Impact Marine Group, we are committed to providing top-notch service for your vessel. Our service policies are designed to ensure a smooth and efficient experience for all our customers. Please review these policies carefully to understand our procedures and your responsibilities.</p>
								</section>

								<section id="vessel-service" className="mb-8">
									<h2 className="text-2xl font-bold mb-4">Vessel Service Requirements</h2>
									<ul className="list-disc pl-6 space-y-2 text-gray-600">
										<li>Leave your keys in the ignition</li>
										<li>Provide us with your current engine hours</li>
										<li>Cover your boat. If it is not covered when you leave, we will assume you prefer it uncovered</li>
										<li>Remove inflated tubes or excess personal items before your drop off your vessel to keep labor costs down</li>
										<li>Check the trailer pin before you leave, as we will pull it as an anti-theft precaution</li>
										<li>Take home accessories, cupholders, locks, chalks, extra keys, or remotes</li>
										<li>Pay invoices before boat can be released</li>
										<li>Pick up vessels within 3 days of notification of completion to avoid a $25 daily storage fee</li>
									</ul>
								</section>

								<section id="additional-policies" className="mb-8">
									<h2 className="text-2xl font-bold mb-4">Additional Policies</h2>
									<ul className="list-disc pl-6 space-y-2 text-gray-600">
										<li>Parts over $300 or non-returnable parts require a non-refundable deposit</li>
										<li>Remote services must be paid for in advance</li>
										<li>Mobile fees will be added to any off-site services</li>
										<li>Complementary Boat Ramp pick-up available at Charleston Park and Young Deer Park Ramps ONLY</li>
										<li>Pontoon Trailer rental is $125, free for Godfrey customers for one year from date of purchase</li>
										<li>We cannot keep your boat inside. The inside service bays are for Work In-Progress, not storage</li>
										<li>Contact us within 3 days of pick-up for unresolved issues</li>
									</ul>
								</section>

								<section id="scheduling" className="mb-8">
									<h2 className="text-2xl font-bold mb-4">Scheduling Services</h2>
									<h3 className="text-xl font-semibold mb-2">How to Schedule:</h3>
									<ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
										<li>
											Call to schedule an appointment:{" "}
											<a href={`tel:+1${config?.phoneNumber?.replace(/-/g, "")}`} className="text-blue-600 hover:underline">
												{config?.phoneNumber}
											</a>
										</li>
										<li>
											Complete the Online Service Request form at{" "}
											<Link href="https://impactmarinegroup.com" className="text-blue-600 hover:underline">
												impactmarinegroup.com
											</Link>
										</li>
										<li>
											Text us at{" "}
											<a href="sms:+17708817808" className="text-blue-600 hover:underline">
												770-881-7808
											</a>{" "}
											with your boat details and service needs
										</li>
									</ul>
									<h3 className="text-xl font-semibold mb-2">Tips for Efficient Service:</h3>
									<ul className="list-disc pl-6 space-y-2 text-gray-600">
										<li>Provide contact information you check regularly</li>
										<li>Respond quickly to Approval or Decline repair requests</li>
										<li>Provide deposits when required to ensure faster parts acquisition</li>
									</ul>
								</section>

								<section id="communication" className="mb-8">
									<h2 className="text-2xl font-bold mb-4">Communication</h2>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div className="bg-gray-50 p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">Phone</h3>
											<p className="text-gray-600">
												<a href="tel:+17708817808" className="hover:underline">
													770-881-7808
												</a>
											</p>
											<p className="text-gray-600">Service Advisor: EXT 103 TK</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">Email</h3>
											<p className="text-gray-600">Service questions:</p>
											<p className="text-gray-600">
												<a href="mailto:TK@impactmarinegroup.com" className="hover:underline">
													TK@impactmarinegroup.com
												</a>
											</p>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">Online</h3>
											<p className="text-gray-600">Online Service Request Form</p>
											<p className="text-gray-600">Available 24/7 on our website</p>
										</div>
									</div>
								</section>

								<section id="payment" className="mb-8">
									<h2 className="text-2xl font-bold mb-4">Payment Information</h2>
									<ul className="list-disc pl-6 space-y-2 text-gray-600">
										<li>Cash or Credit card at the time of pick up</li>
										<li>Call in with your credit card number</li>
										<li>Online payment link &quot;Text Request&quot; can be emailed to you along with your invoice (available 24/7)</li>
										<li>We cannot accept checks</li>
									</ul>
								</section>

								<section className="mt-12">
									<h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
									<p className="text-gray-600 mb-4">If you have any questions about our service policies or need further clarification, please don&apos;t hesitate to contact us.</p>
									<Button className="bg-blue-600 hover:bg-blue-700 text-white">
										Contact Us <ExternalLink className="ml-2 h-4 w-4" />
									</Button>
								</section>
							</article>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default PrivacyPolicyPage;

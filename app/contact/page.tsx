import Link from "next/link";
import { MessageCircle, Phone, MapPin, Ship, Wrench, DollarSign, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Contact Impact Marine Group</h1>
								<p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Let us know how we can help you with your boating needs.</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4">
							<Card>
								<CardContent className="flex flex-col items-center space-y-2 p-6">
									<MessageCircle className="h-6 w-6 text-blue-600" />
									<h3 className="text-xl font-bold">Chat to sales</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
									<Link className="text-sm underline text-blue-600" href="mailto:sales@impactmarinegroup.com">
										sales@impactmarinegroup.com
									</Link>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center space-y-2 p-6">
									<Wrench className="h-6 w-6 text-blue-600" />
									<h3 className="text-xl font-bold">Service support</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">We're here to help.</p>
									<Link className="text-sm underline text-blue-600" href="mailto:service@impactmarinegroup.com">
										service@impactmarinegroup.com
									</Link>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center space-y-2 p-6">
									<MapPin className="h-6 w-6 text-blue-600" />
									<h3 className="text-xl font-bold">Visit us</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">5185 Browns Bridge Rd</p>
									<Link className="text-sm underline text-blue-600" href="https://maps.google.com/?q=5185+Browns+Bridge+Rd">
										View on Google Maps
									</Link>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center space-y-2 p-6">
									<Phone className="h-6 w-6 text-blue-600" />
									<h3 className="text-xl font-bold">Call us</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
									<Link className="text-sm underline text-blue-600" href="tel:+17708817808">
										Sales: (770) 881-7808
									</Link>
									<Link className="text-sm underline text-blue-600" href="tel:+17708817809">
										Service: (770) 881-7809
									</Link>
								</CardContent>
							</Card>
						</div>
						<div className="mx-auto max-w-3xl space-y-8">
							<h2 className="text-3xl font-bold tracking-tighter text-center text-blue-900">Frequently asked questions</h2>
							<Accordion type="single" collapsible className="w-full">
								<AccordionItem value="item-1">
									<AccordionTrigger>
										<div className="flex items-center">
											<Ship className="mr-2 h-5 w-5 text-blue-600" />
											What brands of boats do you offer?
										</div>
									</AccordionTrigger>
									<AccordionContent>We offer a wide range of premium boat brands, including Sea Fox, Starcraft, and more. Our selection includes everything from family-friendly pontoons to high-performance fishing boats.</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>
										<div className="flex items-center">
											<Wrench className="mr-2 h-5 w-5 text-blue-600" />
											What types of marine services do you provide?
										</div>
									</AccordionTrigger>
									<AccordionContent>We offer comprehensive marine services including boat repair, engine maintenance, electrical system diagnostics, winterization, and more. Our certified technicians are equipped to handle all aspects of boat care.</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>
										<div className="flex items-center">
											<Ship className="mr-2 h-5 w-5 text-blue-600" />
											Do you offer boat rentals or charters?
										</div>
									</AccordionTrigger>
									<AccordionContent>While we primarily focus on boat sales and service, we can provide information on local rental and charter options. Contact our sales team for recommendations and partnerships we may have in the area.</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>
										<div className="flex items-center">
											<DollarSign className="mr-2 h-5 w-5 text-blue-600" />
											Do you offer financing options for boat purchases?
										</div>
									</AccordionTrigger>
									<AccordionContent>Yes, we offer various financing options to help you get on the water. Our team can guide you through the process and help find the best financing solution for your budget and needs.</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-5">
									<AccordionTrigger>
										<div className="flex items-center">
											<Ship className="mr-2 h-5 w-5 text-blue-600" />
											How do I schedule a service appointment?
										</div>
									</AccordionTrigger>
									<AccordionContent>You can schedule a service appointment by calling our service department at (770) 881-7809 or by emailing service@impactmarinegroup.com. We'll work with you to find a convenient time for your boat's maintenance or repair.</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-6">
									<AccordionTrigger>
										<div className="flex items-center">
											<Clock className="mr-2 h-5 w-5 text-blue-600" />
											What are your hours of operation?
										</div>
									</AccordionTrigger>
									<AccordionContent>Our sales and service departments are open Monday through Friday from 8am to 5pm. We're closed on major holidays. For emergency service outside of these hours, please call our service line for assistance.</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

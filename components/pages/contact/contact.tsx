import { MessageCircle, Wrench, MapPin, Phone, Ship, DollarSign, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ContactSection() {
	return (
		<main className="flex-grow">
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
								<ContactCard icon={MessageCircle} title="Chat to sales" description="Speak to our friendly team." contact="sales@impactmarinegroup.com" />
								<ContactCard icon={Wrench} title="Service support" description="We're here to help." contact="service@impactmarinegroup.com" />
								<ContactCard icon={MapPin} title="Visit us" description="5185 Browns Bridge Rd" linkText="View on Google Maps" href="https://maps.google.com/?q=5185+Browns+Bridge+Rd" />
								<ContactCard
									icon={Phone}
									title="Call us"
									description="Mon-Fri from 8am to 5pm."
									contact={[
										{ label: "Sales", number: "(770) 881-7808" },
										{ label: "Service", number: "(770) 881-7809" },
									]}
								/>
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
										<AccordionContent>We offer a wide range of boat brands, including Sea Fox, Bennington, and more. Visit our showroom or check our inventory online for the latest models.</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger>
											<div className="flex items-center">
												<Wrench className="mr-2 h-5 w-5 text-blue-600" />
												What types of marine services do you provide?
											</div>
										</AccordionTrigger>
										<AccordionContent>We provide a full range of marine services including routine maintenance, repairs, winterization, and custom installations. Our certified technicians are equipped to handle all your boating needs.</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-3">
										<AccordionTrigger>
											<div className="flex items-center">
												<Ship className="mr-2 h-5 w-5 text-blue-600" />
												Do you offer boat rentals or charters?
											</div>
										</AccordionTrigger>
										<AccordionContent>While we primarily focus on boat sales and service, we can recommend local rental and charter services. Contact our sales team for more information.</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-4">
										<AccordionTrigger>
											<div className="flex items-center">
												<DollarSign className="mr-2 h-5 w-5 text-blue-600" />
												Do you offer financing options for boat purchases?
											</div>
										</AccordionTrigger>
										<AccordionContent>Yes, we offer various financing options to help make your dream boat a reality. Our team can guide you through the process and help find the best option for your budget.</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-5">
										<AccordionTrigger>
											<div className="flex items-center">
												<Ship className="mr-2 h-5 w-5 text-blue-600" />
												How do I schedule a service appointment?
											</div>
										</AccordionTrigger>
										<AccordionContent>You can schedule a service appointment by calling our service department, using our online booking system, or visiting our location. We'll work with you to find a convenient time for your boat's maintenance or repair.</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-6">
										<AccordionTrigger>
											<div className="flex items-center">
												<Clock className="mr-2 h-5 w-5 text-blue-600" />
												What are your hours of operation?
											</div>
										</AccordionTrigger>
										<AccordionContent>Our regular hours are Monday to Friday from 8am to 5pm. We're also open on Saturdays from 9am to 3pm. Please note that hours may vary on holidays, so it's always best to call ahead.</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
					</section>
				</main>
			</div>
		</main>
	);
}

interface ContactCardProps {
	icon: React.ElementType;
	title: string;
	description: string;
	contact?: string | { label: string; number: string }[];
	linkText?: string;
	href?: string;
}

function ContactCard({ icon: Icon, title, description, contact, linkText, href }: ContactCardProps) {
	return (
		<div className="rounded-xl border bg-card text-card-foreground shadow">
			<div className="flex flex-col items-center space-y-2 p-6">
				<Icon className="h-6 w-6 text-blue-600" />
				<h3 className="text-xl font-bold">{title}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
				{typeof contact === "string" && (
					<a className="text-sm underline text-blue-600" href={`mailto:${contact}`}>
						{contact}
					</a>
				)}
				{Array.isArray(contact) &&
					contact.map((item, index) => (
						<a key={index} className="text-sm underline text-blue-600" href={`tel:${item.number.replace(/\D/g, "")}`}>
							{item.label}: {item.number}
						</a>
					))}
				{linkText && href && (
					<a className="text-sm underline text-blue-600" href={href}>
						{linkText}
					</a>
				)}
			</div>
		</div>
	);
}

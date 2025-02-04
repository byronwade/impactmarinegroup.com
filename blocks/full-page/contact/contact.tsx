import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

interface ContactBlockProps {
	title: string;
	subtitle: string;
	address: string;
	hours: Array<{ text: string }>;
	phones: Array<{ label: string; number: string }>;
	emails: Array<{ email: string }>;
	areasServed: Array<{ area: string }>;
	mapImage: {
		url: string;
		alt?: string;
	};
	ctaTitle: string;
	ctaDescription: string;
	ctaButtonText: string;
}

export default function ContactBlock({ title, subtitle, address, hours, phones, emails, areasServed, mapImage, ctaTitle, ctaDescription, ctaButtonText }: ContactBlockProps) {
	return (
		<section id="contact" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<div className="space-y-4">
							<div className="flex items-center">
								<MapPin className="w-6 h-6 mr-2 text-blue-600" />
								<p>{address}</p>
							</div>
							<div className="flex items-center">
								<Clock className="w-6 h-6 mr-2 text-blue-600" />
								<div>
									{hours.map((hour, index) => (
										<p key={index}>{hour.text}</p>
									))}
								</div>
							</div>
							<div className="flex items-center">
								<Phone className="w-6 h-6 mr-2 text-blue-600" />
								<div>
									{phones.map((phone, index) => (
										<p key={index}>
											{phone.label}: {phone.number}
										</p>
									))}
								</div>
							</div>
							<div className="flex items-center">
								<Mail className="w-6 h-6 mr-2 text-blue-600" />
								<div>
									{emails.map((email, index) => (
										<p key={index}>{email.email}</p>
									))}
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Areas We Serve</h3>
							<p>Impact Marine Group proudly serves boating enthusiasts across Georgia, with a focus on:</p>
							<ul className="list-disc list-inside space-y-1">
								{areasServed.map((area, index) => (
									<li key={index}>{area.area}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="space-y-6">
						<div className="relative h-64 md:h-80">
							<Image src={mapImage.url} alt={mapImage.alt || "Location map"} layout="fill" objectFit="cover" className="rounded-lg" />
						</div>
						<Card>
							<CardContent className="p-4">
								<h3 className="font-semibold mb-2">{ctaTitle}</h3>
								<p className="text-sm mb-4">{ctaDescription}</p>
								<Button className="w-full">{ctaButtonText}</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	};

	return (
		<section className="py-32 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
					<div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
						<div className="text-center lg:text-left">
							<h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">Contact Us</h1>
							<p className="text-muted-foreground">We&apos;re here to assist you with all your boating needs</p>
						</div>
						<div className="mx-auto w-fit lg:mx-0">
							<h2 className="mb-6 text-center text-2xl font-semibold lg:text-left">Contact Details</h2>
							<div className="space-y-4">
								<div className="flex items-center">
									<MapPin className="w-6 h-6 mr-2 text-primary" />
									<p>5185 Browns Bridge Rd, Cumming, GA 30041</p>
								</div>
								<div className="flex items-center">
									<Clock className="w-6 h-6 mr-2 text-primary" />
									<p>
										Monday - Friday: 9AM-6PM
										<br />
										Saturday: 10AM-4PM
										<br />
										Sunday: Closed
									</p>
								</div>
								<div className="flex items-center">
									<Phone className="w-6 h-6 mr-2 text-primary" />
									<p>
										Sales: (770) 881-7808
										<br />
										Service: (770) 881-7809
									</p>
								</div>
								<div className="flex items-center">
									<Mail className="w-6 h-6 mr-2 text-primary" />
									<p>
										sales@impactmarinegroup.com
										<br />
										service@impactmarinegroup.com
									</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4">Areas We Serve</h3>
							<p className="mb-2">Impact Marine Group proudly serves boating enthusiasts across Georgia, with a focus on:</p>
							<ul className="list-disc list-inside space-y-1 mb-4">
								<li>Lake Lanier</li>
								<li>Lake Allatoona</li>
								<li>Lake Burton</li>
								<li>Lake Sinclair</li>
								<li>Lake Hartwell</li>
								<li>All Georgia Lakes</li>
							</ul>
						</div>
					</div>
					<div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border bg-background p-10">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="flex gap-4">
								<div className="grid w-full items-center gap-1.5">
									<Label htmlFor="firstName">First Name</Label>
									<Input type="text" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
								</div>
								<div className="grid w-full items-center gap-1.5">
									<Label htmlFor="lastName">Last Name</Label>
									<Input type="text" id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
								</div>
							</div>
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="email">Email</Label>
								<Input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
							</div>
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="phone">Phone</Label>
								<Input type="tel" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
							</div>
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="subject">Subject</Label>
								<Input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
							</div>
							<div className="grid w-full gap-1.5">
								<Label htmlFor="message">Message</Label>
								<Textarea id="message" name="message" className="min-h-60" placeholder="Type your message here." value={formData.message} onChange={handleChange} required />
							</div>
							<Button type="submit" className="w-full">
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
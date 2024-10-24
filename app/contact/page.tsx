'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/legacy/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
		<section id="contact" className="py-12 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
				<h3 className="text-xl font-semibold mb-4 text-center">We&apos;re here to assist you with all your boating needs</h3>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<div className="space-y-4">
							<div className="flex items-center">
								<MapPin className="w-6 h-6 mr-2 text-blue-600" />
								<p>5185 Browns Bridge Rd, Cumming, GA 30041</p>
							</div>
							<div className="flex items-center">
								<Clock className="w-6 h-6 mr-2 text-blue-600" />
								<p>
									Monday - Friday: 9AM-6PM
									<br />
									Saturday: 10AM-4PM
									<br />
									Sunday: Closed
								</p>
							</div>
							<div className="flex items-center">
								<Phone className="w-6 h-6 mr-2 text-blue-600" />
								<p>
									Sales: (770) 881-7808
									<br />
									Service: (770) 881-7809
								</p>
							</div>
							<div className="flex items-center">
								<Mail className="w-6 h-6 mr-2 text-blue-600" />
								<p>
									sales@impactmarinegroup.com
									<br />
									service@impactmarinegroup.com
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Areas We Serve</h3>
							<p>Impact Marine Group proudly serves boating enthusiasts across Georgia, with a focus on:</p>
							<ul className="list-disc list-inside space-y-1">
								<li>Lake Lanier</li>
								<li>Lake Allatoona</li>
								<li>Lake Burton</li>
								<li>Lake Sinclair</li>
								<li>Lake Hartwell</li>
								<li>All Georgia Lakes</li>
							</ul>
							<p>We also offer nationwide shipping for our extensive catalog of marine parts and accessories through our online store at impactmarinegroup.com.</p>
						</div>
					</div>
					<div className="space-y-6">
						<div className="relative h-64 md:h-80">
							<Image alt="Map to Impact Marine Group" src="https://placehold.co/400x600" width={400} height={600} className="w-full h-full object-cover" layout="fill" />
						</div>
						<form className="space-y-4">
							<Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
							<Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
							<Input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
							<Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
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

import Image from "next/legacy/image"
import { MapPin, Clock, Phone, Mail, Ship, Wrench, Compass, Star, DollarSign, Users, LifeBuoy, Zap, Shield, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SinglePageDealership() {
  return (
		<div className="min-h-screen bg-gray-50">
			<main className="container mx-auto px-4 py-12 space-y-24 max-w-7xl">
				{/* About Section */}
				<section id="about" className="space-y-8">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8">About Impact Marine Group</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-4">
								<p>Impact Marine Group is more than just a boat dealership – we&apos;re your gateway to unforgettable aquatic adventures. Founded by passionate boating enthusiasts, our mission is to provide unparalleled service and top-quality marine products to both seasoned sailors and newcomers to the boating world.</p>
								<p>Located at 5185 Browns Bridge Rd, our state-of-the-art facility is a testament to our commitment to excellence. We&apos;ve created a space where customers can explore, learn, and find the perfect vessel for their needs. Our showroom features a wide array of boats, from sleek speedboats to comfortable family cruisers, all hand-picked for their quality and performance.</p>
								<p>What sets Impact Marine Group apart is our team. Each member brings years of experience and a genuine love for boating to the table. We don&apos;t just sell boats – we use them, we live and breathe the boating lifestyle. This firsthand experience allows us to provide expert advice and insights that go beyond what you&apos;ll find in any product brochure.</p>
								<p>We believe that boating is more than a hobby – it&apos;s a way of life. That&apos;s why we&apos;re committed to fostering a community of boating enthusiasts. Through our events, workshops, and customer appreciation days, we bring together like-minded individuals who share our passion for the water.</p>
							</div>
							<div className="space-y-6">
								<div className="relative h-64 md:h-80">
									<Image src="https://placehold.co/400x600" alt="Impact Marine Group Showroom" width={500} height={300} className="rounded-lg object-cover" />
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-white p-4 rounded-lg">
										<Users className="w-8 h-8 mb-2 text-blue-600" />
										<h3 className="font-semibold mb-1">Expert Team</h3>
										<p className="text-sm">Knowledgeable staff with years of boating experience</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<Zap className="w-8 h-8 mb-2 text-blue-600" />
										<h3 className="font-semibold mb-1">Top Brands</h3>
										<p className="text-sm">Curated selection of premium marine products</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Brands Section */}
				<section id="brands" className="space-y-8">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8">Our Premium Brands</h2>
						<h3 className="text-xl font-semibold mb-4">Discover the finest names in the marine industry</h3>
						<div className="space-y-6">
							<h4 className="text-lg font-semibold">Sea Fox Boat Company</h4>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<p>Sea Fox Boat Company stands at the forefront of marine innovation, crafting vessels that seamlessly blend luxury, performance, and durability. With a clear mission to provide quality, hand-crafted saltwater boats, Sea Fox offers a range of models that cater to diverse boating needs and preferences.</p>
									<p>Each Sea Fox boat is a testament to meticulous craftsmanship and cutting-edge design. From the sleek lines of their bay boats to the robust build of their offshore models, every detail is carefully considered to enhance your boating experience.</p>
									<ul className="list-disc list-inside space-y-2">
										<li>Premium-grade materials for lasting durability</li>
										<li>State-of-the-art navigation and fish-finding technology</li>
										<li>Ergonomic designs for maximum comfort and functionality</li>
										<li>Powered by reliable Yamaha Outboards for optimal performance</li>
										<li>Industry-leading warranty for peace of mind</li>
									</ul>
								</div>
								<div className="space-y-4">
									<div className="relative h-64">
										<Image src="https://placehold.co/400x600" alt="Sea Fox Boat" width={500} height={300} className="rounded-lg object-cover" />
									</div>
									<div className="bg-gray-100 p-4 rounded-lg">
										<h3 className="font-semibold mb-2">Popular Models</h3>
										<ul className="list-disc list-inside space-y-1">
											<li>Sea Fox 288 Commander</li>
											<li>Sea Fox 249 Avenger</li>
											<li>Sea Fox 226 Traveler</li>
											<li>Sea Fox 328 Commander</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section id="services" className="space-y-8">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8">Comprehensive Marine Services</h2>
						<h3 className="text-xl font-semibold mb-4">Expert care for your vessel, from bow to stern</h3>
						<div className="space-y-6">
							<p className="text-lg">At Impact Marine Group, we pride ourselves on offering a full spectrum of marine services. Our state-of-the-art facility and team of certified technicians ensure that your boat receives the best care possible, keeping it in prime condition for all your aquatic adventures.</p>
							<div className="grid md:grid-cols-3 gap-6">
								{[
									{ icon: Ship, title: "Boat Repair", description: "From minor fixes to major overhauls, our expert technicians handle all aspects of boat repair with precision and care. We specialize in both structural and mechanical repairs, ensuring your vessel is restored to peak condition." },
									{ icon: Wrench, title: "Routine Maintenance", description: "Regular maintenance is key to extending the life of your boat. Our comprehensive maintenance programs cover everything from engine tune-ups to hull cleaning, keeping your boat running smoothly and looking great." },
									{ icon: Compass, title: "Winterization", description: "Protect your investment during the off-season with our thorough winterization services. We safeguard your boat's engine, plumbing, and other critical systems against cold weather damage, ensuring it's ready to launch when spring arrives." },
									{ icon: LifeBuoy, title: "Safety Inspections", description: "Safety is paramount on the water. Our certified inspectors conduct thorough safety checks, ensuring your boat meets all current regulations and is equipped with proper safety gear. We provide detailed reports and recommendations for any necessary upgrades." },
									{ icon: DollarSign, title: "Financing Options", description: "Make your boating dreams a reality with our flexible financing solutions. We work with top lenders to offer competitive rates and terms tailored to your budget, making boat ownership accessible and affordable." },
									{ icon: Users, title: "Boating Education", description: "Expand your boating knowledge with our comprehensive educational programs. From beginner courses to advanced seamanship, our classes cover navigation, safety, maintenance, and more, helping you become a more confident and capable boater." },
									{ icon: Zap, title: "Electronics Installation", description: "Upgrade your boat with the latest marine electronics. Our technicians are skilled in installing and configuring a wide range of devices, from GPS and fish finders to complete entertainment systems, enhancing your boating experience." },
									{ icon: Shield, title: "Extended Warranty Plans", description: "Enjoy peace of mind with our extended warranty options. We offer comprehensive coverage plans that go beyond standard warranties, protecting your investment and ensuring worry-free boating for years to come." },
									{ icon: Award, title: "Customization Services", description: "Make your boat truly yours with our customization services. From custom upholstery and paint jobs to adding specialized equipment, we can help you create a boat that perfectly fits your style and needs." },
								].map((service, index) => (
									<div key={index} className="bg-gray-100 p-6 rounded-lg">
										<service.icon className="w-12 h-12 mb-4 text-blue-600" />
										<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
										<p className="text-sm text-gray-600">{service.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section id="testimonials" className="space-y-8">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8">Customer Testimonials</h2>
						<h3 className="text-xl font-semibold mb-4">Hear from our satisfied boating enthusiasts</h3>
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{ name: "John D.", location: "Lake Lanier", text: "Impact Marine Group provided exceptional service when I purchased my Sea Fox. Their knowledge and attention to detail made the process smooth and enjoyable. The team went above and beyond to ensure I found the perfect boat for my family's needs. Even after the sale, their support has been outstanding." },
								{ name: "Sarah M.", location: "Lake Allatoona", text: "The maintenance team at Impact Marine is top-notch. They keep my boat running perfectly, and their winterization service gives me peace of mind during the off-season. I've been a customer for years, and the consistent quality of their work is why I keep coming back. They treat my boat as if it were their own." },
								{ name: "Mike R.", location: "Lake Burton", text: "I took a boating class with Impact Marine, and it was incredibly informative. The instructors were knowledgeable and patient, perfect for a newcomer like me. They covered everything from basic navigation to advanced safety techniques. I feel much more confident on the water now, thanks to their excellent training program." },
								{ name: "Lisa K.", location: "Lake Sinclair", text: "The financing options offered by Impact Marine helped me get the boat of my dreams. Their team worked hard to find a plan that fit my budget. They  explained every detail of the process, making it stress-free. I appreciate  their transparency and commitment to customer satisfaction. I wouldn't hesitate to recommend them to anyone looking to finance a boat." },
								{ name: "David W.", location: "Lake Hartwell", text: "The customization services at Impact Marine are second to none. They helped me upgrade my boat with a new sound system and fishing equipment. The attention to detail in the installation was impressive, and the result exceeded my expectations. It's like having a brand new  boat tailored exactly to my preferences." },
								{ name: "Emily T.", location: "Atlanta", text: "As a first-time boat owner, I was nervous about maintenance, but Impact Marine's service team has been incredible. They're always willing to explain procedures and offer advice on keeping my boat in top shape. Their preventative maintenance program has saved me from potential issues and given me confidence in my boat's reliability." },
							].map((testimonial, index) => (
								<div key={index} className="bg-gray-100 p-6 rounded-lg">
									<Star className="w-8 h-8 mb-4 text-yellow-400" />
									<p className="mb-4 italic">&quot;{testimonial.text}&quot;</p>
									<p className="font-semibold">{testimonial.name}</p>
									<p className="text-sm text-gray-600">{testimonial.location}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="space-y-8">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8">Contact Us</h2>
						<h3 className="text-xl font-semibold mb-4">We&apos;re here to assist you with all your boating needs</h3>
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
									<Image src="https://placehold.co/400x600" alt="Map to Impact Marine Group" width={500} height={300} className="rounded-lg object-cover" />
								</div>
								<div className="bg-gray-100 p-4 rounded-lg">
									<h3 className="font-semibold mb-2">Get in Touch</h3>
									<p className="text-sm mb-4">Have a question or ready to start your boating journey? Reach out to our team for personalized assistance.</p>
									<Button className="w-full">Contact Us Now</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
  );
}
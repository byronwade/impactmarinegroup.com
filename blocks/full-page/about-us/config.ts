import type { Block } from "payload/types";

export const aboutUsBlock: Block = {
	slug: "aboutUs",
	labels: {
		singular: "About Us Block",
		plural: "About Us Blocks",
	},
	admin: {
		group: "Full Page Blocks",
		description: "A full-page about us section with company information and testimonials",
	},
	fields: [
		{
			name: "blockType",
			type: "text",
			required: true,
			defaultValue: "aboutUs",
			admin: {
				hidden: true,
			},
		},
		{
			name: "aboutSection",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "About Impact Marine Group",
				},
				{
					name: "content",
					type: "array",
					required: true,
					defaultValue: [
						{ paragraph: "Impact Marine Group is more than just a boat dealership – we're your gateway to unforgettable aquatic adventures. Founded by passionate boating enthusiasts, our mission is to provide unparalleled service and top-quality marine products to both seasoned sailors and newcomers to the boating world." },
						{ paragraph: "Located at 5185 Browns Bridge Rd, our state-of-the-art facility is a testament to our commitment to excellence. We've created a space where customers can explore, learn, and find the perfect vessel for their needs. Our showroom features a wide array of boats, from sleek speedboats to comfortable family cruisers, all hand-picked for their quality and performance." },
						{ paragraph: "What sets Impact Marine Group apart is our team. Each member brings years of experience and a genuine love for boating to the table. We don't just sell boats – we use them, we live and breathe the boating lifestyle. This firsthand experience allows us to provide expert advice and insights that go beyond what you'll find in any product brochure." },
						{ paragraph: "We believe that boating is more than a hobby – it's a way of life. That's why we're committed to fostering a community of boating enthusiasts. Through our events, workshops, and customer appreciation days, we bring together like-minded individuals who share our passion for the water." },
					],
					fields: [
						{
							name: "paragraph",
							type: "textarea",
							required: true,
						},
					],
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "features",
					type: "array",
					required: true,
					defaultValue: [
						{
							icon: "users",
							title: "Expert Team",
							description: "Knowledgeable staff with years of boating experience",
						},
						{
							icon: "zap",
							title: "Top Brands",
							description: "Curated selection of premium marine products",
						},
					],
					fields: [
						{
							name: "icon",
							type: "select",
							options: [
								{ label: "Users", value: "users" },
								{ label: "Zap", value: "zap" },
							],
							required: true,
						},
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "description",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "brandsSection",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Our Premium Brands",
				},
				{
					name: "subtitle",
					type: "text",
					required: true,
					defaultValue: "Discover the finest names in the marine industry",
				},
				{
					name: "brands",
					type: "array",
					required: true,
					defaultValue: [
						{
							name: "Sea Fox Boat Company",
							description: "Sea Fox Boat Company stands at the forefront of marine innovation, crafting vessels that seamlessly blend luxury, performance, and durability. With a clear mission to provide quality, hand-crafted saltwater boats, Sea Fox offers a range of models that cater to diverse boating needs and preferences.",
							features: [{ text: "Premium-grade materials for lasting durability" }, { text: "State-of-the-art navigation and fish-finding technology" }, { text: "Ergonomic designs for maximum comfort and functionality" }, { text: "Powered by reliable Yamaha Outboards for optimal performance" }, { text: "Industry-leading warranty for peace of mind" }],
							popularModels: [{ model: "Sea Fox 288 Commander" }, { model: "Sea Fox 249 Avenger" }, { model: "Sea Fox 226 Traveler" }, { model: "Sea Fox 328 Commander" }],
						},
					],
					fields: [
						{
							name: "name",
							type: "text",
							required: true,
						},
						{
							name: "description",
							type: "textarea",
							required: true,
						},
						{
							name: "features",
							type: "array",
							fields: [
								{
									name: "text",
									type: "text",
									required: true,
								},
							],
						},
						{
							name: "image",
							type: "upload",
							relationTo: "media",
							required: true,
						},
						{
							name: "popularModels",
							type: "array",
							fields: [
								{
									name: "model",
									type: "text",
									required: true,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "servicesSection",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Comprehensive Marine Services",
				},
				{
					name: "subtitle",
					type: "text",
					required: true,
					defaultValue: "Expert care for your vessel, from bow to stern",
				},
				{
					name: "description",
					type: "textarea",
					required: true,
					defaultValue: "At Impact Marine Group, we pride ourselves on offering a full spectrum of marine services. Our state-of-the-art facility and team of certified technicians ensure that your boat receives the best care possible, keeping it in prime condition for all your aquatic adventures.",
				},
				{
					name: "services",
					type: "array",
					required: true,
					defaultValue: [
						{
							icon: "ship",
							title: "Boat Repair",
							description: "From minor fixes to major overhauls, our expert technicians handle all aspects of boat repair with precision and care. We specialize in both structural and mechanical repairs, ensuring your vessel is restored to peak condition.",
						},
						{
							icon: "wrench",
							title: "Routine Maintenance",
							description: "Regular maintenance is key to extending the life of your boat. Our comprehensive maintenance programs cover everything from engine tune-ups to hull cleaning, keeping your boat running smoothly and looking great.",
						},
						{
							icon: "compass",
							title: "Winterization",
							description: "Protect your investment during the off-season with our thorough winterization services. We safeguard your boat's engine, plumbing, and other critical systems against cold weather damage, ensuring it's ready to launch when spring arrives.",
						},
						{
							icon: "lifeBuoy",
							title: "Safety Inspections",
							description: "Safety is paramount on the water. Our certified inspectors conduct thorough safety checks, ensuring your boat meets all current regulations and is equipped with proper safety gear. We provide detailed reports and recommendations for any necessary upgrades.",
						},
						{
							icon: "dollarSign",
							title: "Financing Options",
							description: "Make your boating dreams a reality with our flexible financing solutions. We work with top lenders to offer competitive rates and terms tailored to your budget, making boat ownership accessible and affordable.",
						},
						{
							icon: "users",
							title: "Boating Education",
							description: "Expand your boating knowledge with our comprehensive educational programs. From beginner courses to advanced seamanship, our classes cover navigation, safety, maintenance, and more, helping you become a more confident and capable boater.",
						},
						{
							icon: "zap",
							title: "Electronics Installation",
							description: "Upgrade your boat with the latest marine electronics. Our technicians are skilled in installing and configuring a wide range of devices, from GPS and fish finders to complete entertainment systems, enhancing your boating experience.",
						},
						{
							icon: "shield",
							title: "Extended Warranty Plans",
							description: "Enjoy peace of mind with our extended warranty options. We offer comprehensive coverage plans that go beyond standard warranties, protecting your investment and ensuring worry-free boating for years to come.",
						},
						{
							icon: "award",
							title: "Customization Services",
							description: "Make your boat truly yours with our customization services. From custom upholstery and paint jobs to adding specialized equipment, we can help you create a boat that perfectly fits your style and needs.",
						},
					],
					fields: [
						{
							name: "icon",
							type: "select",
							options: [
								{ label: "Ship", value: "ship" },
								{ label: "Wrench", value: "wrench" },
								{ label: "Compass", value: "compass" },
								{ label: "Life Buoy", value: "lifeBuoy" },
								{ label: "Dollar Sign", value: "dollarSign" },
								{ label: "Users", value: "users" },
								{ label: "Zap", value: "zap" },
								{ label: "Shield", value: "shield" },
								{ label: "Award", value: "award" },
							],
							required: true,
						},
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "description",
							type: "textarea",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "testimonialsSection",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Customer Testimonials",
				},
				{
					name: "subtitle",
					type: "text",
					required: true,
					defaultValue: "Hear from our satisfied boating enthusiasts",
				},
				{
					name: "testimonials",
					type: "array",
					required: true,
					defaultValue: [
						{
							name: "John D.",
							location: "Lake Lanier",
							text: "Impact Marine Group provided exceptional service when I purchased my Sea Fox. Their knowledge and attention to detail made the process smooth and enjoyable. The team went above and beyond to ensure I found the perfect boat for my family's needs. Even after the sale, their support has been outstanding.",
						},
						{
							name: "Sarah M.",
							location: "Lake Allatoona",
							text: "The maintenance team at Impact Marine is top-notch. They keep my boat running perfectly, and their winterization service gives me peace of mind during the off-season. I've been a customer for years, and the consistent quality of their work is why I keep coming back. They treat my boat as if it were their own.",
						},
						{
							name: "Mike R.",
							location: "Lake Burton",
							text: "I took a boating class with Impact Marine, and it was incredibly informative. The instructors were knowledgeable and patient, perfect for a newcomer like me. They covered everything from basic navigation to advanced safety techniques. I feel much more confident on the water now, thanks to their excellent training program.",
						},
						{
							name: "Lisa K.",
							location: "Lake Sinclair",
							text: "The financing options offered by Impact Marine helped me get the boat of my dreams. Their team worked hard to find a plan that fit my budget. They explained every detail of the process, making it stress-free. I appreciate their transparency and commitment to customer satisfaction. I wouldn't hesitate to recommend them to anyone looking to finance a boat.",
						},
						{
							name: "David W.",
							location: "Lake Hartwell",
							text: "The customization services at Impact Marine are second to none. They helped me upgrade my boat with a new sound system and fishing equipment. The attention to detail in the installation was impressive, and the result exceeded my expectations. It's like having a brand new boat tailored exactly to my preferences.",
						},
						{
							name: "Emily T.",
							location: "Atlanta",
							text: "As a first-time boat owner, I was nervous about maintenance, but Impact Marine's service team has been incredible. They're always willing to explain procedures and offer advice on keeping my boat in top shape. Their preventative maintenance program has saved me from potential issues and given me confidence in my boat's reliability.",
						},
					],
					fields: [
						{
							name: "name",
							type: "text",
							required: true,
						},
						{
							name: "location",
							type: "text",
							required: true,
						},
						{
							name: "text",
							type: "textarea",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "contactSection",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Contact Us",
				},
				{
					name: "subtitle",
					type: "text",
					required: true,
					defaultValue: "We're here to assist you with all your boating needs",
				},
				{
					name: "address",
					type: "text",
					required: true,
					defaultValue: "5185 Browns Bridge Rd, Cumming, GA 30041",
				},
				{
					name: "hours",
					type: "array",
					required: true,
					defaultValue: [{ text: "Monday - Friday: 9AM-6PM" }, { text: "Saturday: 10AM-4PM" }, { text: "Sunday: Closed" }],
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "phones",
					type: "array",
					required: true,
					defaultValue: [
						{ label: "Sales", number: "(770) 881-7808" },
						{ label: "Service", number: "(770) 881-7809" },
					],
					fields: [
						{
							name: "label",
							type: "text",
							required: true,
						},
						{
							name: "number",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "emails",
					type: "array",
					required: true,
					defaultValue: [{ email: "sales@impactmarinegroup.com" }, { email: "service@impactmarinegroup.com" }],
					fields: [
						{
							name: "email",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "areasServed",
					type: "array",
					required: true,
					defaultValue: [{ area: "Lake Lanier" }, { area: "Lake Allatoona" }, { area: "Lake Burton" }, { area: "Lake Sinclair" }, { area: "Lake Hartwell" }, { area: "All Georgia Lakes" }],
					fields: [
						{
							name: "area",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "mapImage",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "ctaTitle",
					type: "text",
					required: true,
					defaultValue: "Get in Touch",
				},
				{
					name: "ctaDescription",
					type: "text",
					required: true,
					defaultValue: "Have a question or ready to start your boating journey? Reach out to our team for personalized assistance.",
				},
				{
					name: "ctaButtonText",
					type: "text",
					required: true,
					defaultValue: "Contact Us Now",
				},
			],
		},
	],
};

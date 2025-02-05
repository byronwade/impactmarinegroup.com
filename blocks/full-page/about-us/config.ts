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

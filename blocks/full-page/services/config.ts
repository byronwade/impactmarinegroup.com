import type { Block } from "payload/types";

export const servicesPageBlock: Block = {
	slug: "servicesPage",
	labels: {
		singular: "Services Page Block",
		plural: "Services Page Blocks",
	},
	admin: {
		group: "Full Page Blocks",
		description: "A full-page services section with service offerings and policies",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Impact Marine Group Service Center",
		},
		{
			name: "subtitle",
			type: "text",
			required: true,
			defaultValue: "Expert marine services on Lake Lanier and beyond. We're boaters too, and we know how important it is to have your boat running right while keeping it affordable.",
		},
		{
			name: "phoneNumber",
			type: "text",
			required: true,
			defaultValue: "770-881-7808",
		},
		{
			name: "services",
			type: "array",
			required: true,
			defaultValue: [
				{
					icon: "Wrench",
					title: "Comprehensive Engine Service",
					description: "Our Lead Techs have extensive experience with I/O, Inboard, and PWC engines. We're certified by leading manufacturers including Yamaha and Indmar Marine Engines, supporting our Tige boater community.",
				},
				{
					icon: "Anchor",
					title: "Repairs & Troubleshooting",
					description: "From simple maintenance to comprehensive engine repair, our 10,000 sq ft shop is equipped to handle all your boating needs.",
				},
				{
					icon: "Snowflake",
					title: "Winterization Services",
					description: "Protect your investment during the off-season with our thorough winterization services. We offer several packages to fit your boat's needs, ensuring it's ready to launch when spring arrives.",
				},
				{
					icon: "Music",
					title: "Audio & Lighting Installation",
					description: "Upgrade your boat with the latest audio systems and LED lighting. Our technicians are skilled in installing and configuring a wide range of devices to enhance your boating experience.",
				},
				{
					icon: "Sun",
					title: "Gel Coat & Fiberglass Repair",
					description: "Keep your boat looking its best with our expert gel coat and fiberglass repair services. We restore damage and maintain the pristine appearance of your vessel.",
				},
				{
					icon: "Zap",
					title: "Wake Boat Performance",
					description: "We specialize in wake boat performance enhancements, including surf systems and ballast installation. Maximize your wake for the ultimate riding experience.",
				},
				{
					icon: "Users",
					title: "On-Dock Lake Service",
					description: "We offer on-dock lake service for inboard and I/O boats. We also provide free pickup from nearby ramps and storage locations for your convenience.",
				},
				{
					icon: "Shield",
					title: "Parts & Accessories",
					description: "Access our complete catalog of marine supplies, parts, and accessories. From ropes and bumpers to cleaners and waxes, we likely have what you need with next-day delivery for orders placed before 4 PM.",
				},
			],
			fields: [
				{
					name: "icon",
					type: "select",
					required: true,
					options: [
						{ label: "Wrench", value: "Wrench" },
						{ label: "Anchor", value: "Anchor" },
						{ label: "Snowflake", value: "Snowflake" },
						{ label: "Music", value: "Music" },
						{ label: "Sun", value: "Sun" },
						{ label: "Zap", value: "Zap" },
						{ label: "Users", value: "Users" },
						{ label: "Shield", value: "Shield" },
					],
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
		{
			name: "reasons",
			type: "array",
			required: true,
			defaultValue: [{ text: "Over 10,000 sq ft of fully equipped shop space" }, { text: "Certified technicians with extensive experience" }, { text: "Authorized Indmar and Yamaha Outboards service center" }, { text: "Serving Lake Lanier, Lake Allatoona, Lake Burton, and more" }, { text: "On-dock lake service and free local pickup available" }, { text: "Comprehensive parts catalog with quick delivery" }],
			fields: [
				{
					name: "text",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "reasonsImage",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "winterizationPackages",
			type: "array",
			required: true,
			defaultValue: [
				{
					title: "Winterization Station",
					description: "While You Wait or Same Day Pick Up – Complete Protection with the convenience of Same Day Service",
					services: ["Draining Water", "Anti-Freeze throughout system", "Fogging Oil", "Fuel Stabilizer"],
					price: "$229",
					note: "Up to 3 gallons of anti-freeze – additional may incur additional fee",
				},
				{
					title: "Winterization - Drop Off Only",
					description: "Complete Protection – Your boat will be ready to go in the spring",
					services: ["Draining Water", "Anti-Freeze throughout engine", "Fogging Oil", "Fuel Stabilizer"],
					price: "$199",
					note: "Up to 3 gallons of anti-freeze – additional may incur additional fee",
				},
				{
					title: "Winterize and Oil Change Special",
					description: "Protect for the winter and be ready for spring!",
					services: ["Complete winterization", "Complete Oil Change"],
					price: "$399",
					note: "Up to 6 quarts of standard oil and filter – additional may incur additional fee",
				},
			],
			fields: [
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
				{
					name: "services",
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
					name: "price",
					type: "text",
					required: true,
				},
				{
					name: "note",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "servicePolicies",
			type: "array",
			required: true,
			defaultValue: [
				{ text: "Leave your keys in the ignition" },
				{ text: "Provide us with your current engine hours" },
				{ text: "Cover your boat or we'll assume you prefer it uncovered" },
				{ text: "Remove personal items to keep labor costs down" },
				{ text: "Invoices must be paid before boat can be released" },
				{ text: "Pick up vessels within 3 days of completion to avoid storage fees" },
				{ text: "Parts over $300 or non-returnable parts require a deposit" },
				{ text: "Remote services must be paid for in advance" },
			],
			fields: [
				{
					name: "text",
					type: "text",
					required: true,
				},
			],
		},
	],
};

import type { Block } from "payload/types";

export const contactBlock: Block = {
	slug: "contact",
	labels: {
		singular: "Contact Block",
		plural: "Contact Blocks",
	},
	admin: {
		group: "Full Page Blocks",
		description: "A full-page contact form with location and business information",
	},
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
};

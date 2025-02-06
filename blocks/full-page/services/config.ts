import type { Block } from "payload/types";

export const servicesPageBlock: Block = {
	slug: "services",
	labels: {
		singular: "Services Page Block",
		plural: "Services Page Blocks",
	},
	admin: {
		group: "Full Page Blocks",
		description: "A full-page services section that displays your service offerings",
	},
	fields: [
		{
			name: "blockType",
			type: "text",
			required: true,
			defaultValue: "services",
			admin: {
				hidden: true,
			},
		},
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
			name: "featuredServices",
			type: "relationship",
			relationTo: "services",
			hasMany: true,
			required: true,
			filterOptions: {
				featured: { equals: true },
			},
			admin: {
				description: "Select featured services to highlight at the top of the page",
			},
		},
		{
			name: "maintenanceServices",
			type: "relationship",
			relationTo: "services",
			hasMany: true,
			required: true,
			filterOptions: {
				category: { equals: "maintenance" },
			},
			admin: {
				description: "Select maintenance and repair services",
			},
		},
		{
			name: "upgradeServices",
			type: "relationship",
			relationTo: "services",
			hasMany: true,
			required: true,
			filterOptions: {
				category: { equals: "upgrade" },
			},
			admin: {
				description: "Select upgrade and enhancement services",
			},
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
			type: "relationship",
			relationTo: "services",
			hasMany: true,
			required: true,
			filterOptions: {
				category: { equals: "winterization" },
			},
			admin: {
				description: "Select winterization service packages",
			},
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

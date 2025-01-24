import type { Block } from "payload";

export const heroBlock: Block = {
	slug: "hero",
	labels: {
		singular: "Hero Block",
		plural: "Hero Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Welcome to Impact Marine Group",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Your premier destination for boats and marine services in Lake Lanier",
		},
		{
			name: "primaryCta",
			type: "group",
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
					defaultValue: "View Boats",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/boats",
				},
			],
		},
		{
			name: "secondaryCta",
			type: "group",
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
					defaultValue: "Our Services",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/services",
				},
			],
		},
	],
};

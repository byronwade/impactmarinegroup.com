import type { Block } from "payload";

export const servicesBlock: Block = {
	slug: "services",
	labels: {
		singular: "Services Block",
		plural: "Services Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Our Services",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Professional marine services to keep your boat in top condition",
		},
		{
			name: "services",
			type: "relationship",
			relationTo: "services",
			hasMany: true,
			required: true,
			filterOptions: {
				featured: { equals: true },
			},
		},
		{
			name: "cta",
			type: "group",
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
					defaultValue: "View All Services",
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

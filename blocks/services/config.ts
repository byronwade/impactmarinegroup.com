import type { Block } from "payload/types";

export const servicesBlock: Block = {
	slug: "services_section",
	labels: {
		singular: "Services Section Block",
		plural: "Services Section Blocks",
	},
	admin: {
		group: "Section Blocks",
		description: "A section displaying service offerings",
	},
	fields: [
		{
			name: "blockType",
			type: "text",
			required: true,
			defaultValue: "services_section",
			admin: {
				hidden: true,
			},
		},
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Our Services",
		},
		{
			name: "description",
			type: "text",
			required: true,
			defaultValue: "Discover our comprehensive range of marine services",
		},
		{
			name: "services",
			type: "relationship",
			relationTo: "services",
			hasMany: true,
			required: true,
		},
		{
			name: "cta",
			type: "group",
			required: true,
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

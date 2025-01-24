import type { Block } from "payload";

export const fleetBlock: Block = {
	slug: "fleet",
	labels: {
		singular: "Fleet Block",
		plural: "Fleet Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Our Fleet",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Explore our selection of premium boats available for sale",
		},
		{
			name: "boats",
			type: "relationship",
			relationTo: "boats",
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
					defaultValue: "View All Boats",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/boats",
				},
			],
		},
	],
};

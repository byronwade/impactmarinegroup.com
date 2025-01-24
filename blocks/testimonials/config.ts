import type { Block } from "payload";

export const testimonialsBlock: Block = {
	slug: "testimonials",
	labels: {
		singular: "Testimonials Block",
		plural: "Testimonials Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "What Our Customers Say",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Read what our satisfied customers have to say about their experience with us",
		},
		{
			name: "testimonials",
			type: "relationship",
			relationTo: "testimonials",
			hasMany: true,
			required: true,
			filterOptions: {
				featured: { equals: true },
			},
		},
	],
};

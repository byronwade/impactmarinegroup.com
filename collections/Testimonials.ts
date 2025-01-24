import { CollectionConfig } from "payload/types";

export const Testimonials: CollectionConfig = {
	slug: "testimonials",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "rating", "updatedAt"],
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "text",
			type: "textarea",
			required: true,
		},
		{
			name: "rating",
			type: "number",
			required: true,
			min: 1,
			max: 5,
			defaultValue: 5,
		},
		{
			name: "position",
			type: "text",
			label: "Job Title or Position",
		},
		{
			name: "company",
			type: "text",
		},
		{
			name: "featured",
			type: "checkbox",
			defaultValue: false,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "avatar",
			type: "upload",
			relationTo: "media",
			admin: {
				description: "Optional profile picture",
			},
		},
	],
};

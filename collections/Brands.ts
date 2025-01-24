import { CollectionConfig } from "payload/types";

export const Brands: CollectionConfig = {
	slug: "brands",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "featured", "updatedAt"],
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
		},
		{
			name: "logo",
			type: "upload",
			relationTo: "media",
			required: false,
			admin: {
				description: "Brand logo (preferably SVG or PNG with transparent background)",
			},
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
			name: "website",
			type: "text",
			admin: {
				description: "Official brand website URL",
			},
		},
		{
			name: "models",
			type: "array",
			admin: {
				description: "List of boat models from this brand",
			},
			fields: [
				{
					name: "name",
					type: "text",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
				},
				{
					name: "specs",
					type: "group",
					fields: [
						{
							name: "length",
							type: "text",
						},
						{
							name: "beam",
							type: "text",
						},
						{
							name: "capacity",
							type: "text",
						},
						{
							name: "weight",
							type: "text",
						},
					],
				},
			],
		},
	],
};

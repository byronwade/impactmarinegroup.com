import { CollectionConfig } from "payload/types";

export const Services: CollectionConfig = {
	slug: "services",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "featured", "updatedAt"],
	},
	fields: [
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
		{
			name: "icon",
			type: "text",
			admin: {
				description: "Lucide icon name (e.g., 'Wrench', 'Anchor', etc.)",
			},
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			admin: {
				description: "Service image",
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
			name: "price",
			type: "group",
			fields: [
				{
					name: "startingAt",
					type: "number",
					admin: {
						description: "Starting price for this service",
					},
				},
				{
					name: "unit",
					type: "select",
					options: [
						{
							label: "Per Hour",
							value: "hour",
						},
						{
							label: "Per Service",
							value: "service",
						},
						{
							label: "Per Day",
							value: "day",
						},
					],
				},
			],
		},
		{
			name: "details",
			type: "array",
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
				},
				{
					name: "icon",
					type: "text",
					admin: {
						description: "Lucide icon name",
					},
				},
			],
		},
		{
			name: "faqs",
			type: "array",
			fields: [
				{
					name: "question",
					type: "text",
					required: true,
				},
				{
					name: "answer",
					type: "textarea",
					required: true,
				},
			],
		},
		{
			name: "callToAction",
			type: "group",
			fields: [
				{
					name: "title",
					type: "text",
				},
				{
					name: "description",
					type: "textarea",
				},
				{
					name: "buttonText",
					type: "text",
				},
				{
					name: "buttonLink",
					type: "text",
				},
			],
		},
	],
};

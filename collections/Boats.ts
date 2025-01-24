import { CollectionConfig } from "payload/types";

export const Boats: CollectionConfig = {
	slug: "boats",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "manufacturer", "model", "price", "status"],
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "manufacturer",
			type: "text",
			required: true,
		},
		{
			name: "model",
			type: "text",
			required: true,
		},
		{
			name: "trim",
			type: "text",
		},
		{
			name: "modelYear",
			type: "number",
		},
		{
			name: "condition",
			type: "select",
			options: [
				{ label: "New", value: "new" },
				{ label: "Used", value: "used" },
			],
		},
		{
			name: "status",
			type: "select",
			options: [
				{ label: "Available", value: "available" },
				{ label: "Sold", value: "sold" },
				{ label: "On Hold", value: "on-hold" },
			],
		},
		{
			name: "price",
			type: "number",
			required: true,
		},
		{
			name: "listPrice",
			type: "number",
		},
		{
			name: "description",
			type: "richText",
			required: true,
		},
		{
			name: "mainImage",
			type: "upload",
			relationTo: "media",
			required: false,
		},
		{
			name: "gallery",
			type: "array",
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
			],
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
					name: "capacity",
					type: "text",
				},
				{
					name: "speed",
					type: "text",
				},
				// Add more spec fields as needed
			],
		},
		{
			name: "available",
			type: "checkbox",
			defaultValue: true,
		},
		{
			name: "stockNumber",
			type: "text",
		},
		{
			name: "category",
			type: "text",
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
			admin: {
				position: "sidebar",
			},
		},
	],
};

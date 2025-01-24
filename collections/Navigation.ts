import { CollectionConfig } from "payload";

export const Navigation: CollectionConfig = {
	slug: "navigation",
	admin: {
		useAsTitle: "name",
		group: "Content",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "location",
			type: "select",
			required: true,
			options: [
				{
					label: "Header",
					value: "header",
				},
				{
					label: "Footer",
					value: "footer",
				},
			],
		},
		{
			name: "items",
			type: "array",
			required: true,
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
				},
				{
					name: "link",
					type: "text",
					required: true,
				},
				{
					name: "subItems",
					type: "array",
					fields: [
						{
							name: "label",
							type: "text",
							required: true,
						},
						{
							name: "link",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
	],
};

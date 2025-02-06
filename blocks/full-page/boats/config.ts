import type { Block } from "payload/types";

export const boatsBlock: Block = {
	slug: "boats",
	labels: {
		singular: "Boats Block",
		plural: "Boats Blocks",
	},
	admin: {
		group: "Full Page Blocks",
		description: "A full-page boats inventory section with search and filters",
	},
	fields: [
		{
			name: "blockType",
			type: "text",
			required: true,
			defaultValue: "boats",
			admin: {
				hidden: true,
			},
		},
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Our Boat Inventory",
		},
		{
			name: "boats",
			type: "array",
			required: true,
			defaultValue: [
				{
					id: "10192803367",
					name: "Sea Fox 288 Commander",
					manufacturer: "Sea Fox",
					model: "288 Commander",
					year: 2023,
					type: "Center Console",
					price: 189000,
					status: "Available",
					condition: "NEW",
				},
				{
					id: "10192803368",
					name: "Sweetwater 2286 SB",
					manufacturer: "Sweetwater",
					model: "2286 SB",
					year: 2021,
					type: "Pontoon",
					price: 45000,
					status: "Available",
					condition: "USED",
				},
				{
					id: "10192803369",
					name: "Sea Fox 328 Commander",
					manufacturer: "Sea Fox",
					model: "328 Commander",
					year: 2024,
					type: "Center Console",
					price: 259000,
					status: "On Order",
					condition: "NEW",
				},
				{
					id: "10192803370",
					name: "Sweetwater 2486 SB",
					manufacturer: "Sweetwater",
					model: "2486 SB",
					year: 2020,
					type: "Pontoon",
					price: 55000,
					status: "Sold",
					condition: "USED",
				},
				{
					id: "10192803371",
					name: "Sea Fox 268 Commander",
					manufacturer: "Sea Fox",
					model: "268 Commander",
					year: 2023,
					type: "Center Console",
					price: 159000,
					status: "Available",
					condition: "NEW",
				},
				{
					id: "10192803372",
					name: "Sweetwater 2386 SB",
					manufacturer: "Sweetwater",
					model: "2386 SB",
					year: 2022,
					type: "Pontoon",
					price: 50000,
					status: "Available",
					condition: "USED",
				},
			],
			fields: [
				{
					name: "id",
					type: "text",
					required: true,
				},
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
					name: "year",
					type: "number",
					required: true,
				},
				{
					name: "type",
					type: "text",
					required: true,
				},
				{
					name: "price",
					type: "number",
					required: true,
				},
				{
					name: "status",
					type: "select",
					required: true,
					options: [
						{ label: "Available", value: "Available" },
						{ label: "On Order", value: "On Order" },
						{ label: "Sold", value: "Sold" },
					],
				},
				{
					name: "condition",
					type: "select",
					required: true,
					options: [
						{ label: "New", value: "NEW" },
						{ label: "Used", value: "USED" },
					],
				},
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					required: false,
				},
				{
					name: "features",
					type: "array",
					required: false,
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "specifications",
					type: "array",
					required: false,
					fields: [
						{
							name: "label",
							type: "text",
							required: true,
						},
						{
							name: "value",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "manufacturers",
			type: "array",
			required: true,
			defaultValue: [
				{ name: "Sea Fox", value: "Sea Fox" },
				{ name: "Sweetwater", value: "Sweetwater" },
			],
			fields: [
				{
					name: "name",
					type: "text",
					required: true,
				},
				{
					name: "value",
					type: "text",
					required: true,
				},
			],
		},
	],
};

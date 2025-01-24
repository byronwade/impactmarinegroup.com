import { CollectionConfig } from "payload/types";

export const Settings: CollectionConfig = {
	slug: "settings",
	admin: {
		useAsTitle: "siteName",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "siteName",
			type: "text",
			required: true,
		},
		{
			name: "companyName",
			type: "text",
			required: true,
		},
		{
			name: "phoneNumber",
			type: "text",
			required: true,
		},
		{
			name: "email",
			type: "text",
			required: true,
		},
		{
			name: "logo",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "address",
			type: "group",
			fields: [
				{
					name: "street",
					type: "text",
					required: true,
				},
				{
					name: "city",
					type: "text",
					required: true,
				},
				{
					name: "state",
					type: "text",
					required: true,
				},
				{
					name: "zip",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "socialMedia",
			type: "array",
			fields: [
				{
					name: "platform",
					type: "text",
					required: true,
				},
				{
					name: "url",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "navigation",
			type: "group",
			fields: [
				{
					name: "header",
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
						{
							name: "order",
							type: "number",
							required: true,
						},
					],
				},
				{
					name: "footer",
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
						{
							name: "order",
							type: "number",
							required: true,
						},
					],
				},
			],
		},
	],
};

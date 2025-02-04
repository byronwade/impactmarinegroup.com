import type { Block } from "payload/types";

export const aboutBlock: Block = {
	slug: "about",
	labels: {
		singular: "About Block",
		plural: "About Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "About Impact Marine Group",
		},
		{
			name: "content",
			type: "array",
			required: true,
			minRows: 1,
			defaultValue: [
				{
					paragraph: "Impact Marine Group is more than just a boat dealership – we're your gateway to unforgettable aquatic adventures. Founded by passionate boating enthusiasts, our mission is to provide unparalleled service and top-quality marine products to both seasoned sailors and newcomers to the boating world.",
				},
				{
					paragraph: "Located at 5185 Browns Bridge Rd, our state-of-the-art facility is a testament to our commitment to excellence. We've created a space where customers can explore, learn, and find the perfect vessel for their needs.",
				},
			],
			fields: [
				{
					name: "paragraph",
					type: "textarea",
					required: true,
				},
			],
			admin: {
				initCollapsed: false,
			},
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "features",
			type: "array",
			required: true,
			minRows: 1,
			maxRows: 2,
			defaultValue: [
				{
					icon: "users",
					title: "Expert Team",
					description: "Knowledgeable staff with years of boating experience",
				},
				{
					icon: "zap",
					title: "Top Brands",
					description: "Curated selection of premium marine products",
				},
			],
			fields: [
				{
					name: "icon",
					type: "select",
					required: true,
					options: [
						{ label: "Users", value: "users" },
						{ label: "Zap", value: "zap" },
					],
				},
				{
					name: "title",
					type: "text",
					required: true,
				},
				{
					name: "description",
					type: "text",
					required: true,
				},
			],
			admin: {
				initCollapsed: false,
			},
		},
	],
};

import type { Block } from "payload";

export const contentBlock: Block = {
	slug: "content",
	labels: {
		singular: "Content Block",
		plural: "Content Blocks",
	},
	fields: [
		{
			name: "content",
			type: "richText",
			required: true,
		},
	],
};

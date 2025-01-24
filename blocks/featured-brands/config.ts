import type { Block } from "payload";

export const featuredBrandsBlock: Block = {
	slug: "featuredBrands",
	labels: {
		singular: "Featured Brands Block",
		plural: "Featured Brands Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Our Featured Brands",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Discover our curated selection of premium boat brands",
		},
		{
			name: "brands",
			type: "relationship",
			relationTo: "brands",
			hasMany: true,
			required: true,
			filterOptions: {
				featured: { equals: true },
			},
		},
	],
};

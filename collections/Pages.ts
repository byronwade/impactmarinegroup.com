import { CollectionConfig } from "payload";
import { heroBlock } from "../blocks/hero/config";
import { featuredBrandsBlock } from "../blocks/featured-brands/config";
import { fleetBlock } from "../blocks/fleet/config";
import { servicesBlock } from "../blocks/services/config";
import { testimonialsBlock } from "../blocks/testimonials/config";
import { contentBlock } from "../blocks/content/config";

export const Pages: CollectionConfig = {
	slug: "pages",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "updatedAt"],
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "isHomePage",
			type: "checkbox",
			defaultValue: false,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "content",
			type: "blocks",
			blocks: [heroBlock, featuredBrandsBlock, fleetBlock, servicesBlock, testimonialsBlock, contentBlock],
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
		{
			name: "seo",
			type: "group",
			fields: [
				{
					name: "metaDescription",
					type: "textarea",
				},
				{
					name: "ogTitle",
					type: "text",
				},
				{
					name: "ogDescription",
					type: "textarea",
				},
				{
					name: "ogImage",
					type: "upload",
					relationTo: "media",
				},
			],
		},
	],
};

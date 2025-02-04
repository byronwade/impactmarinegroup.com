import { CollectionConfig } from "payload/types";
import { heroBlock } from "../blocks/hero/config";
import { featuredBrandsBlock } from "../blocks/featured-brands/config";
import { fleetBlock } from "../blocks/fleet/config";
import { servicesBlock } from "../blocks/services/config";
import { testimonialsBlock } from "../blocks/testimonials/config";
import { contentBlock } from "../blocks/content/config";
import { aboutBlock } from "../blocks/about/config";
import { brandsBlock } from "../blocks/brands/config";
import { contactBlock } from "../blocks/full-page/contact/config";

export const Pages: CollectionConfig = {
	slug: "pages",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "updatedAt"],
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
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
			required: false,
			interfaceName: "PageBlocks",
			blocks: [
				{
					...contactBlock,
					labels: {
						...contactBlock.labels,
						singular: "📄 Contact Page",
						plural: "📄 Contact Pages",
					},
				},
				{
					...heroBlock,
					labels: {
						...heroBlock.labels,
						singular: "🔲 Hero Section",
						plural: "🔲 Hero Sections",
					},
				},
				{
					...featuredBrandsBlock,
					labels: {
						...featuredBrandsBlock.labels,
						singular: "🔲 Featured Brands Section",
						plural: "🔲 Featured Brands Sections",
					},
				},
				{
					...fleetBlock,
					labels: {
						...fleetBlock.labels,
						singular: "🔲 Fleet Section",
						plural: "🔲 Fleet Sections",
					},
				},
				{
					...servicesBlock,
					labels: {
						...servicesBlock.labels,
						singular: "🔲 Services Section",
						plural: "🔲 Services Sections",
					},
				},
				{
					...testimonialsBlock,
					labels: {
						...testimonialsBlock.labels,
						singular: "🔲 Testimonials Section",
						plural: "🔲 Testimonials Sections",
					},
				},
				{
					...contentBlock,
					labels: {
						...contentBlock.labels,
						singular: "🔲 Content Section",
						plural: "🔲 Content Sections",
					},
				},
				{
					...aboutBlock,
					labels: {
						...aboutBlock.labels,
						singular: "🔲 About Section",
						plural: "🔲 About Sections",
					},
				},
				{
					...brandsBlock,
					labels: {
						...brandsBlock.labels,
						singular: "🔲 Brands Section",
						plural: "🔲 Brands Sections",
					},
				},
			],
			admin: {
				initCollapsed: false,
				description: "📄 Full-page blocks are marked with a page icon. 🔲 Section blocks are marked with a square icon.",
			},
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
	hooks: {
		beforeChange: [
			({ data }) => {
				// Log the data being saved
				console.log("Saving page data:", JSON.stringify(data, null, 2));
				return data;
			},
		],
		afterRead: [
			({ doc }) => {
				// Log the data being read
				console.log("Reading page data:", JSON.stringify(doc, null, 2));
				return doc;
			},
		],
	},
};

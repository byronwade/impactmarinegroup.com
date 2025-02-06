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
import { financingBlock } from "../blocks/full-page/financing/config";
import { servicesPageBlock } from "../blocks/full-page/services/config";
import { aboutUsBlock } from "../blocks/full-page/about-us/config";

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
					...financingBlock,
					labels: {
						...financingBlock.labels,
						singular: "📄 Financing Page",
						plural: "📄 Financing Pages",
					},
				},
				{
					...servicesPageBlock,
					labels: {
						...servicesPageBlock.labels,
						singular: "📄 Services Page",
						plural: "📄 Services Pages",
					},
				},
				{
					...aboutUsBlock,
					labels: {
						...aboutUsBlock.labels,
						singular: "📄 About Us Page",
						plural: "📄 About Us Pages",
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
				{
					slug: "boats",
					interfaceName: "BoatsBlock",
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
						},
						{
							name: "boats",
							type: "array",
							required: true,
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
									name: "year",
									type: "number",
									required: true,
									min: 1900,
									max: new Date().getFullYear() + 1,
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
									min: 0,
								},
								{
									name: "status",
									type: "select",
									required: true,
									options: [
										{ label: "In Stock", value: "IN_STOCK" },
										{ label: "On Order", value: "ON_ORDER" },
										{ label: "Sold", value: "SOLD" },
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
									type: "richText",
								},
								{
									name: "features",
									type: "array",
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
			({ data }: { data: any }) => {
				// Log the data being saved
				console.log("Saving page data:", JSON.stringify(data, null, 2));
				return data;
			},
		],
		afterRead: [
			({ doc }: { doc: any }) => {
				// Log the data being read
				console.log("Reading page data:", JSON.stringify(doc, null, 2));
				return doc;
			},
		],
	},
};

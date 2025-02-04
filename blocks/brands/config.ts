import type { Block } from "payload/types";

export const brandsBlock: Block = {
	slug: "brands",
	labels: {
		singular: "Brands Block",
		plural: "Brands Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Our Premium Brands",
		},
		{
			name: "subtitle",
			type: "text",
			required: true,
			defaultValue: "Discover the finest names in the marine industry",
		},
		{
			name: "brands",
			type: "array",
			required: true,
			defaultValue: [
				{
					name: "Sea Fox Boat Company",
					description: "Sea Fox Boat Company stands at the forefront of marine innovation, crafting vessels that seamlessly blend luxury, performance, and durability. With a clear mission to provide quality, hand-crafted saltwater boats, Sea Fox offers a range of models that cater to diverse boating needs and preferences.",
					features: [{ text: "Premium-grade materials for lasting durability" }, { text: "State-of-the-art navigation and fish-finding technology" }, { text: "Ergonomic designs for maximum comfort and functionality" }, { text: "Powered by reliable Yamaha Outboards for optimal performance" }, { text: "Industry-leading warranty for peace of mind" }],
					popularModels: [{ model: "Sea Fox 288 Commander" }, { model: "Sea Fox 249 Avenger" }, { model: "Sea Fox 226 Traveler" }, { model: "Sea Fox 328 Commander" }],
				},
			],
			fields: [
				{
					name: "name",
					type: "text",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					required: true,
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
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "popularModels",
					type: "array",
					fields: [
						{
							name: "model",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
	],
};

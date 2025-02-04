import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	upload: {
		staticURL: "/media",
		staticDir: "media",
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "centre",
			},
			{
				name: "card",
				width: 768,
				height: 1024,
				position: "centre",
			},
			{
				name: "desktop",
				width: 1920,
				height: 1080,
				position: "centre",
			},
		],
		mimeTypes: ["image/*", "video/*"],
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
		{
			name: "caption",
			type: "text",
		},
	],
};

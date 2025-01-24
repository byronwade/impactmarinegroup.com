import type { Block } from "payload";

export const heroBlock: Block = {
	slug: "hero",
	labels: {
		singular: "Hero Block",
		plural: "Hero Blocks",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Expert Boat Service You Can Trust",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			defaultValue: "Certified Technicians, Fast Turnaround, and Unmatched Care for Your Boat.",
		},
		{
			name: "phoneNumber",
			type: "text",
			label: "Phone Number",
			defaultValue: "(555) 123-4567",
		},
		{
			name: "rating",
			type: "group",
			label: "Rating Badge",
			fields: [
				{
					name: "value",
					type: "number",
					required: true,
					min: 0,
					max: 5,
					defaultValue: 4.9,
				},
				{
					name: "text",
					type: "text",
					required: true,
					defaultValue: "4.9 Star Rated",
				},
			],
		},
		{
			name: "backgroundImage",
			type: "upload",
			relationTo: "media",
			label: "Background Image",
			admin: {
				description: "Recommended size: 1920x1080px",
			},
		},
		{
			name: "backgroundVideo",
			type: "upload",
			relationTo: "media",
			label: "Background Video",
			admin: {
				description: "MP4 format recommended. Will fallback to background image if video cannot be played.",
			},
			filterOptions: {
				mimeType: { contains: "video" },
			},
		},
		{
			name: "primaryCta",
			type: "group",
			label: "Primary Call to Action",
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
					defaultValue: "Schedule Service",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/schedule",
				},
				{
					name: "icon",
					type: "select",
					options: [
						{
							label: "Calendar",
							value: "calendar",
						},
						{
							label: "None",
							value: "none",
						},
					],
					defaultValue: "calendar",
				},
			],
		},
		{
			name: "secondaryCta",
			type: "group",
			label: "Secondary Call to Action",
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
					defaultValue: "View Our Services",
				},
				{
					name: "link",
					type: "text",
					required: true,
					defaultValue: "/services",
				},
				{
					name: "icon",
					type: "select",
					options: [
						{
							label: "Chevron Right",
							value: "chevron-right",
						},
						{
							label: "None",
							value: "none",
						},
					],
					defaultValue: "chevron-right",
				},
			],
		},
	],
};

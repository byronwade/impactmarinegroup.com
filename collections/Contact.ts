import { CollectionConfig } from "payload/types";

export const Contact: CollectionConfig = {
	slug: "contact",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "email", "subject", "createdAt"],
	},
	access: {
		create: () => true,
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "email",
			type: "email",
			required: true,
		},
		{
			name: "phone",
			type: "text",
		},
		{
			name: "subject",
			type: "select",
			required: true,
			options: [
				{
					label: "General Inquiry",
					value: "general",
				},
				{
					label: "Service Request",
					value: "service",
				},
				{
					label: "Boat Purchase",
					value: "purchase",
				},
				{
					label: "Boat Sale",
					value: "sale",
				},
				{
					label: "Other",
					value: "other",
				},
			],
		},
		{
			name: "message",
			type: "textarea",
			required: true,
		},
		{
			name: "relatedBoat",
			type: "relationship",
			relationTo: "boats",
			hasMany: false,
			admin: {
				description: "Select a boat if this inquiry is about a specific listing",
			},
		},
		{
			name: "relatedService",
			type: "relationship",
			relationTo: "services",
			hasMany: false,
			admin: {
				description: "Select a service if this inquiry is about a specific service",
			},
		},
		{
			name: "status",
			type: "select",
			defaultValue: "new",
			options: [
				{
					label: "New",
					value: "new",
				},
				{
					label: "In Progress",
					value: "in-progress",
				},
				{
					label: "Completed",
					value: "completed",
				},
				{
					label: "Archived",
					value: "archived",
				},
			],
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "notes",
			type: "textarea",
			admin: {
				description: "Internal notes about this inquiry",
				position: "sidebar",
			},
		},
	],
	timestamps: true,
};

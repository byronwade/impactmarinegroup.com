import type { Block } from "payload/types";

export const financingBlock: Block = {
	slug: "financing",
	labels: {
		singular: "Financing Block",
		plural: "Financing Blocks",
	},
	admin: {
		group: "Full Page Blocks",
		description: "A full-page financing section with loan calculator and options",
	},
	fields: [
		{
			name: "blockType",
			type: "text",
			required: true,
			defaultValue: "financing",
			admin: {
				hidden: true,
			},
		},
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: "Financing Options",
		},
		{
			name: "subtitle",
			type: "text",
			required: true,
			defaultValue: "Flexible financing solutions for your dream boat and expert service work",
		},
		{
			name: "boatFinancing",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Boat Financing",
				},
				{
					name: "description",
					type: "text",
					required: true,
					defaultValue: "Find the perfect loan for your new or used boat",
				},
				{
					name: "features",
					type: "array",
					required: true,
					defaultValue: [{ text: "Competitive interest rates" }, { text: "Flexible terms up to 20 years" }, { text: "Financing available for boats up to $5 million" }, { text: "Quick and easy application process" }],
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "serviceFinancing",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Service Financing",
				},
				{
					name: "description",
					type: "text",
					required: true,
					defaultValue: "Affordable options for repairs and maintenance",
				},
				{
					name: "features",
					type: "array",
					required: true,
					defaultValue: [{ text: "0% interest for 12 months on services over $2,000" }, { text: "Low monthly payments" }, { text: "Cover unexpected repairs or planned upgrades" }, { text: "Quick approval process" }],
					fields: [
						{
							name: "text",
							type: "text",
							required: true,
						},
					],
				},
			],
		},
		{
			name: "calculator",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Loan Calculator",
				},
				{
					name: "defaultAmount",
					type: "number",
					required: true,
					defaultValue: 50000,
				},
				{
					name: "defaultRate",
					type: "number",
					required: true,
					defaultValue: 5,
				},
				{
					name: "defaultTerm",
					type: "number",
					required: true,
					defaultValue: 60,
				},
				{
					name: "phoneNumber",
					type: "text",
					required: true,
					defaultValue: "(770) 881-7808",
				},
			],
		},
		{
			name: "faq",
			type: "array",
			required: true,
			defaultValue: [
				{
					question: "What credit score do I need to qualify?",
					answer: "While we consider various factors, a credit score of 640 or higher typically results in the best rates and terms. However, we offer options for a wide range of credit profiles.",
				},
				{
					question: "How long does the approval process take?",
					answer: "Our streamlined process often provides a decision within 24-48 hours of receiving a completed application.",
				},
				{
					question: "Can I finance both new and used boats?",
					answer: "Yes, we offer financing options for both new and used boats, as well as refinancing for your current boat.",
				},
				{
					question: "Is there a minimum or maximum loan amount?",
					answer: "We offer financing from $5,000 up to $5 million, accommodating a wide range of boats and budgets.",
				},
			],
			fields: [
				{
					name: "question",
					type: "text",
					required: true,
				},
				{
					name: "answer",
					type: "textarea",
					required: true,
				},
			],
		},
		{
			name: "cta",
			type: "group",
			required: true,
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
					defaultValue: "Ready to Get Started?",
				},
				{
					name: "description",
					type: "text",
					required: true,
					defaultValue: "Our financing experts are here to help you navigate your options and find the best solution for your needs.",
				},
				{
					name: "phoneNumber",
					type: "text",
					required: true,
					defaultValue: "(770) 881-7808",
				},
			],
		},
	],
};

import dotenv from "dotenv";
import path from "path";
import { getPayloadClient } from "../payload/payloadClient";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

async function seed() {
	const payload = await getPayloadClient();

	// Delete all existing data
	const collections = ["pages", "boats", "brands", "services", "testimonials", "settings", "media", "navigation"];
	for (const collection of collections) {
		try {
			const existingDocs = await payload.find({ collection, limit: 100 });
			const ids = existingDocs.docs.map((doc) => doc.id);
			for (const id of ids) {
				await payload.delete({ collection, id });
			}
			console.log(`✅ Deleted existing ${collection}`);
		} catch (err) {
			console.log(`Error deleting ${collection}:`, err);
		}
	}

	// Create default navigation
	await payload.create({
		collection: "navigation",
		data: {
			name: "Header Navigation",
			location: "header",
			items: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "About Us",
					link: "/about",
				},
				{
					label: "Boats",
					link: "/boats",
					subItems: [
						{
							label: "New Boats",
							link: "/boats/new",
						},
						{
							label: "Used Boats",
							link: "/boats/used",
						},
					],
				},
				{
					label: "Services",
					link: "/services",
				},
				{
					label: "Financing",
					link: "/financing",
				},
				{
					label: "Contact",
					link: "/contact",
				},
			],
		},
	});

	await payload.create({
		collection: "navigation",
		data: {
			name: "Footer Navigation",
			location: "footer",
			items: [
				{
					label: "Quick Links",
					link: "#",
					subItems: [
						{
							label: "Home",
							link: "/",
						},
						{
							label: "About Us",
							link: "/about",
						},
						{
							label: "Contact",
							link: "/contact",
						},
					],
				},
				{
					label: "Boats",
					link: "#",
					subItems: [
						{
							label: "New Boats",
							link: "/boats/new",
						},
						{
							label: "Used Boats",
							link: "/boats/used",
						},
						{
							label: "Financing",
							link: "/financing",
						},
					],
				},
				{
					label: "Services",
					link: "#",
					subItems: [
						{
							label: "Maintenance",
							link: "/services/maintenance",
						},
						{
							label: "Repairs",
							link: "/services/repairs",
						},
						{
							label: "Storage",
							link: "/services/storage",
						},
					],
				},
			],
		},
	});

	// Create default pages
	await payload.create({
		collection: "pages",
		data: {
			title: "Home",
			slug: "home",
			content: [
				{
					blockType: "hero",
					title: "Welcome to Impact Marine Group",
					description: "Your premier destination for boats and marine services in Lake Lanier",
					primaryCta: {
						label: "View Boats",
						link: "/boats",
					},
					secondaryCta: {
						label: "Our Services",
						link: "/services",
					},
				},
				{
					blockType: "featuredBrands",
					title: "Featured Brands",
					description: "Discover our premium selection of boat brands",
				},
				{
					blockType: "fleet",
					title: "Our Fleet",
					description: "Browse our extensive collection of boats",
				},
				{
					blockType: "services",
					title: "Our Services",
					description: "Professional marine services for your needs",
				},
				{
					blockType: "testimonials",
					title: "What Our Customers Say",
					description: "Hear from our satisfied customers",
				},
			],
		},
	});

	await payload.create({
		collection: "pages",
		data: {
			title: "About Us",
			slug: "about",
			content: [
				{
					blockType: "hero",
					title: "About Impact Marine Group",
					description: "Your trusted partner in boating excellence since 2020",
					primaryCta: {
						label: "Contact Us",
						link: "/contact",
					},
					secondaryCta: {
						label: "View Services",
						link: "/services",
					},
				},
				{
					blockType: "content",
					content: "Impact Marine Group is dedicated to providing exceptional boating experiences on Lake Lanier. Our team of experienced professionals is committed to delivering top-quality boats and services to our valued customers.",
				},
				{
					blockType: "testimonials",
					title: "Customer Success Stories",
					description: "Read what our customers have to say about their experiences",
				},
			],
		},
	});

	await payload.create({
		collection: "pages",
		data: {
			title: "Boats",
			slug: "boats",
			content: [
				{
					blockType: "hero",
					title: "Our Boat Collection",
					description: "Discover your perfect boat from our premium selection",
					primaryCta: {
						label: "New Boats",
						link: "/boats/new",
					},
					secondaryCta: {
						label: "Used Boats",
						link: "/boats/used",
					},
				},
				{
					blockType: "featuredBrands",
					title: "Featured Brands",
					description: "Explore our premium boat brands",
				},
				{
					blockType: "fleet",
					title: "Available Boats",
					description: "Browse our current inventory",
				},
			],
		},
	});

	await payload.create({
		collection: "pages",
		data: {
			title: "Services",
			slug: "services",
			content: [
				{
					blockType: "hero",
					title: "Professional Marine Services",
					description: "Complete boat maintenance and repair solutions",
					primaryCta: {
						label: "Schedule Service",
						link: "/contact",
					},
					secondaryCta: {
						label: "View Services",
						link: "#services-list",
					},
				},
				{
					blockType: "services",
					title: "Our Services",
					description: "Comprehensive marine services for your boat",
				},
				{
					blockType: "testimonials",
					title: "Service Testimonials",
					description: "What our service customers say about us",
				},
			],
		},
	});

	await payload.create({
		collection: "pages",
		data: {
			title: "Financing",
			slug: "financing",
			content: [
				{
					blockType: "hero",
					title: "Boat Financing Solutions",
					description: "Flexible financing options to help you get on the water",
					primaryCta: {
						label: "Apply Now",
						link: "/contact",
					},
					secondaryCta: {
						label: "Learn More",
						link: "#financing-options",
					},
				},
				{
					blockType: "content",
					content: "Impact Marine Group partners with leading financial institutions to provide competitive financing options for your boat purchase. Our team will work with you to find the best financing solution that fits your budget.",
				},
				{
					blockType: "content",
					content: "## Financing Options\n\n- Competitive interest rates\n- Flexible terms up to 20 years\n- Quick approval process\n- Various down payment options\n- Financing available for new and used boats",
				},
			],
		},
	});

	await payload.create({
		collection: "pages",
		data: {
			title: "Contact",
			slug: "contact",
			content: [
				{
					blockType: "hero",
					title: "Get in Touch",
					description: "We're here to help with all your boating needs",
					primaryCta: {
						label: "Call Us",
						link: "tel:7708817808",
					},
					secondaryCta: {
						label: "Email Us",
						link: "mailto:sales@impactmarinegroup.com",
					},
				},
				{
					blockType: "content",
					content: "Visit us at our Lake Lanier location or reach out through phone or email. Our team is ready to assist you with any questions about our boats and services.",
				},
			],
		},
	});

	// Create default settings
	await payload.create({
		collection: "settings",
		data: {
			siteName: "Impact Marine Group",
			phoneNumber: "(770) 881-7808",
			companyName: "Impact Marine Group",
			phone: "(770) 881-7808",
			email: "sales@impactmarinegroup.com",
			address: {
				street: "123 Marina Way",
				city: "Lake Lanier",
				state: "GA",
				zip: "30506",
			},
		},
	});

	// Create default services
	await payload.create({
		collection: "services",
		data: {
			title: "Boat Maintenance",
			description: "Regular maintenance to keep your boat in top condition",
			slug: "maintenance",
		},
	});

	// Create default testimonials
	await payload.create({
		collection: "testimonials",
		data: {
			name: "John Smith",
			text: "Great service and friendly staff. They helped me find the perfect boat for my family.",
			rating: 5,
			position: "Boat Owner",
			company: "Local Business Owner",
			featured: true,
		},
	});

	console.log("✅ Seed completed");
}

seed();

import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import config from "../payload.config";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

async function seed() {
	try {
		if (!process.env.POSTGRES_URL) {
			throw new Error("POSTGRES_URL is required");
		}

		const resolvedConfig = await config;
		await payload.init({
			config: resolvedConfig,
		});

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
					},
					{
						label: "Services",
						link: "/services",
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
					},
					{
						label: "Services",
						link: "/services",
					},
					{
						label: "Contact",
						link: "/contact",
					},
				],
			},
		});

		// Create default settings
		await payload.create({
			collection: "settings",
			data: {
				name: "Impact Marine Group",
				description: "Your premier destination for boats and marine services in Lake Lanier",
				phone: "(770) 536-2628",
				email: "info@impactmarinegroup.com",
				address: {
					street: "2000 Holiday Road",
					city: "Buford",
					state: "GA",
					zip: "30518",
				},
				socialMedia: {
					facebook: "https://facebook.com/impactmarinegroup",
					instagram: "https://instagram.com/impactmarinegroup",
					twitter: "https://twitter.com/impactmarinegroup",
				},
			},
		});

		// Create home page
		await payload.create({
			collection: "pages",
			data: {
				title: "Home",
				slug: "home",
				isHomePage: true,
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
						description: "We partner with the best boat manufacturers in the industry",
					},
					{
						blockType: "fleet",
						title: "Our Fleet",
						description: "Explore our wide selection of boats",
					},
					{
						blockType: "services",
						title: "Our Services",
						description: "Professional marine services for your boat",
					},
					{
						blockType: "testimonials",
						title: "What Our Customers Say",
						description: "Hear from our satisfied customers",
					},
				],
			},
		});

		console.log("✅ Seed completed successfully!");
		process.exit(0);
	} catch (error) {
		console.error("Error seeding database:", error);
		process.exit(1);
	}
}

seed();

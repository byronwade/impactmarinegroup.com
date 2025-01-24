import { Payload } from "payload";

export async function seedDatabase(payload: Payload) {
	// Create default settings
	const settings = await payload.create({
		collection: "settings",
		data: {
			siteName: "Impact Marine Group",
			companyName: "Impact Marine Group LLC",
			phoneNumber: "(555) 123-4567",
			email: "info@impactmarinegroup.com",
			address: {
				street: "123 Marina Way",
				city: "Lake City",
				state: "GA",
				zip: "30566",
			},
			socialMedia: [
				{
					platform: "Facebook",
					url: "https://facebook.com/impactmarinegroup",
				},
				{
					platform: "Instagram",
					url: "https://instagram.com/impactmarinegroup",
				},
				{
					platform: "Twitter",
					url: "https://twitter.com/impactmarine",
				},
			],
			navigation: {
				header: [
					{
						label: "Home",
						link: "/",
						order: 1,
					},
					{
						label: "Fleet",
						link: "/fleet",
						order: 2,
					},
					{
						label: "Services",
						link: "/services",
						order: 3,
					},
					{
						label: "About",
						link: "/about",
						order: 4,
					},
					{
						label: "Contact",
						link: "/contact",
						order: 5,
					},
				],
				footer: [
					{
						label: "Privacy Policy",
						link: "/privacy",
						order: 1,
					},
					{
						label: "Terms of Service",
						link: "/terms",
						order: 2,
					},
				],
			},
		},
	});

	// Create default brands
	const brands = await Promise.all([
		payload.create({
			collection: "brands",
			data: {
				name: "Sea Ray",
				description: "Luxury boats and yachts",
				featured: true,
			},
		}),
		payload.create({
			collection: "brands",
			data: {
				name: "Boston Whaler",
				description: "Unsinkable legend",
				featured: true,
			},
		}),
	]);

	// Create default boats
	const boats = await Promise.all([
		payload.create({
			collection: "boats",
			data: {
				name: "Luxury Yacht 42",
				manufacturer: "Sea Ray",
				model: "Sundancer 42",
				modelYear: 2024,
				condition: "new",
				status: "available",
				price: 750000,
				description: [
					{
						children: [
							{
								text: "Experience luxury on the water with this stunning Sea Ray Sundancer 42.",
							},
						],
					},
				],
				slug: "sea-ray-sundancer-42-2024",
			},
		}),
		payload.create({
			collection: "boats",
			data: {
				name: "Sport Cruiser 36",
				manufacturer: "Boston Whaler",
				model: "Conquest 36",
				modelYear: 2023,
				condition: "new",
				status: "available",
				price: 450000,
				description: [
					{
						children: [
							{
								text: "The perfect combination of luxury and performance in this Boston Whaler Conquest 36.",
							},
						],
					},
				],
				slug: "boston-whaler-conquest-36-2023",
			},
		}),
	]);

	// Create default services
	const services = await Promise.all([
		payload.create({
			collection: "services",
			data: {
				title: "Boat Sales",
				description: "Find your perfect vessel with our extensive selection of new and pre-owned boats.",
				slug: "boat-sales",
			},
		}),
		payload.create({
			collection: "services",
			data: {
				title: "Maintenance & Repair",
				description: "Expert maintenance and repair services to keep your boat in top condition.",
				slug: "maintenance-repair",
			},
		}),
	]);

	// Create default testimonials
	const testimonials = await Promise.all([
		payload.create({
			collection: "testimonials",
			data: {
				name: "John Smith",
				text: "Outstanding service and expertise. Found my dream boat thanks to Impact Marine Group!",
				rating: 5,
			},
		}),
		payload.create({
			collection: "testimonials",
			data: {
				name: "Sarah Johnson",
				text: "Professional team and excellent maintenance service. Highly recommended!",
				rating: 5,
			},
		}),
	]);

	// Create default pages with blocks
	const homePage = await payload.create({
		collection: "pages",
		data: {
			title: "Home",
			slug: "home",
			blocks: [
				{
					blockType: "hero",
					heading: "Discover Your Perfect Boat",
					subheading: "Premium boats and exceptional service",
					primaryCta: {
						text: "View Fleet",
						link: "/fleet",
					},
					secondaryCta: {
						text: "Contact Us",
						link: "/contact",
					},
				},
				{
					blockType: "featuredBrands",
					brands: brands.map((brand) => brand.id),
				},
				{
					blockType: "fleet",
					boats: boats.map((boat) => boat.id),
				},
				{
					blockType: "services",
					subtitle: "Expert solutions for all your boating needs",
					services: services.map((service) => service.id),
				},
				{
					blockType: "testimonials",
					testimonials: testimonials.map((testimonial) => testimonial.id),
				},
			],
		},
	});

	return {
		settings,
		boats,
		brands,
		services,
		testimonials,
		pages: [homePage],
	};
}

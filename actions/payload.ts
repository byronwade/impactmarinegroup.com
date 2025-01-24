import { cache } from "react";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

// Site Configuration
export const getSiteConfig = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=settings`);
	const data = await res.json();
	return data.docs?.[0] || null;
});

export const getPhoneNumber = cache(async () => {
	const config = await getSiteConfig();
	return config?.companyInfo?.phone || "770-881-7808"; // Fallback number
});

// Navigation
export const getPrimaryNavigation = cache(async () => {
	const config = await getSiteConfig();
	return config?.navigation?.header || [];
});

// Get Page by Slug
export const getPageBySlug = cache(async (slug: string) => {
	const res = await fetch(`${API_URL}/api/payload?collection=pages&slug=${slug}`);
	const data = await res.json();
	return data.docs?.[0] || null;
});

// Get All Boats
export const getBoats = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=boats`);
	const data = await res.json();
	return data.docs || [];
});

// Get Featured Boats
export const getFeaturedBoats = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=boats&featured=true`);
	const data = await res.json();
	return data.docs || [];
});

// Get Boat by Slug
export const getBoatBySlug = cache(async (slug: string) => {
	const res = await fetch(`${API_URL}/api/payload?collection=boats&slug=${slug}`);
	const data = await res.json();
	return data.docs?.[0] || null;
});

// Get All Brands
export const getBrands = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=brands`);
	const data = await res.json();
	return data.docs || [];
});

// Get Featured Brands
export const getFeaturedBrands = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=brands&featured=true`);
	const data = await res.json();
	return data.docs || [];
});

// Get All Services
export const getServices = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=services`);
	const data = await res.json();
	return data.docs || [];
});

// Get All Testimonials
export const getTestimonials = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=testimonials`);
	const data = await res.json();
	return data.docs || [];
});

// Get Featured Testimonials
export const getFeaturedTestimonials = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=testimonials&featured=true`);
	const data = await res.json();
	return data.docs || [];
});

// Get All Media
export const getMedia = cache(async () => {
	const res = await fetch(`${API_URL}/api/payload?collection=media`);
	const data = await res.json();
	return data.docs || [];
});

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getSiteConfig } from "@/actions/sanity";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function getPhoneNumber() {
	const config = await getSiteConfig();
	return config.phoneNumber || "770-881-7808"; // Fallback number
}

export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount);
}

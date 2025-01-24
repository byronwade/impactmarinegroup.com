import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getPhoneNumber } from "@/actions/payload";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount);
}

// Re-export getPhoneNumber from payload actions
export { getPhoneNumber };

/**
 * Returns the current year as a number
 */
export const getCurrentYear = (): number => {
	return new Date().getFullYear();
};

"use server";

import { revalidatePath } from "next/cache";
import { contactSchema, type EmailData, type CRMData } from "@/types/forms";

export async function submitContactForm(data: FormData) {
	const validated = contactSchema.parse({
		name: data.get("name"),
		email: data.get("email"),
		message: data.get("message"),
	}) satisfies EmailData & CRMData;

	try {
		await Promise.all([console.log("Sending email:", validated), console.log("Updating CRM:", validated)]);

		revalidatePath("/contact");
		return { success: true };
	} catch (error) {
		console.error("Form submission error:", error);
		return { success: false, error: "Failed to submit form" };
	}
}

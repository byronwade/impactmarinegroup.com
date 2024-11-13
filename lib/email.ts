import type { EmailData } from "@/types/forms";

export async function sendEmail(data: EmailData) {
	try {
		// Implement your email sending logic here

		console.log("Sending email:", data);

		return true;
	} catch (error) {
		console.error("Error sending email:", error);

		return false;
	}
}

/**
 * @typedef {Object} FormData
 * @property {string} name
 * @property {string} email
 */

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export async function sendEmail(formData: FormData) {
	try {
		const { name, email, phone, message } = formData;
		const data = await resend.emails.send({
			from: "Impact Marine Group <onboarding@resend.dev>",
			to: ["bcw1995@gmail.com"],
			subject: "New Contact Form Submission",
			html: `
				<h1>New Contact Form Submission</h1>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone:</strong> ${phone}</p>
				<p><strong>Message:</strong> ${message}</p>
			`,
		});

		return { success: true, data };
	} catch (error) {
		console.error("Error sending email:", error);
		return { success: false, error };
	}
}

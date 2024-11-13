import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10),
});

export type EmailData = z.infer<typeof contactSchema>;
export type CRMData = EmailData;

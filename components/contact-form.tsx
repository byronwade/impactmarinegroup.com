'use client';

import React, { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later. Error: ' + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-2">
					Name
				</label>
				<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2">
					Email
				</label>
				<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
			</div>
			<div>
				<label htmlFor="phone" className="block mb-2">
					Phone Number
				</label>
				<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
			</div>
			<div>
				<label htmlFor="message" className="block mb-2">
					Message
				</label>
				<textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full px-3 py-2 border rounded"></textarea>
			</div>
			<button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
				{isSubmitting ? "Sending..." : "Send"}
			</button>
			{submitMessage && <p className="mt-4">{submitMessage}</p>}
		</form>
  );
};

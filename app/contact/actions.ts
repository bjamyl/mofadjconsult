"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phoneNumber: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  company: z.string().max(0).optional(), // honeypot: must stay empty
});

export type ContactFormState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = ContactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }

  // Bots that fill the honeypot get a silent success, no email sent.
  if (parsed.data.company) {
    return { ok: true };
  }

  const { fullName, email, phoneNumber, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "Mofad-J Consult <onboarding@resend.dev>",
      to: [site.email],
      replyTo: email,
      subject: `New contact form submission from ${fullName}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return { ok: false, message: "Failed to send message. Please try again later." };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: "Failed to send message. Please try again later." };
  }
}

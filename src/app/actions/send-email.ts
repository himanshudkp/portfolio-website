"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/contact/email-template";
import type { ContactFormData, EmailResponse } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  formData: ContactFormData,
): Promise<EmailResponse> {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Invalid email address",
      };
    }

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "himanshudkp@gmail.com"],
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      react: EmailTemplate({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
        error: error.message,
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

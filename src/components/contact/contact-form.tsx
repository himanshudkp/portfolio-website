"use client";

import { ChangeEvent, type FormEvent, useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";
import { ContactFormData } from "@/lib/types";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await sendContactEmail(formData);

      if (response.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(response.message);

        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");

      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-teal-500/30 bg-[#252525] p-5 space-y-3.5"
    >
      <input
        required
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        disabled={isLoading}
        className="w-full rounded-lg bg-[#1E1E1E] border border-gray-700 px-4 py-2.5 text-sm text-gray-200 focus:border-teal-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <input
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        disabled={isLoading}
        className="w-full rounded-lg bg-[#1E1E1E] border border-gray-700 px-4 py-2.5 text-sm text-gray-200 focus:border-teal-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <textarea
        required
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        placeholder="Tell me about your project…"
        disabled={isLoading}
        className="w-full rounded-lg bg-[#1E1E1E] border border-gray-700 px-4 py-2.5 text-sm text-gray-200 focus:border-teal-500 focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      />

      {isError && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {isSuccess && (
        <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2.5">
          <CheckCircle size={16} />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 py-2.5 font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle size={15} />
            Message Sent
          </>
        ) : (
          <>
            Send Message
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
};

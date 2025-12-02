import { useState } from "react";
import { siteContent } from "../content/siteContent";

import { Section } from "../components/Section";

export function ContactForm() {
  const { layout } = siteContent.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function updateField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    await new Promise((res) => setTimeout(res, 1200));

    setStatus("success");
  }

  return (
    <Section layout={layout} className="rounded-2xl bg-white shadow-xl">
      <div className="w-xm mx-auto max-w-xl text-center">
        <h2 className="animate-fadeSlideIn translate-y-4 text-3xl font-bold tracking-tight text-gray-900 opacity-0 sm:text-4xl">
          {siteContent.contact.title}
        </h2>

        <p className="animate-fadeSlideIn mx-auto mt-4 max-w-xl translate-y-4 text-gray-600 opacity-0 delay-200">
          {siteContent.contact.subtitle}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="animate-fadeSlideIn mt-10 translate-y-4 space-y-6 text-left opacity-0 delay-300"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {siteContent.contact.fields.name}
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline focus:outline-2 focus:outline-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {siteContent.contact.fields.email}
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline focus:outline-2 focus:outline-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {siteContent.contact.fields.message}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline focus:outline-2 focus:outline-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading"
              ? "Sending..."
              : siteContent.contact.submitLabel}
          </button>

          {/* Success message */}
          {status === "success" && (
            <p
              className="animate-fadeSlideIn mt-4 text-center text-green-600"
              aria-live="polite"
            >
              {siteContent.contact.successMessage}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

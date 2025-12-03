import { useState } from "react";
import { Section } from "./Section";

type ContactProps = {
  heading?: string;
  subheading?: string;
  recipient_email: string;
  success_message?: string;
  submit_label?: string;
};

export function ContactForm({
  heading = "Contact",
  subheading,
  success_message = "Thanks! I'll get back to you soon.",
  submit_label = "Send",
}: ContactProps) {
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

    // TODO: call your Cloudflare/Netlify function
    await new Promise((res) => setTimeout(res, 1200));

    setStatus("success");
  }

  return (
    <Section className="rounded-2xl bg-white shadow-xl">
      <div className="mx-auto w-[95%] max-w-xl text-center">
        <h2 className="initial-fade text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {heading}
        </h2>

        {subheading && (
          <p className="initial-fade mx-auto mt-4 max-w-xl text-gray-600 delay-200">
            {subheading}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="initial-fade mt-10 space-y-6 text-left delay-300"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              required
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline focus:outline-2 focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline focus:outline-2 focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline focus:outline-2 focus:outline-blue-500"
            />
          </div>

          <button
            disabled={status === "loading"}
            className="flex w-full items-center justify-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : submit_label}
          </button>

          {status === "success" && (
            <p className="initial-fade mt-4 text-center text-green-600">
              {success_message}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

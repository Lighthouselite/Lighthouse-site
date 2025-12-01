"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      organisation: formData.get("organisation"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = (await res.json()) as { success: boolean; error?: string };
      if (!data.success) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-200"
          >
            Name*
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lighthouse-lightBlue/50 focus:ring-2"
          />
        </div>
        <div>
          <label
            htmlFor="organisation"
            className="block text-xs font-medium text-slate-200"
          >
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lighthouse-lightBlue/50 focus:ring-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-200"
          >
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lighthouse-lightBlue/50 focus:ring-2"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-slate-200"
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lighthouse-lightBlue/50 focus:ring-2"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>
          <p className="text-[11px] text-slate-400">
            We&apos;ll never share your details. Basic project context is enough
            for first contact.
          </p>
        </div>
      </form>

      {status === "success" && (
        <motion.div
          className="mt-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you — your message has been received. We&apos;ll be in touch.
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          className="mt-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {errorMsg}
        </motion.div>
      )}
    </div>
  );
}

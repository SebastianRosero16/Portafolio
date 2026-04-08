"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

// Contact info cards
const contactInfo = [
  {
    labelKey: "contact.email",
    value: "sebasorlando28@gmail.com",
    gradient: "from-pink-500 to-red-400",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    labelKey: "contact.phone",
    value: "320 383 1186",
    gradient: "from-green-400 to-green-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    labelKey: "contact.location",
    value: "Pasto, Nariño, Colombia",
    gradient: "from-blue-400 to-blue-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { t } = useApp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:sebasorlando28@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16 px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("contact.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-gray-500 text-sm">{t("contact.subtitle")}</p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactInfo.map((item) => (
            <div key={item.labelKey} className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 border border-gray-100" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
              <div className={`bg-linear-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                {item.icon}
              </div>
              <p className="text-gray-900 font-bold text-sm text-center">{t(item.labelKey)}</p>
              <p className="text-gray-500 text-sm text-center">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Contact form card */}
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}>
          {/* Form header */}
          <div
            className="p-6"
            style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)" }}
          >
            <h3 className="text-white font-bold text-lg">{t("contact.form.title")}</h3>
            <p className="text-blue-100 text-sm mt-1">{t("contact.form.subtitle")}</p>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-xs font-medium">{t("contact.form.name")}</label>
                <input type="text" name="name" placeholder={t("contact.form.name.placeholder")} value={form.name} onChange={handleChange} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-xs font-medium">Email</label>
                <input type="email" name="email" placeholder={t("contact.form.email.placeholder")} value={form.email} onChange={handleChange} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 text-xs font-medium">{t("contact.form.subject")}</label>
              <input type="text" name="subject" placeholder={t("contact.form.subject.placeholder")} value={form.subject} onChange={handleChange} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-700 text-xs font-medium">{t("contact.form.message")}</label>
              <textarea name="message" placeholder={t("contact.form.message.placeholder")} value={form.message} onChange={handleChange} rows={4} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors resize-none" />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-opacity hover:opacity-90 w-fit"
              style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {t("contact.form.send")}
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-500 text-sm">{t("contact.social")}</p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/sebastian-orlando-manchabajoy-rosero-b1973a3ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/SebastianRosero16"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

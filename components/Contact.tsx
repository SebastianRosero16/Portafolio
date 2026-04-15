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
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t } = useApp();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (field: string, value: string): string => {
    const trimmed = value.trim();
    if (field === "name") {
      if (!trimmed) return "El nombre es requerido";
      if (trimmed.length < 2) return "Mínimo 2 caracteres";
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmed)) return "Solo se permiten letras";
    }
    if (field === "email") {
      if (!trimmed) return "El correo es requerido";
      if (!emailRegex.test(trimmed)) return "Ingresa un correo válido";
    }
    if (field === "subject") {
      if (!trimmed) return "El asunto es requerido";
      if (trimmed.length < 3) return "Mínimo 3 caracteres";
    }
    if (field === "message") {
      if (!trimmed) return "El mensaje es requerido";
      if (trimmed.length < 10) return "Mínimo 10 caracteres";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (value.startsWith(" ")) return;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: validate("name", form.name),
      email: validate("email", form.email),
      subject: validate("subject", form.subject),
      message: validate("message", form.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err)) return;

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xlgadklq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
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
              {item.labelKey === "contact.email" ? (
                <a
                  href={`mailto:${item.value}`}
                  title={item.value}
                  className="text-blue-500 text-sm text-center truncate max-w-full hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-500 text-sm text-center">{item.value}</p>
              )}
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
                <input
                  type="text" name="name" placeholder={t("contact.form.name.placeholder")}
                  value={form.name} onChange={handleChange}
                  className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors ${errors.name ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-xs font-medium">Email</label>
                <input
                  type="text" name="email" placeholder={t("contact.form.email.placeholder")}
                  value={form.email} onChange={handleChange}
                  className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors ${errors.email ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 text-xs font-medium">{t("contact.form.subject")}</label>
              <input
                type="text" name="subject" placeholder={t("contact.form.subject.placeholder")}
                value={form.subject} onChange={handleChange}
                className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors ${errors.subject ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
              />
              {errors.subject && <span className="text-red-500 text-xs">{errors.subject}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-700 text-xs font-medium">{t("contact.form.message")}</label>
              <textarea
                name="message" placeholder={t("contact.form.message.placeholder")}
                value={form.message} onChange={handleChange} rows={4}
                className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors resize-none ${errors.message ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
              />
              {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-opacity hover:opacity-90 w-fit disabled:opacity-60"
              style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {status === "sending" ? "Enviando..." : t("contact.form.send")}
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm font-medium">¡Mensaje enviado correctamente!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">Hubo un error al enviar. Intenta de nuevo.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

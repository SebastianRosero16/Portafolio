"use client";

import { useApp } from "@/context/AppContext";

// About section - Sobre Mí

interface ProfileCard {
  iconType: string;
  title: string;
  description: string;
  bg: string;
}

const profileCards: ProfileCard[] = [
  {
    iconType: "person",
    title: "Perfil Profesional",
    description: "Estudiante de Ingeniería de Software con formación en soporte TI y desarrollo web. Dominio de inglés.",
    bg: "bg-blue-500",
  },
  {
    iconType: "eye",
    title: "Enfoque",
    description: "Responsable y adaptable con habilidades en atención al cliente.",
    bg: "bg-blue-500",
  },
  {
    iconType: "briefcase",
    title: "Experiencia",
    description: "Conocimientos en herramientas digitales y solución de problemas técnicos.",
    bg: "bg-blue-500",
  },
  {
    iconType: "bulb",
    title: "Valores",
    description: "Trabajo en equipo, aprendizaje continuo y dedicación profesional.",
    bg: "bg-blue-500",
  },
];

const technicalSkills = [
  "Soporte TI", "JavaScript", "Python", "Git", "Desarrollo Web",
  "Herramientas de IA", "HTML/CSS", "VS Code",
];

const softSkills = [
  { name: "Comunicación", level: 90 },
  { name: "Trabajo en Equipo", level: 95 },
  { name: "Responsabilidad", level: 95 },
  { name: "Adaptabilidad", level: 88 },
  { name: "Resolución de Problemas", level: 85 },
  { name: "Liderazgo", level: 80 },
];

function ProfileIcon({ type }: { type: string }) {
  if (type === "person") {
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }
  if (type === "eye") {
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );
  }
  if (type === "briefcase") {
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

export default function About() {
  const { t } = useApp();
  return (
    <section id="sobre-mi" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("about.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">{t("about.bio")}</p>
        </div>

        {/* Profile cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { iconType: "person", titleKey: "about.profile", descKey: "about.profile.desc", bg: "bg-blue-500" },
            { iconType: "eye", titleKey: "about.focus", descKey: "about.focus.desc", bg: "bg-blue-500" },
            { iconType: "briefcase", titleKey: "about.experience", descKey: "about.experience.desc", bg: "bg-blue-500" },
            { iconType: "bulb", titleKey: "about.values", descKey: "about.values.desc", bg: "bg-blue-500" },
          ].map((card) => (
            <div key={card.titleKey} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
              <div className={`${card.bg} rounded-xl w-10 h-10 flex items-center justify-center shrink-0`}>
                <ProfileIcon type={card.iconType} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{t(card.titleKey)}</h3>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{t(card.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical skills card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-blue-600 rounded-xl w-10 h-10 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base">{t("about.technical")}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "about.skills.it", "JavaScript", "Python", "Git",
              "about.skills.web", "about.skills.ai", "HTML/CSS", "VS Code",
            ].map((skill) => (
              <span key={skill} className="bg-white border border-gray-200 text-gray-900 text-sm px-4 py-2 rounded-xl" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
                {skill.startsWith("about.") ? t(skill) : skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft skills card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-purple-600 rounded-xl w-10 h-10 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-base">{t("about.soft")}</h3>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { key: "about.soft.communication", level: 90 },
              { key: "about.soft.teamwork", level: 95 },
              { key: "about.soft.responsibility", level: 95 },
              { key: "about.soft.adaptability", level: 88 },
              { key: "about.soft.problem", level: 85 },
              { key: "about.soft.leadership", level: 80 },
            ].map((skill) => (
              <div key={skill.key}>
                <div className="flex justify-between text-xs text-gray-700 mb-1">
                  <span>{t(skill.key)}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-linear-to-r from-blue-500 to-purple-600 h-1.5 rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

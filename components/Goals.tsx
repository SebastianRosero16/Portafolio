"use client";

import { useApp } from "@/context/AppContext";

// Professional goals section

const goals = [
  {
    title: "Crecer como Desarrollador Web",
    timeframe: "Corto-Mediano Plazo",
    description: "Convertirme en un desarrollador full-stack competente, dominando tanto frontend como backend",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mejorar Nivel de Inglés",
    timeframe: "Mediano Plazo",
    description: "Alcanzar un nivel avanzado de inglés técnico para acceder a mejores oportunidades internacionales",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Trabajar en el Sector Tecnológico",
    timeframe: "Mediano-Largo Plazo",
    description: "Formar parte de una empresa tecnológica donde pueda aplicar y expandir mis conocimientos",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Contribuir a Proyectos Open Source",
    timeframe: "Largo Plazo",
    description: "Participar activamente en la comunidad de desarrolladores y contribuir a proyectos de código abierto",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function Goals() {
  const { t } = useApp();
  return (
    <section id="objetivos" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("goals.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-gray-500 text-sm">{t("goals.subtitle")}</p>
        </div>

        {/* Goals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto w-full">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="bg-blue-50 rounded-2xl p-5 flex flex-col gap-3 shadow-md"
            >
              {/* Top: icon + title + badge */}
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  {goal.icon}
                </div>
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  <h3 className="text-gray-900 font-bold text-base leading-snug">{goal.title}</h3>
                  <span className="text-blue-500 bg-blue-100 text-xs px-2.5 py-0.5 rounded-full w-fit">
                    {goal.timeframe}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="rounded-2xl p-8 text-center flex flex-col items-center gap-3 max-w-xl mx-auto w-full"
          style={{
            background: "linear-gradient(to right, #3b82f6, #06b6d4)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
          }}
        >
          <h3 className="text-white font-bold text-xl">{t("goals.cta.title")}</h3>
          <p className="text-blue-100 text-sm">{t("goals.cta.subtitle")}</p>
          <a href="https://wa.me/573203831186" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 font-semibold text-sm px-8 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
            {t("goals.cta.button")}
          </a>
        </div>

      </div>
    </section>
  );
}

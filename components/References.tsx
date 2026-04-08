"use client";

import { useApp } from "@/context/AppContext";

// Professional references section

const references = [
  {
    name: "Frey Manchabajoy",
    role: "Referencia Profesional",
    quotes: [
      "Sebastián tiene un talento excepcional para resolver problemas técnicos de manera rápida y eficiente.",
      "Su conocimiento en desarrollo de software y soporte técnico es impresionante para alguien de su edad.",
      "Siempre se mantiene actualizado con las últimas tecnologías y demuestra un gran compromiso con la calidad.",
    ],
  },
  {
    name: "Wilson Mauricio Rosero",
    role: "Referencia Profesional",
    quotes: [
      "Excelente habilidad para diagnosticar y reparar computadores. Resuelve cualquier problema de hardware o software.",
      "Su capacidad de explicar conceptos técnicos de manera sencilla a los clientes es destacable.",
      "Muy profesional y confiable. Siempre cumple con los plazos establecidos en sus proyectos de desarrollo.",
    ],
  },
  {
    name: "Eddy Luci Obando",
    role: "Referencia Profesional",
    quotes: [
      "Sebastián desarrolló una aplicación web para nuestro negocio que superó todas nuestras expectativas.",
      "Además de sus habilidades técnicas, su capacidad de trabajo en equipo y comunicación son excepcionales.",
      "Su atención al detalle y creatividad en el diseño de interfaces es sobresaliente.",
    ],
  },
];

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function References() {
  const { t } = useApp();
  return (
    <section id="referencias" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("references.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-gray-500 text-sm">{t("references.subtitle")}</p>
        </div>

        {/* Reference cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto w-full">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="bg-white rounded-2xl p-4 flex flex-col gap-3 relative"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.10)" }}
            >
              {/* Stars + decorative quote mark in same row */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-5xl font-serif text-blue-200 leading-none select-none">"</span>
              </div>

              {/* Quotes */}
              <ul className="flex flex-col gap-3 flex-1">
                {ref.quotes.map((quote, i) => (
                  <li key={i} className="text-gray-600 text-sm italic leading-relaxed">
                    <span className="text-blue-500 font-bold mr-1">•</span>
                    &ldquo;{quote}&rdquo;
                  </li>
                ))}
              </ul>

              {/* Author */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-900 font-bold text-sm">{ref.name}</p>
                <p className="text-gray-400 text-xs">{t("references.role")}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

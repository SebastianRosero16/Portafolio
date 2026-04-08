"use client";

import { useApp } from "@/context/AppContext";

// Work Experience section

const experiences = [
  {
    titleKey: "exp.job1.title", companyKey: "exp.job1.company",
    periodKey: "exp.job1.period", locationKey: "exp.job1.location",
    achievementKeys: ["exp.job1.a1","exp.job1.a2","exp.job1.a3","exp.job1.a4"],
  },
  {
    titleKey: "exp.job2.title", companyKey: "exp.job2.company",
    periodKey: "exp.job2.period", locationKey: "exp.job2.location",
    achievementKeys: ["exp.job2.a1","exp.job2.a2","exp.job2.a3","exp.job2.a4"],
  },
];

export default function Experience() {
  const { t } = useApp();
  return (
    <section id="experiencia" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("experience.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8 pl-8">

          {/* Vertical line */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-blue-600" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col gap-0">
              <div className="absolute -left-6 top-5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white" style={{ boxShadow: "0 0 0 2px #2563eb" }} />
              <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <div className="bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">{t(exp.titleKey)}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="text-white/90 text-sm">{t(exp.companyKey)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="text-white/90 text-sm">{t(exp.periodKey)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="text-white/90 text-sm">{t(exp.locationKey)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-6 py-5">
                  <p className="font-semibold text-gray-900 text-sm mb-3">{t("experience.achievements")}</p>
                  <ul className="flex flex-col gap-2">
                    {exp.achievementKeys.map((key) => (
                      <li key={key} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

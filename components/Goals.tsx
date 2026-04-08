"use client";

import { useApp } from "@/context/AppContext";

// Professional goals section

const goalsData = [
  { titleKey: "goal.1.title", timeframeKey: "goal.1.timeframe", descKey: "goal.1.desc", icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
  { titleKey: "goal.2.title", timeframeKey: "goal.2.timeframe", descKey: "goal.2.desc", icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>) },
  { titleKey: "goal.3.title", timeframeKey: "goal.3.timeframe", descKey: "goal.3.desc", icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>) },
  { titleKey: "goal.4.title", timeframeKey: "goal.4.timeframe", descKey: "goal.4.desc", icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>) },
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
          {goalsData.map((goal) => (
            <div
              key={goal.titleKey}
              className="bg-blue-50 rounded-2xl p-5 flex flex-col gap-3 shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  {goal.icon}
                </div>
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  <h3 className="text-gray-900 font-bold text-base leading-snug">{t(goal.titleKey)}</h3>
                  <span className="text-blue-500 bg-blue-100 text-xs px-2.5 py-0.5 rounded-full w-fit">
                    {t(goal.timeframeKey)}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{t(goal.descKey)}</p>
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

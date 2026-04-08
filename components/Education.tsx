"use client";

import { useApp } from "@/context/AppContext";

// Education and Certifications section

const academicItems = [
  { iconType: "graduation", bg: "bg-blue-500", titleKey: "edu.software", subKey: "edu.software.sub", status: "ongoing", statusColor: "bg-blue-100 text-blue-600" },
  { iconType: "book", bg: "bg-purple-500", titleKey: "edu.sena", subKey: "edu.sena.sub", status: "ongoing", statusColor: "bg-blue-100 text-blue-600" },
  { iconType: "badge", bg: "bg-green-500", titleKey: "edu.support", subKey: "edu.support.sub", status: "completed", statusColor: "bg-green-100 text-green-600" },
  { iconType: "language", bg: "bg-pink-500", titleKey: "edu.english", subKey: "edu.english.sub", status: "completed", statusColor: "bg-green-100 text-green-600" },
];

const courseItems = [
  { bg: "bg-orange-500", titleKey: "edu.devops", subKey: "edu.online" },
  { bg: "bg-yellow-500", titleKey: "edu.js", subKey: "edu.online" },
  { bg: "bg-pink-500", titleKey: "edu.ai", subKey: "edu.online" },
  { bg: "bg-cyan-500", titleKey: "edu.appinventor", subKey: "edu.online" },
];

function AcademicIcon({ type }: { type: string }) {
  if (type === "graduation") {
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-3-3h6" />
      </svg>
    );
  }
  if (type === "book") {
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  }
  if (type === "badge") {
    return (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  );
}

function CourseIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function Education() {
  const { t } = useApp();
  return (
    <section id="educacion" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("education.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("education.academic")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {academicItems.map((item) => (
              <div key={item.titleKey} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
                <div className={`${item.bg} rounded-xl w-10 h-10 flex items-center justify-center`}>
                  <AcademicIcon type={item.iconType} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t(item.titleKey)}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t(item.subKey)}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${item.statusColor}`}>
                  {item.status === "ongoing" ? t("education.ongoing") : t("education.completed")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("education.courses")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courseItems.map((item) => (
              <div key={item.titleKey} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
                <div className={`${item.bg} rounded-xl w-10 h-10 flex items-center justify-center`}>
                  <CourseIcon />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t(item.titleKey)}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t(item.subKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

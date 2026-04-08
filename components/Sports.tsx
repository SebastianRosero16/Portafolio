"use client";

import Image from "next/image";

// Achievement cards data
const achievements = [
  {
    title: "Campeón Departamental",
    description: "Ganador del torneo departamental en Pereira",
    gradient: "from-orange-400 to-orange-500",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    title: "Participación Nacional",
    description: "Torneos municipales, departamentales y nacionales",
    gradient: "from-blue-400 to-blue-500",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "15 Años de Experiencia",
    description: "Practicando fútbol desde los 6 años",
    gradient: "from-green-400 to-green-500",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Liderazgo Deportivo",
    description: "Desarrollo de habilidades de liderazgo y trabajo en equipo",
    gradient: "from-purple-400 to-pink-500",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const skills = ["Disciplina", "Trabajo en Equipo", "Liderazgo", "Perseverancia", "Compromiso", "Resiliencia"];

export default function Sports() {
  return (
    <section
      id="deportes"
      className="py-16 px-6"
      style={{ background: "linear-gradient(to bottom, #0d1b3e, #1e3a7a 50%, #0d1b3e)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* Section title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Disciplina y Logros Deportivos</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-yellow-400 rounded-full" />
          <p className="mt-4 text-blue-200 text-sm">
            El deporte ha sido fundamental en mi formación personal y profesional
          </p>
        </div>

        {/* Achievement cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className={`bg-gradient-to-br ${item.gradient} w-10 h-10 rounded-xl flex items-center justify-center`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-blue-200 text-xs mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sports photo */}
        <div className="rounded-2xl overflow-hidden w-full aspect-video relative">
          <Image
            src="/sports.jpg"
            alt="Partido de fútbol"
            fill
            className="object-cover"
          />
          {/* Fade-out effect at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d1b3e] to-transparent" />
        </div>

        {/* Skills card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-white font-bold text-lg mb-4">Habilidades Desarrolladas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-white text-sm px-4 py-1.5 rounded-full font-normal"
                style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useApp } from "@/context/AppContext";

// Projects section

const projects = [
  {
    title: "AgroSmart - Plataforma Agrícola con IA",
    description:
      "Sistema completo de venta de productos e insumos agrícolas con IA integrada para comparar precios, recomendar productos económicos y asesorar a agricultores en el diagnóstico de problemas de cultivos.",
    technologies: ["JavaScript", "IA", "API Integration", "Web Development"],
    githubUrl: "https://github.com/SebastianRosero16/AgriGoSJ-Frontend",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Plataforma Profesional - Estilo LinkedIn",
    description:
      "Red social profesional para conectar profesionales, compartir experiencias laborales y establecer contactos de negocios con sistema de perfiles y mensajería.",
    technologies: ["JavaScript", "HTML", "CSS", "Database", "API"],
    githubUrl: "https://github.com/SebastianRosero16/Red-Social.git",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Reproductor de Música MP3",
    description:
      "Aplicación de reproducción de música con controles intuitivos, playlist personalizada, y gestión completa de biblioteca musical.",
    technologies: ["JavaScript", "HTML5 Audio", "CSS", "File Management"],
    githubUrl: "https://github.com/SebastianRosero16/Reproductor-de-Musica.git",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Alarma Mundial Multi-Zona",
    description:
      "Sistema de alarma con soporte para diferentes zonas horarias internacionales, permitiendo programar recordatorios en horarios de múltiples países.",
    technologies: ["JavaScript", "Time API", "HTML", "CSS"],
    githubUrl: "https://github.com/SebastianRosero16/Reloj-Alarma.git",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Diseño de Interfaces Intuitivas",
    description:
      "Colección de interfaces de usuario modernas y accesibles, enfocadas en experiencia del usuario y diseño responsivo.",
    technologies: ["UI/UX", "CSS3", "HTML5", "Responsive Design"],
    githubUrl: "https://github.com/SebastianRosero16/Dashboard.git",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Soporte TI Dashboard",
    description:
      "Panel de control para gestión de tickets de soporte técnico con seguimiento en tiempo real y sistema de prioridades.",
    technologies: ["Python", "JavaScript", "Web Development", "Database"],
    githubUrl: "https://github.com/StevenInsuasti/TalleGit.git",
    gradient: "from-blue-500 to-cyan-400",
  },
];

function CodeIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const { t } = useApp();
  return (
    <section id="proyectos" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("projects.title")}</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-gray-500 text-sm">{t("projects.subtitle")}</p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Card header with gradient */}
              <div className={`bg-linear-to-br ${project.gradient} p-5 relative overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -right-2 w-16 h-16 rounded-full bg-white/10" />

                {/* Code icon badge */}
                <div className="bg-white/20 rounded-lg w-9 h-9 flex items-center justify-center mb-3">
                  <CodeIcon />
                </div>
                <h3 className="text-white font-bold text-base leading-snug">{project.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div>
                  <p className="text-gray-900 font-semibold text-xs mb-2">{t("projects.technologies")}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors"
                >
                  <GithubIcon />
                  {t("projects.code")}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

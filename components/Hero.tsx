"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d2060] to-[#1a3a8f] flex flex-col items-center justify-start pt-24 pb-12 px-6"
    >
      <div className="max-w-5xl w-full flex flex-col gap-5">

        {/* Welcome badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 w-fit">
          <span className="text-lg">👋</span>
          <span className="text-white text-sm font-medium">Bienvenido a mi portafolio</span>
        </div>

        {/* Main row: text left, photo right */}
        <div className="flex flex-col sm:flex-row items-center gap-8">

          {/* Left: text content */}
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <h1 className="text-white font-bold text-4xl sm:text-5xl leading-tight">
                Sebastián Orlando
              </h1>
              <h1 className="text-cyan-400 font-bold text-4xl sm:text-5xl leading-tight">
                Manchabajoy Rosero
              </h1>
            </div>

            <div>
              <p className="text-white text-lg font-medium">Estudiante de Ingeniería de Software</p>
              <p className="text-gray-300 text-sm mt-1">Soporte TI | Desarrollo Web</p>
            </div>

            <p className="text-gray-300 text-sm italic max-w-md">
              &quot;Apasionado por la tecnología, el aprendizaje continuo y la solución de problemas.&quot;
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#proyectos"
                className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Ver proyectos →
              </a>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="w-64 sm:w-80 shrink-0 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 relative">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,100,100,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,100,100,0.5) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <Image
              src="/profile.jpg"
              alt="Sebastián Manchabajoy"
              width={400}
              height={500}
              className="w-full object-cover object-top"
              priority
            />
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}

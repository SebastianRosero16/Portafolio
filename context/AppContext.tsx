"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";
type Theme = "light" | "dark";

interface AppContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.sports": "Deportes",
    "nav.references": "Testimonios",
    "nav.goals": "Objetivos",
    "nav.contact": "Contacto",
    // Hero
    "hero.welcome": "Bienvenido a mi portafolio",
    "hero.role": "Estudiante de Ingeniería de Software",
    "hero.subrole": "Soporte TI | Desarrollo Web",
    "hero.quote": "Apasionado por la tecnología, el aprendizaje continuo y la solución de problemas.",
    "hero.projects": "Ver proyectos →",
    "hero.cv": "Descargar CV",
    // About
    "about.title": "Sobre Mí",
    "about.bio": "Estudiante de Ingeniería de Software con formación en soporte TI, desarrollo web básico y herramientas digitales. Responsable, adaptable y con habilidades en atención al cliente y trabajo en equipo. Dominio del idioma inglés.",
    "about.skills": "Habilidades",
    "about.technical": "Habilidades Técnicas",
    "about.soft": "Habilidades Blandas",
    "about.profile": "Perfil Profesional",
    "about.profile.desc": "Estudiante de Ingeniería de Software con formación en soporte TI y desarrollo web. Dominio de inglés.",
    "about.focus": "Enfoque",
    "about.focus.desc": "Responsable y adaptable con habilidades en atención al cliente.",
    "about.experience": "Experiencia",
    "about.experience.desc": "Conocimientos en herramientas digitales y solución de problemas técnicos.",
    "about.values": "Valores",
    "about.values.desc": "Trabajo en equipo, aprendizaje continuo y dedicación profesional.",
    // Education
    "education.title": "Educación y Certificaciones",
    "education.academic": "Formación Académica",
    "education.courses": "Cursos y Certificaciones",
    "education.ongoing": "En curso",
    "education.completed": "Completado",
    // Experience
    "experience.title": "Experiencia Laboral",
    "experience.achievements": "Logros y Responsabilidades:",
    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Algunos de los proyectos en los que he trabajado durante mi formación",
    "projects.technologies": "Tecnologías:",
    "projects.code": "Ver Código",
    // Sports
    "sports.title": "Disciplina y Logros Deportivos",
    "sports.subtitle": "El deporte ha sido fundamental en mi formación personal y profesional",
    "sports.skills": "Habilidades Desarrolladas",
    // References
    "references.title": "Testimonios",
    "references.subtitle": "Lo que dicen quienes han trabajado conmigo",
    "references.role": "Referencia Profesional",
    // Goals
    "goals.title": "Objetivos Profesionales",
    "goals.subtitle": "Mi visión y metas para el futuro profesional",
    "goals.cta.title": "¿Trabajamos juntos?",
    "goals.cta.subtitle": "Estoy siempre abierto a nuevas oportunidades y colaboraciones",
    "goals.cta.button": "Contactar",
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos!",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.subtitle": "Completa el formulario y me pondré en contacto contigo pronto",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "¿En qué puedo ayudarte?",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntame sobre tu proyecto...",
    "contact.form.send": "Enviar Mensaje",
    "contact.social": "También puedes encontrarme en:",
    // Footer
    "footer.desc": "Estudiante de Ingeniería de Software apasionado por la tecnología y el desarrollo web.",
    "footer.links": "Enlaces Rápidos",
    "footer.contact": "Contacto",
    "footer.rights": "© 2026 Sebastián Orlando Manchabajoy Rosero. Todos los derechos reservados.",
    // About skills
    "about.skills.it": "Soporte TI",
    "about.skills.web": "Desarrollo Web",
    "about.skills.ai": "Herramientas de IA",
    "about.soft.communication": "Comunicación",
    "about.soft.teamwork": "Trabajo en Equipo",
    "about.soft.responsibility": "Responsabilidad",
    "about.soft.adaptability": "Adaptabilidad",
    "about.soft.problem": "Resolución de Problemas",
    "about.soft.leadership": "Liderazgo",
    // Academic Experience
    "exp.academic.title": "Experiencia Académica",
    "exp.academic.degree": "Ingeniería de Software",
    "exp.academic.degree.sub": "Estudiante activo en formación universitaria",
    "exp.academic.tech": "Técnico en Asistencia y Soporte de Tecnologías de la Información",
    "exp.academic.tech.sub": "Certificación técnica SENA",
    "exp.certifications": "Certificaciones",
    "exp.cert.1": "DevOps con GitLab",
    "exp.cert.2": "Creación de Páginas Web con Chat GPT",
    "exp.cert.3": "Herramientas de Inteligencia Artificial para Equipos de Datos",
    "exp.cert.4": "JavaScript",
    "exp.cert.5": "Aplicaciones Android con Appinventor (AACA)",
    "exp.cert.6": "Acoso Escolar: Prevención, Detección y Actuación (APDA)",
    "exp.cert.7": "Nivel Sensibilización de la Comunidad - Fortalecimiento de Competencias (ETFC)",
    // Education
    "edu.software": "Ingeniería de Software",
    "edu.software.sub": "Universidad",
    "edu.sena": "Tecnólogo SENA",
    "edu.sena.sub": "SENA",
    "edu.support": "Técnico en Soporte TI",
    "edu.support.sub": "Certificación Técnica",
    "edu.english": "Certificado de Eficiencia en Inglés",
    "edu.english.sub": "Certificación de Idiomas",
    "edu.devops": "DevOps con GitLab",
    "edu.js": "JavaScript Moderno",
    "edu.ai": "Inteligencia Artificial",
    "edu.appinventor": "App Inventor",
    "edu.online": "Plataforma Online",
    // Experience
    "exp.job1.title": "Desarrollador Web Junior",
    "exp.job1.company": "Desarrollo Freelance",
    "exp.job1.period": "2024 - Presente",
    "exp.job1.location": "Remoto",
    "exp.job1.a1": "Desarrollo de aplicaciones web con JavaScript, HTML y CSS",
    "exp.job1.a2": "Creación de interfaces intuitivas y responsivas",
    "exp.job1.a3": "Implementación de soluciones con inteligencia artificial",
    "exp.job1.a4": "Diseño y desarrollo de plataformas de gestión de contenido",
    "exp.job2.title": "Desarrollador de Software",
    "exp.job2.company": "Proyectos Académicos",
    "exp.job2.period": "2023 - 2024",
    "exp.job2.location": "Universidad",
    "exp.job2.a1": "Desarrollo de aplicaciones móviles y web",
    "exp.job2.a2": "Integración de APIs y servicios externos",
    "exp.job2.a3": "Trabajo colaborativo usando Git y control de versiones",
    "exp.job2.a4": "Implementación de bases de datos y sistemas de gestión",
    // Projects
    "proj.agro.title": "AgroSmart - Plataforma Agrícola con IA",
    "proj.agro.desc": "Sistema completo de venta de productos e insumos agrícolas con IA integrada para comparar precios, recomendar productos económicos y asesorar a agricultores en el diagnóstico de problemas de cultivos.",
    "proj.linkedin.title": "Plataforma Profesional - Estilo LinkedIn",
    "proj.linkedin.desc": "Red social profesional para conectar profesionales, compartir experiencias laborales y establecer contactos de negocios con sistema de perfiles y mensajería.",
    "proj.mp3.title": "Reproductor de Música MP3",
    "proj.mp3.desc": "Aplicación de reproducción de música con controles intuitivos, playlist personalizada, y gestión completa de biblioteca musical.",
    "proj.alarm.title": "Alarma Mundial Multi-Zona",
    "proj.alarm.desc": "Sistema de alarma con soporte para diferentes zonas horarias internacionales, permitiendo programar recordatorios en horarios de múltiples países.",
    "proj.ui.title": "Diseño de Interfaces Intuitivas",
    "proj.ui.desc": "Colección de interfaces de usuario modernas y accesibles, enfocadas en experiencia del usuario y diseño responsivo.",
    "proj.dashboard.title": "Soporte TI Dashboard",
    "proj.dashboard.desc": "Panel de control para gestión de tickets de soporte técnico con seguimiento en tiempo real y sistema de prioridades.",
    // Sports
    "sports.champion.title": "Campeón Departamental",
    "sports.champion.desc": "Ganador del torneo departamental en Pereira",
    "sports.national.title": "Participación Nacional",
    "sports.national.desc": "Torneos municipales, departamentales y nacionales",
    "sports.years.title": "15 Años de Experiencia",
    "sports.years.desc": "Practicando fútbol desde los 6 años",
    "sports.leadership.title": "Liderazgo Deportivo",
    "sports.leadership.desc": "Desarrollo de habilidades de liderazgo y trabajo en equipo",
    "sports.skill.discipline": "Disciplina",
    "sports.skill.teamwork": "Trabajo en Equipo",
    "sports.skill.leadership": "Liderazgo",
    "sports.skill.perseverance": "Perseverancia",
    "sports.skill.commitment": "Compromiso",
    "sports.skill.resilience": "Resiliencia",
    // References
    "ref.frey.q1": "Sebastián tiene un talento excepcional para resolver problemas técnicos de manera rápida y eficiente.",
    "ref.frey.q2": "Su conocimiento en desarrollo de software y soporte técnico es impresionante para alguien de su edad.",
    "ref.frey.q3": "Siempre se mantiene actualizado con las últimas tecnologías y demuestra un gran compromiso con la calidad.",
    "ref.wilson.q1": "Excelente habilidad para diagnosticar y reparar computadores. Resuelve cualquier problema de hardware o software.",
    "ref.wilson.q2": "Su capacidad de explicar conceptos técnicos de manera sencilla a los clientes es destacable.",
    "ref.wilson.q3": "Muy profesional y confiable. Siempre cumple con los plazos establecidos en sus proyectos de desarrollo.",
    "ref.eddy.q1": "Sebastián desarrolló una aplicación web para nuestro negocio que superó todas nuestras expectativas.",
    "ref.eddy.q2": "Además de sus habilidades técnicas, su capacidad de trabajo en equipo y comunicación son excepcionales.",
    "ref.eddy.q3": "Su atención al detalle y creatividad en el diseño de interfaces es sobresaliente.",
    // Goals
    "goal.1.title": "Crecer como Desarrollador Web",
    "goal.1.timeframe": "Corto-Mediano Plazo",
    "goal.1.desc": "Convertirme en un desarrollador full-stack competente, dominando tanto frontend como backend",
    "goal.2.title": "Mejorar Nivel de Inglés",
    "goal.2.timeframe": "Mediano Plazo",
    "goal.2.desc": "Alcanzar un nivel avanzado de inglés técnico para acceder a mejores oportunidades internacionales",
    "goal.3.title": "Trabajar en el Sector Tecnológico",
    "goal.3.timeframe": "Mediano-Largo Plazo",
    "goal.3.desc": "Formar parte de una empresa tecnológica donde pueda aplicar y expandir mis conocimientos",
    "goal.4.title": "Contribuir a Proyectos Open Source",
    "goal.4.timeframe": "Largo Plazo",
    "goal.4.desc": "Participar activamente en la comunidad de desarrolladores y contribuir a proyectos de código abierto",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.sports": "Sports",
    "nav.references": "Testimonials",
    "nav.goals": "Goals",
    "nav.contact": "Contact",
    // Hero
    "hero.welcome": "Welcome to my portfolio",
    "hero.role": "Software Engineering Student",
    "hero.subrole": "IT Support | Web Development",
    "hero.quote": "Passionate about technology, continuous learning and problem solving.",
    "hero.projects": "View projects →",
    "hero.cv": "Download CV",
    // About
    "about.title": "About Me",
    "about.bio": "Software Engineering student with training in IT support, basic web development and digital tools. Responsible, adaptable with customer service and teamwork skills. English proficiency.",
    "about.skills": "Skills",
    "about.technical": "Technical Skills",
    "about.soft": "Soft Skills",
    "about.profile": "Professional Profile",
    "about.profile.desc": "Software Engineering student with IT support and web development training. English proficiency.",
    "about.focus": "Focus",
    "about.focus.desc": "Responsible and adaptable with customer service skills.",
    "about.experience": "Experience",
    "about.experience.desc": "Knowledge in digital tools and technical problem solving.",
    "about.values": "Values",
    "about.values.desc": "Teamwork, continuous learning and professional dedication.",
    // Education
    "education.title": "Education & Certifications",
    "education.academic": "Academic Background",
    "education.courses": "Courses & Certifications",
    "education.ongoing": "In progress",
    "education.completed": "Completed",
    // Experience
    "experience.title": "Work Experience",
    "experience.achievements": "Achievements & Responsibilities:",
    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Some of the projects I have worked on during my training",
    "projects.technologies": "Technologies:",
    "projects.code": "View Code",
    // Sports
    "sports.title": "Discipline & Sports Achievements",
    "sports.subtitle": "Sports has been fundamental in my personal and professional development",
    "sports.skills": "Developed Skills",
    // References
    "references.title": "Testimonials",
    "references.subtitle": "What those who have worked with me say",
    "references.role": "Professional Reference",
    // Goals
    "goals.title": "Professional Goals",
    "goals.subtitle": "My vision and goals for the professional future",
    "goals.cta.title": "Shall we work together?",
    "goals.cta.subtitle": "I am always open to new opportunities and collaborations",
    "goals.cta.button": "Contact",
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.form.title": "Send me a message",
    "contact.form.subtitle": "Fill out the form and I will get in touch with you soon",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.placeholder": "you@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "How can I help you?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell me about your project...",
    "contact.form.send": "Send Message",
    "contact.social": "You can also find me at:",
    // Footer
    "footer.desc": "Software Engineering student passionate about technology and web development.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 Sebastián Orlando Manchabajoy Rosero. All rights reserved.",
    // About skills
    "about.skills.it": "IT Support",
    "about.skills.web": "Web Development",
    "about.skills.ai": "AI Tools",
    "about.soft.communication": "Communication",
    "about.soft.teamwork": "Teamwork",
    "about.soft.responsibility": "Responsibility",
    "about.soft.adaptability": "Adaptability",
    "about.soft.problem": "Problem Solving",
    "about.soft.leadership": "Leadership",
    // Academic Experience
    "exp.academic.title": "Academic Experience",
    "exp.academic.degree": "Software Engineering",
    "exp.academic.degree.sub": "Active student in university training",
    "exp.academic.tech": "Technician in IT Assistance and Support",
    "exp.academic.tech.sub": "SENA technical certification",
    "exp.certifications": "Certifications",
    "exp.cert.1": "DevOps with GitLab",
    "exp.cert.2": "Creating Web Pages with Chat GPT",
    "exp.cert.3": "Artificial Intelligence Tools for Data Teams",
    "exp.cert.4": "JavaScript",
    "exp.cert.5": "Android Apps with Appinventor (AACA)",
    "exp.cert.6": "School Bullying: Prevention, Detection and Action (APDA)",
    "exp.cert.7": "Community Awareness Level - Skills Strengthening (ETFC)",
    // Education
    "edu.software": "Software Engineering",
    "edu.software.sub": "University",
    "edu.sena": "SENA Technologist",
    "edu.sena.sub": "SENA",
    "edu.support": "IT Support Technician",
    "edu.support.sub": "Technical Certification",
    "edu.english": "English Proficiency Certificate",
    "edu.english.sub": "Language Certification",
    "edu.devops": "DevOps with GitLab",
    "edu.js": "Modern JavaScript",
    "edu.ai": "Artificial Intelligence",
    "edu.appinventor": "App Inventor",
    "edu.online": "Online Platform",
    // Experience
    "exp.job1.title": "Junior Web Developer",
    "exp.job1.company": "Freelance Development",
    "exp.job1.period": "2024 - Present",
    "exp.job1.location": "Remote",
    "exp.job1.a1": "Web application development with JavaScript, HTML and CSS",
    "exp.job1.a2": "Creation of intuitive and responsive interfaces",
    "exp.job1.a3": "Implementation of solutions with artificial intelligence",
    "exp.job1.a4": "Design and development of content management platforms",
    "exp.job2.title": "Software Developer",
    "exp.job2.company": "Academic Projects",
    "exp.job2.period": "2023 - 2024",
    "exp.job2.location": "University",
    "exp.job2.a1": "Development of mobile and web applications",
    "exp.job2.a2": "Integration of APIs and external services",
    "exp.job2.a3": "Collaborative work using Git and version control",
    "exp.job2.a4": "Implementation of databases and management systems",
    // Projects
    "proj.agro.title": "AgroSmart - Agricultural Platform with AI",
    "proj.agro.desc": "Complete system for selling agricultural products and supplies with integrated AI to compare prices, recommend economical products and advise farmers on crop problem diagnosis.",
    "proj.linkedin.title": "Professional Platform - LinkedIn Style",
    "proj.linkedin.desc": "Professional social network to connect professionals, share work experiences and establish business contacts with profile and messaging system.",
    "proj.mp3.title": "MP3 Music Player",
    "proj.mp3.desc": "Music playback application with intuitive controls, personalized playlist, and complete music library management.",
    "proj.alarm.title": "World Multi-Zone Alarm",
    "proj.alarm.desc": "Alarm system with support for different international time zones, allowing reminders to be scheduled in multiple countries' schedules.",
    "proj.ui.title": "Intuitive Interface Design",
    "proj.ui.desc": "Collection of modern and accessible user interfaces, focused on user experience and responsive design.",
    "proj.dashboard.title": "IT Support Dashboard",
    "proj.dashboard.desc": "Control panel for managing technical support tickets with real-time tracking and priority system.",
    // Sports
    "sports.champion.title": "Departmental Champion",
    "sports.champion.desc": "Winner of the departmental tournament in Pereira",
    "sports.national.title": "National Participation",
    "sports.national.desc": "Municipal, departmental and national tournaments",
    "sports.years.title": "15 Years of Experience",
    "sports.years.desc": "Playing football since age 6",
    "sports.leadership.title": "Sports Leadership",
    "sports.leadership.desc": "Development of leadership and teamwork skills",
    "sports.skill.discipline": "Discipline",
    "sports.skill.teamwork": "Teamwork",
    "sports.skill.leadership": "Leadership",
    "sports.skill.perseverance": "Perseverance",
    "sports.skill.commitment": "Commitment",
    "sports.skill.resilience": "Resilience",
    // References
    "ref.frey.q1": "Sebastián has an exceptional talent for solving technical problems quickly and efficiently.",
    "ref.frey.q2": "His knowledge in software development and technical support is impressive for someone his age.",
    "ref.frey.q3": "He always stays up to date with the latest technologies and demonstrates a great commitment to quality.",
    "ref.wilson.q1": "Excellent ability to diagnose and repair computers. Solves any hardware or software problem.",
    "ref.wilson.q2": "His ability to explain technical concepts in a simple way to clients is remarkable.",
    "ref.wilson.q3": "Very professional and reliable. Always meets deadlines in his development projects.",
    "ref.eddy.q1": "Sebastián developed a web application for our business that exceeded all our expectations.",
    "ref.eddy.q2": "In addition to his technical skills, his teamwork and communication skills are exceptional.",
    "ref.eddy.q3": "His attention to detail and creativity in interface design is outstanding.",
    // Goals
    "goal.1.title": "Grow as a Web Developer",
    "goal.1.timeframe": "Short-Medium Term",
    "goal.1.desc": "Become a competent full-stack developer, mastering both frontend and backend",
    "goal.2.title": "Improve English Level",
    "goal.2.timeframe": "Medium Term",
    "goal.2.desc": "Reach an advanced level of technical English to access better international opportunities",
    "goal.3.title": "Work in the Technology Sector",
    "goal.3.timeframe": "Medium-Long Term",
    "goal.3.desc": "Be part of a technology company where I can apply and expand my knowledge",
    "goal.4.title": "Contribute to Open Source Projects",
    "goal.4.timeframe": "Long Term",
    "goal.4.desc": "Actively participate in the developer community and contribute to open source projects",
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<Theme>("light");

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const t = (key: string): string => translations[language][key] ?? key;

  return (
    <AppContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

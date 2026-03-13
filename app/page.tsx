"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { projects } from "@/app/data/projects";
import Navbar from "@/components/Navbar";
import MarcaSection from "@/components/MarcaSection";

export type SectionId =
  | "inicio"
  | "marca"
  | "enfoque"
  | "metodologia"
  | "valores"
  | "proyectos"
  | "contacto";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function VizaMXLandingPage() {
  const mounted = useIsClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("inicio");

  const pillars = [
    "Marca con identidad sólida y visión estratégica",
    "Comunicación clara, seria y ejecutiva",
    "Presencia digital elegante y memorable",
    "Base visual lista para crecer a portafolio, servicios y contacto",
  ];

  const methodology = [
    {
      step: "01",
      title: "Observar",
      desc: "Todo inicia con una observación estratégica del entorno para detectar problemas reales, áreas de oportunidad y puntos de innovación.",
    },
    {
      step: "02",
      title: "Analizar",
      desc: "El problema se descompone en partes para encontrar la causa raíz, comprender variables y traducir el caos en claridad útil.",
    },
    {
      step: "03",
      title: "Diseñar",
      desc: "La solución se construye desde la lógica, con visión estética, orden, experiencia de uso y propósito funcional.",
    },
    {
      step: "04",
      title: "Implementar",
      desc: "La idea se lleva a la práctica para medir funcionalidad, validar resultados y confrontar la teoría con la realidad.",
    },
    {
      step: "05",
      title: "Optimizar",
      desc: "Toda solución evoluciona: se ajusta, mejora, escala y mantiene activa la innovación con base en resultados reales.",
    },
  ];

  useEffect(() => {
    if (!mounted) return;

    const fadeTimer = window.setTimeout(() => {
      setFadeLoader(true);
    }, 1500);

    const hideTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 2200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const sectionIds: SectionId[] = [
      "inicio",
      "marca",
      "enfoque",
      "metodologia",
      "valores",
      "proyectos",
      "contacto",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const handleScroll = () => {
      const triggerLine = 180;
      let current: SectionId = "inicio";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
          current = section.id as SectionId;
          break;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const handleWhatsAppSubmit = () => {
    const text = `Hola, vi la página de VIZAMX.

Nombre: ${name}
Correo: ${email}

Mensaje:
${message}`;

    const url = `https://wa.me/523311124973?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleEmailSubmit = () => {
    const subject = "Contacto desde la página VIZAMX";

    const body = `Nombre: ${name}
Correo: ${email}

Mensaje:
${message}`;

    const mailto = `mailto:vizainnovationmx@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      {mounted && showLoader && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#071411] transition-opacity duration-700 ${
            fadeLoader ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative px-6 text-center">
            <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b15f]/10 blur-3xl" />

            <div className="mx-auto mb-8 flex justify-center">
              <div className="relative h-[220px] w-[220px] md:h-[280px] md:w-[280px]">
                <Image
                  src="/lobo-vizamx.png"
                  alt="Logo VIZAMX"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d9b15f] md:text-xs">
              Marca estratégica
            </p>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-[#071411] text-white">
        <Navbar activeSection={activeSection} />

        {/* INICIO — NO SE TOCA */}
        <section
          id="inicio"
          className="mx-auto max-w-[1800px] px-6 pt-28 pb-24 md:px-10"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#d9b15f] md:text-lg">
                  VISUAL INNOVATION MX
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-5xl font-black text-white md:text-[5rem] xl:text-[5.5rem]">
                  VIZAMX
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-10 max-w-[720px] text-xl leading-relaxed text-[#d9b15f] md:text-[1.5rem]">
                  DONDE LAS IDEAS SE ESTRUCTURAN, LAS ESTRATEGIAS SE ALINEAN Y
                  LOS PROYECTOS TOMAN DIRECCIÓN REAL.
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={120}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]">
                <div className="absolute inset-0 rounded-full bg-[#d9b15f]/10 blur-3xl" />
                <Image
                  src="/lobo-vizamx.png"
                  alt="VIZAMX"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARCA */}
        <MarcaSection />

        {/* ENFOQUE */}
        <section
          id="enfoque"
          className="mx-auto max-w-[1800px] px-6 py-20 md:px-10 md:py-24"
        >
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#d9b15f] md:text-lg">
              ENFOQUE
            </p>

            <h2 className="text-4xl font-black leading-[0.98] md:text-[4.4rem] xl:text-[5rem]">
              Convertimos problemas
              <br />
              en estructura.
            </h2>

            <p className="mt-6 max-w-6xl text-lg leading-relaxed text-white/80 md:text-2xl">
              Diseñamos sistemas claros para ordenar decisiones, operaciones y
              proyectos con visión ejecutiva.
            </p>
          </Reveal>
        </section>

        {/* METODOLOGÍA */}
        <section
          id="metodologia"
          className="mx-auto max-w-[1800px] px-6 py-20 md:px-10 md:py-24"
        >
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#d9b15f] md:text-lg">
              METODOLOGÍA
            </p>

            <h2 className="max-w-6xl text-4xl font-black leading-[0.98] md:text-[4.4rem] xl:text-[5rem]">
              CONVERTIMOS IDEAS EN SISTEMAS.
            </h2>

            <p className="mt-6 max-w-6xl text-lg leading-relaxed text-white/80 md:text-2xl">
              Observamos, analizamos, diseñamos, implementamos y optimizamos
              con una lógica clara, funcional y escalable.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {methodology.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b15f]/30 hover:shadow-[0_18px_60px_rgba(217,177,95,0.12)]">
                  <p className="mb-7 text-3xl font-bold text-[#d9b15f]">
                    {item.step}
                  </p>

                  <h3 className="mb-5 text-3xl font-black md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-white/80">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VALORES */}
        <section
          id="valores"
          className="mx-auto max-w-[1800px] px-6 py-20 md:px-10 md:py-24"
        >
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#d9b15f] md:text-lg">
              VALORES
            </p>

            <h2 className="max-w-6xl text-4xl font-black leading-[0.98] md:text-[4.4rem] xl:text-[5rem]">
              PRINCIPIOS QUE SOSTIENEN CADA SISTEMA.
            </h2>

            <p className="mt-6 max-w-6xl text-lg leading-relaxed text-white/80 md:text-2xl">
              Nuestra base combina claridad, dirección estratégica, presencia y
              visión de crecimiento para construir propuestas sólidas.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar} delay={index * 80}>
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b15f]/30 hover:shadow-[0_18px_60px_rgba(217,177,95,0.12)]">
                  <p className="text-lg leading-relaxed text-white/85">
                    {pillar}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section
          id="proyectos"
          className="mx-auto max-w-[1800px] px-6 py-20 md:px-10 md:py-24"
        >
          <Reveal>
            <p className="mb-10 text-sm uppercase tracking-[0.32em] text-[#d9b15f] md:text-lg">
              PROYECTOS
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d9b15f]/35 hover:bg-white/[0.07] hover:shadow-[0_22px_70px_rgba(217,177,95,0.12)]"
                >
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071411]/55 via-transparent to-transparent" />
                  </div>

                  <div className="p-8">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <h3 className="max-w-[70%] text-3xl font-black leading-tight text-white">
                        {project.title}
                      </h3>

                      <div className="rounded-full border border-[#d9b15f]/40 bg-[#d9b15f]/10 px-5 py-2 text-sm tracking-[0.22em] text-[#d9b15f] transition group-hover:bg-[#d9b15f] group-hover:text-[#071411]">
                        ABRIR
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-white/75">
                      {project.short}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="mx-auto max-w-[1800px] px-6 py-20 md:px-10 md:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
            <Reveal>
              <div>
                <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#d9b15f] md:text-lg">
                  CONTACTO
                </p>

                <h2 className="text-4xl font-black leading-[0.98] md:text-[4.4rem] xl:text-[5rem]">
                  Hablemos del
                  <br />
                  siguiente sistema.
                </h2>

                <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/80 md:text-2xl">
                  Estructuramos ideas, marcas y proyectos con una lógica clara
                  de diseño, operación y ejecución.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <div className="grid gap-5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-lg text-white outline-none placeholder:text-white/40 focus:border-[#d9b15f]/35"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo"
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-lg text-white outline-none placeholder:text-white/40 focus:border-[#d9b15f]/35"
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mensaje"
                    rows={6}
                    className="resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-lg text-white outline-none placeholder:text-white/40 focus:border-[#d9b15f]/35"
                  />

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="rounded-full bg-[#d9b15f] px-7 py-4 text-lg font-semibold text-[#071411] transition hover:opacity-90"
                    >
                      Enviar por WhatsApp
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="rounded-full border border-[#d9b15f]/40 px-7 py-4 text-lg font-semibold text-[#d9b15f] transition hover:bg-[#d9b15f] hover:text-[#071411]"
                    >
                      Enviar por correo
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
"use client";

import { SectionId } from "@/app/page";

type Props = {
  activeSection: SectionId;
};

const navItems: { label: string; id: SectionId }[] = [
  { label: "Inicio", id: "inicio" },
  { label: "Marca", id: "marca" },
  { label: "Enfoque", id: "enfoque" },
  { label: "Metodología", id: "metodologia" },
  { label: "Valores", id: "valores" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar({ activeSection }: Props) {
  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#071411]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-4 md:px-10">

        {/* LOGO */}
        <div className="text-lg font-black tracking-[0.25em] text-[#d9b15f]">
          VIZAMX
        </div>

        {/* LINKS */}
        <div className="hidden gap-8 md:flex">

          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm uppercase tracking-[0.22em] transition 
                
                ${
                  isActive
                    ? "text-[#d9b15f]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}

        </div>

      </div>
    </nav>
  );
}
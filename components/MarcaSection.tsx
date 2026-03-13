"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Claridad",
    description:
      "Transformamos conceptos complejos en sistemas visuales comprensibles, sólidos y bien dirigidos.",
  },
  {
    title: "Precisión",
    description:
      "Cada decisión responde a estructura, intención y criterio, con atención real al detalle.",
  },
  {
    title: "Proyección",
    description:
      "Construimos propuestas pensadas para evolucionar con consistencia y visión estratégica.",
  },
];

export default function MarcaSection() {
  return (
    <section
      id="marca"
      className="relative overflow-hidden border-t border-white/10 bg-[#071411]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-16 h-64 w-64 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="absolute right-[-8%] top-32 h-72 w-72 rounded-full bg-cyan-400/6 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
      </div>

      <div className="relative mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
            Marca
          </span>

          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            Una marca construida desde la visión, la estructura y la precisión.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
            VIZAMX integra pensamiento estratégico, claridad visual y criterio
            técnico para desarrollar propuestas con identidad, dirección y
            profundidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-md md:mt-16 md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                Posicionamiento
              </p>

              <p className="mt-5 max-w-3xl text-xl leading-relaxed tracking-[-0.02em] text-white sm:text-2xl md:text-[2rem] md:leading-[1.45]">
                VIZAMX nace como una propuesta donde la innovación visual, la
                metodología y la precisión se convierten en sistema.
              </p>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-7 text-white/60">
                No se trata solo de comunicar ideas, sino de organizarlas con
                claridad, proyectarlas con intención y convertirlas en una
                estructura visual con presencia y dirección.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 md:mt-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.12,
                ease: "easeOut",
              }}
              className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35">
                  0{index + 1}
                </span>
                <span className="h-px w-10 bg-white/10 transition-all duration-300 group-hover:w-14 group-hover:bg-emerald-300/40" />
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-white">
                {pillar.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/62 sm:text-[15px]">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.56, ease: "easeOut" }}
          className="mt-12 border-t border-white/10 pt-8 md:mt-14"
        >
          <p className="max-w-3xl text-sm leading-7 text-white/54 sm:text-base">
            VIZAMX convierte ideas en lenguaje visual con presencia, método y
            dirección estratégica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
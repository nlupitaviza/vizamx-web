import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#071411] pt-28 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/#proyectos"
          className="inline-flex items-center rounded-full border border-[#d9b15f]/40 px-5 py-2 text-[#d9b15f] transition hover:bg-[#d9b15f] hover:text-[#071411]"
        >
          ← Volver a proyectos
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d9b15f]">
              Proyecto
            </p>

            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
              {project.title}
            </h1>

            <p className="text-lg leading-8 text-white/75">
              {project.short}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="relative h-[420px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-bold">Objetivo</h2>
            <p className="leading-8 text-white/75">
              {project.objective}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-bold">Enfoque</h2>
            <p className="leading-8 text-white/75">
              {project.focus}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
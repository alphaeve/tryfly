import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "HealthTrack",
    category: "Mobile App",
    description:
      "A cross-platform healthcare app for tracking patients and appointments.",
    image: "/projects/healthtrack.png",
    tech: ["Flutter", "Firebase", "Node.js"],
    slug: "healthtrack",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description:
      "A scalable e-commerce platform with custom admin dashboard.",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    slug: "ecommerce-platform",
  },
  {
    title: "CRM System",
    category: "Custom Software",
    description:
      "Internal CRM tool to manage sales pipelines and customers.",
    image: "/projects/crm.png",
    tech: ["React", "Laravel", "MySQL"],
    slug: "crm-system",
  },
];

export default function WorkPage() {
  return (
    <section className="bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            We help startups and businesses turn ideas into scalable digital
            products. Here are some projects we’re proud of.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/work/${project.slug}`}
              className="group rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <span className="text-sm font-medium text-cyan-500">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-semibold text-cyan-500">
                  View Case Study →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

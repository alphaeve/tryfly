import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies for scalability and speed.",
    features: ["Next.js", "React", "Node.js", "E-commerce", "CMS"],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications designed for performance and great user experience.",
    features: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    title: "UI / UX Design",
    description:
      "User-centered design that improves engagement, usability, and conversion rates.",
    features: ["User Research", "Wireframes", "Prototypes", "Design Systems"],
  },
  {
    title: "Custom Software",
    description:
      "Tailor-made software solutions that solve complex business problems and scale with your company.",
    features: ["SaaS", "APIs", "CRM Systems", "Cloud Apps"],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            We provide end-to-end digital solutions to help businesses grow,
            scale, and succeed in the digital world.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-200 bg-white p-8 transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium dark:bg-zinc-800"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Let’s discuss your idea and build something great together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

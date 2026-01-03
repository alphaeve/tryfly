import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Trifly Solution
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            We are a digital product agency focused on building scalable,
            high-quality software solutions for startups and growing businesses.
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Our mission is to help businesses transform ideas into powerful
              digital products through clean code, thoughtful design, and modern
              technology.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We aim to become a trusted technology partner for companies
              worldwide by delivering reliable, scalable, and future-proof
              software solutions.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-24">
          <h2 className="mb-10 text-3xl font-bold">Our Core Values</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quality First",
                desc: "We prioritize clean, maintainable, and scalable code.",
              },
              {
                title: "Transparency",
                desc: "Clear communication and honest collaboration with clients.",
              },
              {
                title: "Innovation",
                desc: "We use modern tools and technologies to stay ahead.",
              },
              {
                title: "Client Success",
                desc: "Your success is our ultimate measure of achievement.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM (OPTIONAL) */}
        <div className="mt-24">
          <h2 className="mb-6 text-3xl font-bold">Who We Work With</h2>
          <p className="max-w-3xl text-zinc-600 dark:text-zinc-400">
            We collaborate with startups, entrepreneurs, and businesses looking
            to build or scale digital products with long-term vision.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 p-12 text-center text-black">
          <h2 className="text-3xl font-bold">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Whether you’re starting from scratch or scaling an existing product,
            Trifly Solution is here to help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-zinc-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

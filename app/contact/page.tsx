export default function ContactPage() {
  return (
    <section className="bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 py-24">
        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Have a project in mind? Fill out the form below and we’ll get back to
            you shortly.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan-500 dark:border-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan-500 dark:border-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Project Type</label>
            <select className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan-500 dark:border-zinc-700">
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI / UX Design</option>
              <option>Custom Software</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan-500 dark:border-zinc-700"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Send Message
          </button>
        </form>

        {/* DIRECT CONTACT */}
        <div className="mt-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Or email us at{" "}
          <span className="font-semibold text-cyan-500">
            hello@triflysolution.com
          </span>
        </div>
      </div>
    </section>
  );
}

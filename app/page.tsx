// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-semibold">MBA Firm</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get a Data-Driven Health Check — Fix Bottlenecks & Improve Efficiency
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            We help airlines and MROs unlock performance with diagnostics, data services, and modern software.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-2xl shadow border font-medium">
              Book a 48-hour Health Check
            </a>
            <a href="#case-studies" className="px-5 py-3 rounded-2xl border font-medium">
              See case studies
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Project Management", text: "Plan and deliver upgrades and implementations." },
            { title: "Consulting", text: "Health checks, process optimization, training." },
            { title: "Data Services", text: "ETL, dashboards, analytics, migrations." },
          ].map((s) => (
            <article key={s.title} className="rounded-2xl border shadow-sm p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="case-studies" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Case Studies</h2>
        <p className="text-gray-600">Coming soon…</p>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <form className="grid gap-4 max-w-xl">
          <input className="border rounded-xl p-3" placeholder="Your name" required />
          <input className="border rounded-xl p-3" type="email" placeholder="Email" required />
          <textarea className="border rounded-xl p-3" placeholder="How can we help?" rows={5} required />
          <button className="justify-self-start px-5 py-3 rounded-2xl shadow border font-medium" type="submit">
            Send
          </button>
        </form>
      </section>

      <footer className="mt-24 border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
          © {new Date().getFullYear()} MBA Firm, LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

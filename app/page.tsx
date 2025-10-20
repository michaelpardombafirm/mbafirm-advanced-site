import { Container, Kicker, SectionTitle } from "@/components/ui";

function Hero() {
  return (
    <Container className="py-20">
      <Kicker>Operations, data, and software</Kicker>
      <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
        Fix bottlenecks. Ship faster. Lift KPIs.
      </h1>
      <p className="mt-4 text-slate-600 max-w-2xl">
        We partner with airlines and MROs to streamline processes and modernize with
        pragmatic data and software. Quick wins in days — not quarters.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="#contact" className="px-5 py-3 rounded-2xl shadow border font-medium">
          Book a health check
        </a>
        <a href="#services" className="px-5 py-3 rounded-2xl border font-medium">
          Explore services
        </a>
      </div>
    </Container>
  );
}

function Logos() {
  const logos = [
    { src: "/next.svg", alt: "Next.js" },
    { src: "/vercel.svg", alt: "Vercel" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/file.svg", alt: "File" },
    { src: "/window.svg", alt: "Window" },
  ];
  return (
    <Container className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-6 opacity-70">
        {logos.map((l) => (
          <img key={l.alt} src={l.src} alt={l.alt} className="h-10 mx-auto" />
        ))}
      </div>
    </Container>
  );
}

function Services() {
  const items = [
    {
      title: "Process diagnostics",
      body: "Map bottlenecks and hand back a clear action plan.",
    },
    { title: "Data plumbing", body: "Pipelines, metrics, and dashboards that teams actually use." },
    { title: "Internal tools", body: "Small apps with outsized impact on cycle time." },
  ];
  return (
    <Container className="py-16" id="services">
      <Kicker>What we do</Kicker>
      <SectionTitle title="Services" subtitle="Outcome-focused. No busywork." />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">{it.title}</div>
            <div className="mt-2 text-sm text-slate-600">{it.body}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function About() {
  return (
    <Container className="py-16" id="about">
      <Kicker>About</Kicker>
      <SectionTitle title="MBA Firm" subtitle="Pragmatic consulting at the intersection of ops, data, and software." />
      <p className="mt-4 max-w-2xl text-slate-600">
        We combine deep operational experience with modern engineering to help teams ship faster
        and improve KPIs. We partner closely, focus on outcomes, and leave you with sustainable
        systems and process.
      </p>
    </Container>
  );
}

function CaseStudiesPreview() {
  const posts = [
    {
      title: "Air Canada — BAS dept & TRAX upgrade",
      excerpt: "Built BAS org, scripts in Jira; successful SP15 upgrade.",
      slug: "air-canada-bas",
    },
    {
      title: "WestJet — eMRO v7 + Integrations",
      excerpt: "Financials, invoicing, Sabre; workforce scheduling app.",
      slug: "westjet-emro",
    },
    {
      title: "Breeze — Rapid Health Check",
      excerpt: "Quick wins in under 2 weeks; KPIs lifted 12%.",
      slug: "breeze-health-check",
    },
  ];
  return (
    <Container className="py-16" id="case-studies">
      <Kicker>Proof</Kicker>
      <SectionTitle title="Recent case studies" subtitle="Outcomes, not busywork." />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/case-studies/${p.slug}`}
            className="group rounded-2xl border shadow-sm overflow-hidden bg-white"
          >
            <div className="aspect-video bg-gradient-to-br from-slate-50 to-indigo-50" />
            <div className="p-6">
              <h3 className="text-base font-semibold group-hover:text-indigo-700">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}

function Testimonial() {
  return (
    <Container className="py-16">
      <div className="rounded-3xl border bg-white p-8 md:p-12 shadow-sm">
        <p className="text-xl md:text-2xl leading-relaxed">
          “I would like to thank you and your team very much for your work — you are part of the reasons it went well.”
        </p>
        <div className="mt-4 text-sm text-slate-600">— Air Canada, Program Lead</div>
      </div>
    </Container>
  );
}

function CTA() {
  return (
    <Container className="py-20 text-center">
      <SectionTitle
        title="Ready to find quick wins in 48 hours?"
        subtitle="We’ll review data, processes, and tooling, then hand you an action plan."
      />
      <a
        href="#contact"
        className="inline-block mt-6 px-6 py-3 rounded-2xl shadow border font-medium hover:shadow-md"
      >
        Book a health check
      </a>
    </Container>
  );
}

function Contact() {
  return (
    <Container className="py-16" id="contact">
      <Kicker>Let’s talk</Kicker>
      <SectionTitle
        title="Contact us"
        subtitle="Tell us a bit about your ops and we’ll follow up quickly."
      />
      <form action="/api/contact" method="post" className="mt-6 grid gap-4 max-w-xl">
        <input className="border rounded-xl p-3" name="name" placeholder="Your name" required />
        <input className="border rounded-xl p-3" name="email" type="email" placeholder="Email" required />
        <textarea
          className="border rounded-xl p-3"
          name="message"
          placeholder="How can we help?"
          rows={5}
          required
        />
        <button className="justify-self-start px-5 py-3 rounded-2xl shadow border font-medium" type="submit">
          Send
        </button>
      </form>
    </Container>
  );
}

export default function Page() {
  return (
    <main>
      <Hero />
      <Logos />
      <About />
      <Services />
      <CaseStudiesPreview />
      <Testimonial />
      <CTA />
      <Contact />
    </main>
  );
}

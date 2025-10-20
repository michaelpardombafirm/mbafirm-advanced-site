import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import MobileNav from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "MBA Firm — Consulting, Data, Software",
  description:
    "We help airlines & MROs fix process bottlenecks and modernize with data and software.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  openGraph: {
    title: "MBA Firm — Consulting, Data, Software",
    description:
      "We help airlines & MROs fix process bottlenecks and modernize with data and software.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-slate-900">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <img src="/logo.svg" alt="MBA Firm" className="h-6" />
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/#about" className="hover:text-indigo-600">About</Link>
              <Link href="/#services" className="hover:text-indigo-600">Services</Link>
              <Link href="/#case-studies" className="hover:text-indigo-600">Case Studies</Link>
              <Link href="/#contact" className="hover:text-indigo-600">Contact</Link>
            </nav>
            <MobileNav />
          </div>
        </header>
        {children}
        <footer className="mt-24 border-t bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8 text-sm text-slate-600">
            <div>
              <div className="font-semibold text-slate-900">MBA Firm</div>
              <p className="mt-2">Consulting, data and software for airlines & MROs.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Company</div>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/#about">About</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li>
                  <Link href="/#case-studies">Case Studies</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Contact</div>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="mailto:info@mbafirm.com">hello@example.com</a>
                </li>
              </ul>
            </div>
            <div className="self-end md:justify-self-end text-slate-500">
              © {new Date().getFullYear()} MBA Firm
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

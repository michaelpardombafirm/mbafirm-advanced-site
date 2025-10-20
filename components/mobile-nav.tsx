'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-xl border shadow-sm"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/10"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <nav className="fixed z-50 inset-x-0 top-16 mx-3 rounded-2xl border bg-white shadow-xl">
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">
              <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/#case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
              <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

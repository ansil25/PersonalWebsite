import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white/95">Ansil KK</a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-slate-300 hover:text-white transition">Home</a>
          <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
          <a href="#learnings" className="text-slate-300 hover:text-white transition">Learnings</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          <a
            href="/resume.pdf"
            download
            className="ml-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md ring-1 ring-white/6"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/80 border-t border-white/6">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#home" className="text-slate-200" onClick={() => setOpen(false)}>Home</a>
            <a href="#projects" className="text-slate-200" onClick={() => setOpen(false)}>Projects</a>
            <a href="#learnings" className="text-slate-200" onClick={() => setOpen(false)}>Learnings</a>
            <a href="#contact" className="text-slate-200" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

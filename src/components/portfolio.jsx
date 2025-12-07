import React from "react";
import myphoto from "../assets/myphoto.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import Learnings from "./Learnings";
import Contact from "./Contact";
import resumePDF from "../assets/resume.pdf";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* HERO */}
        <section id="home" className="relative flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="bg-white/4 backdrop-blur-md border border-white/6 rounded-2xl p-8 shadow-lg">
              <p className="text-green-400 font-medium mb-2">Hi there — I'm</p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight poppins">
                Ansil KK
              </h1>

              <p className="mt-3 text-slate-300 text-lg leading-relaxed">
                <span className="font-semibold text-white">I make the complex simple.</span> Full-stack developer (MERN / MEAN) — I build modern, scalable web apps and delightful UX.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/resume.p"
                  download
                  className="inline-block px-6 py-3 font-medium rounded-md bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg transition"
                >
                  Download CV
                </a>

                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <a href="#" aria-label="github" className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition">
                    {/* GitHub SVG */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-100">
                      <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 1.7-.8 2.1-1.2-.7-.1-1.4-.4-1.4-1.6 0-.4.1-.8.3-1.1-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4C18.6 3.9 19.6 4.2 19.6 4.2c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.4 5.7.4.4.7 1 .7 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
                    </svg>
                  </a>

                  <a href="#" aria-label="linkedin" className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition">
                    {/* LinkedIn SVG */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-100">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.16h.05c.54-1 1.86-2.16 3.83-2.16 4.1 0 4.86 2.7 4.86 6.22V24h-4V16.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.94-2.87 3.96V24h-4V8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute -right-8 top-6 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/3 blur-3xl opacity-20 pointer-events-none"></div>

            <div className="relative">
              <img
                src={myphoto}
                alt="Ansil KK"
                className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full ring-4 ring-white/8 shadow-2xl"
              />

              <div className="absolute -left-6 -top-6 w-4 h-4 bg-emerald-400 rounded-full floating-dot shadow-md"></div>
              <div className="absolute -right-6 -bottom-6 w-6 h-6 bg-indigo-400 rounded-full floating-dot-slow pulse-slow shadow-md"></div>
              <div className="absolute right-10 top-6 w-3 h-3 bg-white/60 rounded-full floating-dot" style={{ animationDelay: "0.8s" }}></div>
            </div>
          </div>
        </section>

        <div className="mt-10 space-y-16">
          <Projects />
          <Skills />
          <Learnings />
          <Contact />
        </div>
      </div>
    </main>
  );
}

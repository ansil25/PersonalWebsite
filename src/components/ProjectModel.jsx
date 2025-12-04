import React, { useEffect, useState } from "react";

/**
 * ProjectModal.jsx
 * - Renders project details
 * - Includes a small image carousel (prev/next)
 * - Animates open/close (CSS + small JS visible flag)
 * - Shows GitHub / Live buttons when provided in project.links
 */

export default function ProjectModal({ open, onClose, project }) {
  const [visible, setVisible] = useState(false); // for enter/exit animation
  const [index, setIndex] = useState(0); // carousel index

  useEffect(() => {
    if (open) {
      setVisible(true);
      setIndex(0);
      // lock scroll
      document.documentElement.style.overflow = "hidden";
    } else {
      // start close animation
      setVisible(false);
      // unlock scroll after animation (300ms)
      const t = setTimeout(() => {
        document.documentElement.style.overflow = "";
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) onClose();
      if (e.key === "ArrowRight" && open) next();
      if (e.key === "ArrowLeft" && open) prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open || !project) return null;

  const images = project.images || [];

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className={`relative z-10 w-full max-w-4xl mx-auto transform transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="bg-slate-900/95 border border-white/6 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="pr-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-slate-300 text-sm">{project.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="ml-auto text-slate-300 hover:text-white rounded-md p-2 ring-1 ring-white/6"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: carousel */}
              <div className="md:col-span-2">
                {images.length > 0 ? (
                  <div className="relative">
                    {/* image */}
                    <div className="w-full h-64 md:h-80 bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={images[index]}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* prev / next controls */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prev}
                          aria-label="Previous image"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                        >
                          ‹
                        </button>
                        <button
                          onClick={next}
                          aria-label="Next image"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                        >
                          ›
                        </button>

                        {/* indicators */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setIndex(i)}
                              aria-label={`Go to image ${i + 1}`}
                              className={`w-2 h-2 rounded-full ${
                                i === index ? "bg-white" : "bg-white/30"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-64 md:h-80 bg-white/5 rounded-lg flex items-center justify-center text-slate-300">
                    No preview available
                  </div>
                )}

                {/* Description */}
                <div className="mt-4 text-slate-300">
                  <p>{project.description}</p>

                  {project.features && project.features.length > 0 && (
                    <>
                      <h4 className="mt-4 text-white font-semibold">Key features</h4>
                      <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {/* Right: meta */}
              <div className="md:col-span-1">
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-36 object-cover rounded-lg border border-white/6"
                  />
                )}

                <div className="mt-4 text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">Tech:</span> {project.tech}
                  </p>
                  {project.duration && (
                    <p className="mt-2">
                      <span className="font-semibold text-slate-100">Duration:</span> {project.duration}
                    </p>
                  )}
                  {project.role && (
                    <p className="mt-2">
                      <span className="font-semibold text-slate-100">Role:</span> {project.role}
                    </p>
                  )}
                </div>

                {/* Links area */}
                <div className="mt-6 flex flex-col gap-2">
                  {project.links &&
                    project.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-center px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                      >
                        {l.label}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="border-t border-white/6 bg-slate-900/80 px-6 py-3 flex items-center justify-end gap-3">
            {/* extra quick links in footer if desired */}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 text-white"
              >
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Live Demo
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

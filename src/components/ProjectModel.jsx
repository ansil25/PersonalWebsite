import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 12, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="relative z-10 w-full max-w-4xl mx-auto transform"
          >
            <div className="bg-slate-900/95 border border-white/6 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{project.tech}</p>
                  </div>

                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="ml-auto text-slate-300 hover:text-white rounded-md p-2 ring-1 ring-white/6"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left - content */}
                  <div className="md:col-span-2">
                    <div className="w-full h-64 md:h-80 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
                      {project.images && project.images.length > 0 ? (
                        <img src={project.images[0]} alt={`${project.title} preview`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-slate-400">No preview available</div>
                      )}
                    </div>

                    <p className="mt-4 text-slate-300">{project.description}</p>

                    {project.features && project.features.length > 0 && (
                      <>
                        <h4 className="mt-4 text-white font-semibold">Key features</h4>
                        <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                          {project.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* Right - meta */}
                  <div className="md:col-span-1">
                    <p className="text-slate-300"><span className="font-semibold text-slate-100">Tech:</span> {project.tech}</p>

                    <div className="mt-6 flex flex-col gap-3">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 text-white text-center">
                          View on GitHub
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-center">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/6 bg-slate-900/80 px-6 py-3 flex items-center justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 text-white">Close</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from "react";

export default function Skills() {
  const skills = [
    "React", "Node.js", "Express", "MongoDB",
    "TypeScript (learning)", "Tailwind CSS", "REST APIs", "JWT",
  ];

  return (
    <section id="skills" className="mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-100">Skills</h3>
          <p className="text-slate-400 mt-2">Technologies & tools I use daily</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((s) => (
            <span key={s} className="px-4 py-2 bg-white/4 rounded-full text-slate-200 text-sm border border-white/6">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

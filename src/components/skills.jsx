import React, { useEffect, useState } from "react";

/**
 * Skills.jsx
 * - Dark themed skill cards with animated progress bars
 * - Edit the `skills` array to change labels / percentages
 */

export default function Skills() {
  const skills = [
    { name: "JavaScript", percent: 92 },
    { name: "React", percent: 90 },
    { name: "Node.js", percent: 85 },
    { name: "Express", percent: 84 },
    { name: "MongoDB", percent: 82 },
    { name: "HTML / CSS", percent: 95 },
    { name: "Tailwind CSS", percent: 88 },
    
  ];

  // used for triggering animation after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* section header */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest text-amber-400 font-medium">MY SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-3">All the skills that I have in that field of work are mentioned.</h2>
        </div>

        {/* grid: left = skills list, right = descriptors or bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: description & short blurb */}
          <div className="md:col-span-1 bg-white/3 p-6 rounded-2xl border border-white/6">
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Professional Skills</h3>
            <p className="text-slate-300">
              These are the skill levels I use when building production apps. Percentages are approximate and reflect familiarity and experience.
            </p>
            <ul className="mt-4 text-slate-300 space-y-2">
              <li>• Strong front-end architecture</li>
              <li>• Component-driven development</li>
              <li>• REST APIs & Authentication</li>
            </ul>
          </div>

          {/* Middle & Right columns: skill bars */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="bg-white/4 p-5 rounded-xl border border-white/6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-100">{s.name}</h4>
                  <span className="text-sm text-slate-300">{s.percent}%</span>
                </div>

                <div className="mt-3 w-full bg-white/8 rounded-full h-3 overflow-hidden">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={s.percent}
                    className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-sm transition-all"
                    style={{
                      width: mounted ? `${s.percent}%` : "0%",
                      transition: "width 1100ms cubic-bezier(.2,.9,.2,1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

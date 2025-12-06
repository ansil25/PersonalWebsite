import React from "react";

export default function Learnings() {
  const learningNow = [
    "TypeScript & stricter typing",
    "Advanced React patterns",
    "Testing with Jest",
    "Performance & bundle tuning",
  ];

  const recentlyLearned = [
    "Tailwind CSS",
    "Vite tooling",
    "Deploying to Vercel/Netlify",
    "Docker basics",
  ];

  return (
    <section id="learnings" className="mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm tracking-widest text-amber-400 font-medium">LEARNINGS</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">What I'm learning</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/4 p-6 rounded-2xl border border-white/6">
            <h4 className="text-lg font-semibold text-slate-100 mb-3">Currently learning</h4>
            <ul className="text-slate-300 space-y-3">
              {learningNow.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/4 p-6 rounded-2xl border border-white/6">
            <h4 className="text-lg font-semibold text-slate-100 mb-3">Recently learned</h4>
            <ul className="text-slate-300 space-y-3">
              {recentlyLearned.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 bg-indigo-400 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

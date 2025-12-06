import React, { useState } from "react";
import ProjectModal from "./ProjectModel";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hospital Management (MERN)",
      description:
        "Complete hospital management with role-based dashboards (Admin/Doctor/Patient), patient records, appointments, and reports.",
      features: [
        "Role-based dashboards",
        "Doctor appointment booking",
        "Medical reports & records",
        "Admin user management",
      ],
      tech: "React, Node.js, Express, MongoDB, Tailwind",
      images: [],
      repo: "",
      live: "",
    },
    {
      title: "Garage Management",
      description:
        "Vehicle service tracking & billing system with customer dashboards and mechanic updates.",
      features: ["Vehicle tracking", "Customer dashboards", "Billing & invoices"],
      tech: "React, Firebase, Tailwind",
      images: [],
    },
    {
      title: "This Portfolio",
      description:
        "This portfolio is built with React + Tailwind. It features responsive UI, animations and a dark theme.",
      features: ["Responsive layout", "Dark theme", "Modal project view", "Animations"],
      tech: "React, Tailwind, Vite",
      images: [],
      repo: "",
      live: "",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="mt-6">
      <h2 className="text-3xl font-semibold text-center text-slate-100 mt-12 mb-8">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <article
            key={index}
            className="p-6 bg-white/4 rounded-2xl border border-white/6 shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-2">{p.title}</h3>
            <p className="text-slate-300">{p.description.slice(0, 100)}...</p>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => openModal(p)}
                className="text-indigo-300 font-medium hover:underline"
                aria-label={`Open ${p.title}`}
              >
                View Project →
              </button>
              <span className="text-sm text-slate-400">{p.tech.split(",")[0]}</span>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal open={open} onClose={closeModal} project={selectedProject} />
    </section>
  );
}

import React, { useState } from "react";
import ProjectModal from "./ProjectModel";

export default function Project() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hospital Management (MERN)",
      description:
        "A complete hospital management system with role-based dashboards (Admin, Doctor, Patient). Includes patient records, appointments, medical reports, doctor schedules & secure login.",
      features: [
        "Role-based dashboards",
        "Doctor appointment booking",
        "Medical reports & patient records",
        "Admin user management",
      ],
      tech: "React, Node.js, Express, MongoDB, Tailwind",
    },
    {
      title: "Garage Management",
      description:
        "A vehicle service and garage management system helping users track service status, billing, and vehicle information.",
      features: [
        "Vehicle service tracking",
        "Customer dashboards",
        "Billing & invoice system",
        "Mechanic job updates",
      ],
      tech: "React, Firebase, Tailwind",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website designed using React + Tailwind with smooth animations, responsive UI, and modern dark theme.",
      features: [
        "Responsive layout",
        "Dark theme",
        "Project modal popup",
        "Custom animations",
      ],
      tech: "React, Tailwind, Vite",
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
    <>
      {/* Projects Title */}
      <h2 className="text-3xl font-semibold text-center text-slate-100 mt-12 mb-8">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div
            key={index}
            className="p-6 bg-white/5 rounded-2xl border border-white/6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-2">{p.title}</h3>

            <p className="text-slate-300">{p.description.slice(0, 85)}...</p>

            <button
              onClick={() => openModal(p)}
              className="mt-4 text-indigo-300 font-medium"
            >
              View Project →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal open={open} onClose={closeModal} project={selectedProject} />
    </>
  );
}

'use client'

import { FaMicroscope, FaServer, FaChalkboardTeacher, FaTools } from "react-icons/fa";

const facilities = [
  {
    icon: <FaMicroscope className="text-blue-600 text-3xl mb-2" />,
    title: "Advanced Simulation Lab",
    description:
      "Equipped with high-powered workstations and industry-standard software for advanced computational mechanics, design analysis, and simulation of discrete systems and materials."
  },
  {
    icon: <FaServer className="text-blue-600 text-3xl mb-2" />,
    title: "High-Performance Computing Cluster",
    description:
      "Local HPC resources for large-scale parallel computing, numerical modeling, and solving complex multi-physics problems, integrated with cloud-enabled tools for scalable research."
  },
  {
    icon: <FaTools className="text-blue-600 text-3xl mb-2" />,
    title: "Materials & Geotechnical Testing Center",
    description:
      "Instrumentation for physical testing, including soil and material strength analysis, load frames, and data acquisition systems supporting cross-disciplinary experimentation."
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-600 text-3xl mb-2" />,
    title: "Collaboration & Innovation Space",
    description:
      "A flexible hub for brainstorming, team seminars, workshops, and hybrid collaboration with remote connectivity for global engagement."
  }
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-10 font-sans relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 tracking-wider text-center">
          <span className="inline-block bg-blue-800 bg-clip-text text-transparent">
            Facilities & Resources
          </span>
        </h1>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-500 mb-7 text-center">
            Our Key Facilities
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="flex flex-col items-center bg-white/90 rounded-2xl p-8 shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {facility.icon}
                <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                  {facility.title}
                </h3>
                <p className="text-gray-800 text-base text-center">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center tracking-tight">
            Accessibility & Support
          </h2>
          <div className="bg-blue-50/90 rounded-xl p-6 shadow text-center max-w-2xl mx-auto">
            <p className="text-gray-800 text-lg mb-3">
              Our facilities are designed to foster innovation, support interdisciplinary research, and catalyze collaboration with academic, industry, and community partners.
            </p>
            <p className="text-gray-700 text-base mb-4">
              Interested in utilizing lab resources or exploring collaborative research opportunities? <br />
              Reach out through our <a href="#contact" className="text-blue-600 underline font-medium">Contact</a> page — we're eager to connect and advance impactful solutions!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
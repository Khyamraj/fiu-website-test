'use client'

import { FaCogs, FaChartBar, FaUsers, FaMountain } from "react-icons/fa";

const researchAreas = [
  {
    icon: <FaCogs className="text-blue-500 text-3xl mb-2" />,
    title: "Computational Mechanics",
    description:
      "We pioneer innovative computational frameworks for the modeling and simulation of discrete systems and advanced materials, illuminating the multi-scale mechanical behaviors critical to modern engineering."
  },
  {
    icon: <FaChartBar className="text-blue-500 text-3xl mb-2" />,
    title: "High-Performance Computing",
    description:
      "Cutting-edge parallel computing and advanced algorithms power our solutions to complex, large-scale engineering challenges—enabling fast, reliable, and insightful analyses for research and industry alike."
  },
  {
    icon: <FaUsers className="text-blue-500 text-3xl mb-2" />,
    title: "Organizational Culture & People Strategy",
    description:
      "We advance agile HR methodologies, leadership development, and inclusive practices, empowering organizations to cultivate dynamic, high-performing, and resilient cultures for sustained success."
  },
  {
    icon: <FaMountain className="text-blue-500 text-3xl mb-2" />,
    title: "Structural & Geotechnical Engineering",
    description:
      "Our interdisciplinary approaches unite theory, computation, and experiment to transform the design, analysis, and resiliency of structural and geotechnical systems in our rapidly changing world."
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-10 font-sans relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10  tracking-wider text-center">
          <span className="inline-block bg-blue-800 bg-clip-text text-transparent">
            Research Excellence
          </span>
        </h1>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-7 text-center ">
            Our Research Areas
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {researchAreas.map((area, idx) => (
              <div
                key={area.title}
                className="flex flex-col items-center bg-white/90 rounded-2xl p-8 shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {area.icon}
                <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">{area.title}</h3>
                <p className="text-gray-800 text-base text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center tracking-tight">
            Collaborative Opportunities
          </h2>
          <div className="bg-blue-50/90 rounded-xl p-6 shadow text-center max-w-2xl mx-auto">
            <p className="text-gray-800 text-lg mb-3">
              The GRAMMR Lab is committed to cross-disciplinary discovery and impactful innovation.
              We actively partner with academic institutions, government agencies, and industry leaders to pursue research that shapes the future.
            </p>
            <p className="text-gray-700 text-base mb-4">
              Interested in collaborating or exploring our projects? <br /> 
              Reach out through our <a href="#contact" className="text-blue-600 underline font-medium">Contact</a> page &mdash; we welcome visionary ideas and ambitious partners!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
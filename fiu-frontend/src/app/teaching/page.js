'use client'

import { FaBookOpen, FaChalkboardTeacher, FaMicroscope, FaLaptopCode } from "react-icons/fa";

const teachingAreas = [
  {
    icon: <FaBookOpen className="text-blue-900 text-3xl mb-2" />,
    title: "Undergraduate Courses",
    description:
      "We offer foundational and advanced undergraduate courses in civil engineering, computational methods, organizational behavior, and engineering leadership, designed to build critical thinking and hands-on skills."
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-900 text-3xl mb-2" />,
    title: "Graduate Courses & Seminars",
    description:
      "Our seminars and graduate-level courses explore contemporary research topics including numerical methods, geotechnics, structural mechanics, and modern HR practices, fostering inquiry and professional growth."
  },
  {
    icon: <FaMicroscope className="text-blue-900 text-3xl mb-2" />,
    title: "Mentored Research",
    description:
      "Students and mentees participate in customized research experiences spanning computational modeling, high-performance computing, organizational culture, and interdisciplinary engineering projects."
  },
  {
    icon: <FaLaptopCode className="text-blue-900 text-3xl mb-2" />,
    title: "Workshops & Training",
    description:
      "We facilitate career-enabling skill workshops in coding, simulation software, contemporary HR tools, and leadership—connecting research, industry, and lifelong learning."
  }
];

export default function TeachingPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-10 font-sans relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 tracking-wider text-center">
          <span className="inline-block bg-blue-800 bg-clip-text text-transparent">
            Teaching & Learning
          </span>
        </h1>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-500 mb-7 text-center">
            Areas of Teaching
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {teachingAreas.map((area, idx) => (
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
            Commitment to Students
          </h2>
          <div className="bg-blue-50/90 rounded-xl p-6 shadow text-center max-w-2xl mx-auto">
            <p className="text-gray-800 text-lg mb-3">
              We are dedicated to empowering the next generation of leaders, engineers, and thinkers through impactful teaching, inclusive mentoring, and experiential learning. Our commitment extends beyond the classroom—enriching academic journeys and professional ambitions.
            </p>
            <p className="text-gray-700 text-base mb-4">
              Interested in our courses, training, or mentorship opportunities? <br /> 
              Please reach out through our <a href="#contact" className="text-blue-600 underline font-medium">Contact</a> page – we're excited to support your learning adventure!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
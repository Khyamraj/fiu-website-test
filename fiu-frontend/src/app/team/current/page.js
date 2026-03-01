'use client'

import Image from "next/image";

const teamMembers = [
  {
    type: "professor",
    name: "Anil Kumar Misra",
    title: "Founder & CEO | Strategic HR Consultant & Fractional CHRO",
    photo: "/images/mishra-anil.jpg",
    email: "anmisra@fiu.edu",
    phone: "+1-305-348-1086",
    linkedIn:
      "https://www.linkedin.com/in/anil-misra-9120b329b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    description: `Anil Kumar Misra is a seasoned Human Resources leader and the Founder & CEO of Eduonn, 
a strategic HR advisory and consulting firm. With nearly three decades of global HR experience, he 
has served as Chief Human Resources Officer at major organisations including Reliance Retail, Fidelity, Magicbricks, Justdial, and Tesco. 
He also teaches HR leadership and contemporary HR practices at institutions like IIM Indore and has a strong track record of mentoring and guiding business 
leaders, HR professionals, and students. His focus areas include agile performance management, people strategy, organisational culture, talent development, and leadership coaching.`,
    research: [
      "People Strategy & Leadership Development",
      "Agile HR Practices",
      "Organizational Culture & Performance",
      "Diversity, Equity & Inclusion (DEI)",
    ],
    education: [],
  },
  {
    type: "professor",
    name: "Dr. Seung Jae Lee, Ph.D.",
    title: "Associate Professor of Civil & Environmental Engineering",
    photo: "/images/seung-jae-lee.jpeg",
    email: "sjlee@fiu.edu",
    phone: "+1-305-348-1086",
    linkedIn:
      "https://www.linkedin.com/in/seung-jae-lee-ph-d?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    description: `Dr. Seung Jae Lee is an Associate Professor in the Department of Civil and Environmental Engineering at Florida International University. 
He specializes in computational mechanics at the intersection of structural, geotechnical, and computational engineering. His research focuses 
on advanced computational methods to understand the complex behavior of discrete systems and materials, leveraging numerical models, theoretical 
formulations, and high-performance computing. Dr. Lee has been a faculty member at FIU since 2014 and previously worked as a façade designer and 
engineer in industry. He holds a Ph.D. in Civil Engineering from the University of Illinois Urbana-Champaign.`,
    research: [
      "Computational Mechanics",
      "Discrete Systems & Materials",
      "Numerical Simulation & Modeling",
      "High-Performance Computing in Engineering",
    ],
    education: [
      "Ph.D. in Civil Engineering, University of Illinois Urbana-Champaign",
      "M.S. in Civil Engineering, University of Illinois Urbana-Champaign",
      "B.S. in Architectural Engineering, Sungkyunkwan University",
    ],
  },
  {
    type: "student",
    name: "James Lin",
    role: "Graduate Research Assistant",
    photo: "/images/pp-template.jpg",
    major: "MSc Computer Science",
    email: "james.lin@university.edu",
    linkedIn: "https://www.linkedin.com/in/jameslin-student/",
  },
  {
    type: "student",
    name: "Priya Patel",
    role: "Undergraduate Intern",
    photo: "/images/pp-template.jpg",
    major: "BSc Electrical Engineering",
    email: "priya.patel@university.edu",
    linkedIn: "https://www.linkedin.com/in/priyapatel-student/",
  },
  {
    type: "student",
    name: "Lucas Wang",
    role: "Junior Researcher",
    photo: "/images/pp-template.jpg",
    major: "BSc Mathematics",
    email: "lucas.wang@university.edu",
    linkedIn: "https://www.linkedin.com/in/lucaswang-student/",
  },
];

function ProfessorCard({ member }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white/80 rounded-xl p-6 shadow-lg mb-10 w-full max-w-3xl mx-auto">
      <div className="flex-shrink-0">
        <Image
          src={member.photo}
          alt={member.name}
          width={100}
          height={100}
          className="rounded-full object-cover border-4 border-blue-100 w-[150] h-[150] hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="md:ml-8 mt-4 md:mt-0 flex-1">
        <h3 className="text-2xl font-bold text-blue-800 mb-1">{member.name}</h3>
        <p className="text-md text-gray-700 font-semibold mb-1">{member.title}</p>
        <div className="flex gap-4 items-center mb-2">
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-blue-600 underline text-sm">
              {member.email}
            </a>
          )}
          {member.phone && (
            <span className="text-gray-600 text-sm">{member.phone}</span>
          )}
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              className="ml-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${member.name}`}
            >
              <svg height="20" width="20" className="inline text-blue-600 border-2 border-blue-600 rounded-full p-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 6.5C4.173 6.5 3.5 5.827 3.5 5s.673-1.5 1.5-1.5S6.5 4.173 6.5 5 5.827 6.5 5 6.5zM6 8H4V17h2V8zm5.07.25C9.06 8.25 8 9.28 8 10.62V17h2v-5.5c0-.669.338-1.04.95-1.04.594 0 1.021.417 1.021 1.088V17h2v-5.923c0-2.07-1.065-2.827-2.901-2.827z"/>
              </svg>
            </a>
          )}
        </div>
        <p className="mb-2 text-gray-700">{member.description}</p>
        {member.research && member.research.length > 0 && (
          <div className="mb-2">
            <span className="font-semibold text-blue-900">Research Areas:</span>
            <ul className="list-disc list-inside pl-4 text-gray-800">
              {member.research.map((r, i) => (
                <li key={i} className="text-sm">{r}</li>
              ))}
            </ul>
          </div>
        )}
        {member.education && member.education.length > 0 && (
          <div>
            <span className="font-semibold text-blue-900">Education:</span>
            <ul className="list-disc list-inside pl-4 text-gray-800">
              {member.education.map((e, i) => (
                <li key={i} className="text-sm">{e}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function StudentCard({ member }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg p-5 shadow-md mx-2 my-3 max-w-xs w-full">
      <Image
        src={member.photo}
        alt={member.name}
        width={100}
        height={100}
        className="rounded-full object-cover border-5 border-blue-100 mb-3 w-[100] h-[100] hover:scale-105 transition-all duration-300"
      />
      <h4 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h4>
      <div className="text-sm text-gray-700 mb-1">{member.role}</div>
      <div className="text-xs text-gray-600 mb-1">{member.major}</div>
      <div className="flex gap-2 mt-2 items-center">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="text-blue-500 underline text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            {member.email}
          </a>
        )}
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <svg height="18" width="18" className="inline text-blue-600 border-2 border-blue-600 rounded-full p-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 6.5C4.173 6.5 3.5 5.827 3.5 5s.673-1.5 1.5-1.5S6.5 4.173 6.5 5 5.827 6.5 5 6.5zM6 8H4V17h2V8zm5.07.25C9.06 8.25 8 9.28 8 10.62V17h2v-5.5c0-.669.338-1.04.95-1.04.594 0 1.021.417 1.021 1.088V17h2v-5.923c0-2.07-1.065-2.827-2.901-2.827z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  const professors = teamMembers.filter((m) => m.type === "professor");
  const students = teamMembers.filter((m) => m.type === "student");

  return (
    <main className="min-h-screen py-8 px-4 md:px-10 bg-transparent font-sans relative">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 drop-shadow-md tracking-tight text-center">
          Current Team Members
        </h1>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-blue-800 mb-5 text-center">
            Faculty & Principal Investigators
          </h2>
          <div className="flex flex-col gap-12">
            {professors.map((member, idx) => (
              <ProfessorCard key={member.name + idx} member={member} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-5 text-center">
            Graduate & Undergraduate Students
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {students.map((member, idx) => (
              <StudentCard key={member.name + idx} member={member} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
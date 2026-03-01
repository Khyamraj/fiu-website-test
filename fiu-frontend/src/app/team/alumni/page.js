'use client'

import Image from "next/image";

const alumniMembers = [
  {
    name: "Student 1",
    role: "MS Graduate, Class of 2023",
    photo: "/images/pp-template.jpg",
    position: "Data Scientist at Amazon",
    linkedIn: "https://www.linkedin.com/in/ayesha-singh-alumni/",
    testimonial: "My time at the lab provided me with valuable hands-on research experience, challenging me to think creatively and collaborate with brilliant minds. The mentorship and support I received helped shape my path to success."
  },
  {
    name: "Student 2",
    role: "BS Graduate, Class of 2022",
    photo: "/images/pp-template.jpg",
    position: "Software Engineer at Google",
    linkedIn: "https://www.linkedin.com/in/miguelrivera-alumni/",
    testimonial: "Being a part of this team set the foundation for my professional growth. I learned not only technical concepts but also the importance of teamwork and perseverance. The skills I developed here have been crucial in my career."
  },
  {
    name: "Student 3",
    role: "PhD Graduate, Class of 2021",
    photo: "/images/pp-template.jpg",
    position: "Assistant Professor at University of California",
    linkedIn: "https://www.linkedin.com/in/sarakim-alumni/",
    testimonial: "The collaborative environment and innovative research in the group gave me the confidence and skills needed to pursue an academic career. I’m grateful for the guidance and lifelong connections I made during my time here."
  },
  // Add more alumni as needed
];

function AlumniCard({ member }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg p-5 shadow-md mx-2 my-3 max-w-xs w-full">
      <Image
        src={member.photo}
        alt={member.name}
        width={100}
        height={100}
        className="rounded-full object-cover border-4 border-blue-100 mb-3 w-[100] h-[100] hover:scale-105 transition-all duration-300"
      />
      <h4 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h4>
      <div className="text-sm text-gray-700 mb-1">{member.role}</div>
      <div className="text-xs text-gray-600 mb-2">{member.position}</div>
      <div className="flex gap-2 mt-2 items-center">
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

export default function AlumniPage() {
  return (
    <main className="min-h-screen py-8 px-4 md:px-10 bg-transparent font-sans relative">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 drop-shadow-md tracking-tight text-center">
          Alumni
        </h1>
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-5 text-center">
            Former Students & Team Members
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {alumniMembers.map((member, idx) => (
              <AlumniCard key={member.name + idx} member={member} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">
            What Our Alumni Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {alumniMembers
              .filter((member) => member.testimonial)
              .map((member, idx) => (
                <div key={"testimonial-" + member.name + idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start border-l-4 border-blue-200">
                  <div className="flex items-center mb-3">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-blue-900">{member.name}</div>
                      <div className="text-xs text-gray-700">{member.position}</div>
                    </div>
                  </div>
                  <div className="text-gray-800 italic">"{member.testimonial}"</div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </main>
  );
}
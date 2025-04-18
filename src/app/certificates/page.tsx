'use client';

function Skills() {
  const certificates = [
    {
      title: "Java",
      description:
        "Certified in Java programming, with a strong focus on Object-Oriented Programming principles and efficient problem-solving techniques.",
      url: "https://drive.google.com/file/d/1Jes0M8N_dgZkZBBYBCjoKShqwGsj4GWk/view",
    },
    {
      title: "Python",
      description:
        "Certification in Python, showcasing proficiency in scripting, data manipulation, and foundational programming skills.",
      url: "https://drive.google.com/file/d/1PbCvBejOYTQ0hs8n4vBPzXIq3BuxnmCN/view?usp=drivesdk",
    },
    {
      title: "Problem Solving",
      description:
        "Certified in problem-solving and algorithmic thinking, with hands-on experience in tackling complex coding challenges.",
      url: "https://drive.google.com/file/d/1PbWu51K9qofgh5wCKq2DsZyaN2LJXEsZ/view?usp=drivesdk",
    },
    {
      title: "SQL",
      description:
        "Certification in SQL, demonstrating strong abilities in database querying, management, and design with MySQL.",
      url: "https://drive.google.com/file/d/1JfbaOHR5pZuTzIVm1UEiURwvG7wBYktV/view?pli=1",
    },
    {
      title: "CSS",
      description:
        "Certified in CSS, skilled in responsive web design, and proficient in creating visually appealing layouts using modern styling techniques.",
      url: "https://drive.google.com/file/d/1PcKydu067gT4WhtpMkhbrtYuu--24nwJ/view?usp=drivesdk",
    },
    {
      title: "JavaScript",
      description:
        "Certification in JavaScript, with expertise in building dynamic web applications and enhancing user experiences.",
      url: "https://drive.google.com/file/d/1Jes0M8N_dgZkZBBYBCjoKShqwGsj4GWk/view",
    },
    {
      title: "ReactJS",
      description:
        "Certified in ReactJS, focusing on building interactive, efficient, and reusable components for web applications.",
      url: "https://drive.google.com/file/d/1Pb1Agztq12OnaYhJiWIswFos4EFcRxSz/view?usp=drivesdk",
    },
    {
      title: "Software Engineering",
      description:
        "Certified in Software Engineering, covering software development life cycle (SDLC), design principles, version control, testing methodologies, and best practices for building robust and scalable software solutions.",
      url: "https://drive.google.com/file/d/1cZjgszki6l2M8WkJ7zE4YXZpmzCUcuWI/view?usp=drivesdk",
    },
    {
      title: "Knowledge Gate (Placement Preparation Course)",
      description:
        "Completion of the Knowledge Gate Placement Preparation Course, covering essential skills and concepts for job readiness.",
      url: "https://drive.google.com/file/d/1JhexvG978U5OzDzWGCu72pRYWKVSzFnI/view?pli=1",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-20 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-teal-300 pt-10">
          Certificates
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {certificate.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {certificate.description}
              </p>
              {certificate.url && (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                >
                  <button className="px-4 py-2 text-sm font-semibold text-gray-900 bg-cyan-300 rounded-md shadow hover:bg-cyan-400 transition-all duration-300">
                    View Certificate
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Make sure to export the component as default
export default Skills;

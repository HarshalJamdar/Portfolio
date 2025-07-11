const experiences = [
  {
    role: "Software Engineer",
    company: "KC Overseas, Nagpur",
    duration: "Sep 2022 – Present",
    highlights: [
      "Revamped student platform UI using React.js & Next.js.",
      "Developed RESTful APIs using Node.js & Express.js.",
      "Improved user engagement by 20% with feature enhancements."
    ]
  },
  {
    role: "Teaching Assistant",
    company: "FunctionUp",
    duration: "May 2022 – Sep 2022",
    highlights: [
      "Mentored 50+ students in JavaScript, Node.js & MongoDB.",
      "Led backend development training sessions."
    ]
  },
  {
    role: "Backend Developer Trainee",
    company: "FunctionUp",
    duration: "Mar 2022 – Sep 2022",
    highlights: [
      "Built scalable backend systems with Node.js & MongoDB.",
      "Implemented JWT auth, AWS S3 uploads, and Redis caching."
    ]
  }
];

export default function Experience() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{exp.role}</h2>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-1">
              {exp.highlights.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

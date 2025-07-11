const projects = [
  {
    title: "E-commerce Backend",
    description: "Built a scalable backend system with JWT authentication and secure AWS S3 file uploads.",
    techStack: "Node.js, MongoDB, JWT, AWS S3",
    link: "https://github.com/yourusername/ecommerce-backend"
  },
  {
    title: "URL Shortener",
    description: "URL shortening service with Redis caching, reducing response time by 40%.",
    techStack: "Node.js, Redis, MongoDB",
    link: "https://github.com/yourusername/url-shortener"
  },
  {
    title: "Book Management API",
    description: "CRUD APIs for books and reviews with secure JWT-based user authentication.",
    techStack: "Node.js, MongoDB, JWT",
    link: "https://github.com/yourusername/book-management-api"
  }
];

export default function Projects() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-xl shadow hover:shadow-md p-6 bg-white transition">
            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <p className="text-sm mt-2 text-gray-500"><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" className="text-blue-600 underline mt-2 inline-block">GitHub Repo</a>
          </div>
        ))}
      </div>
    </main>
  );
}

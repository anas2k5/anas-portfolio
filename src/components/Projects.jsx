import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Traffic Light Detection System",
      description:
        "Real-time traffic light detection & classification using YOLOv8 and CNN for smart transportation systems.",
      tech: ["YOLOv8", "Python", "OpenCV", "TensorFlow", "CNN"],
      repo: "https://github.com/anas2k5",
      live: "#",
      points: [
        "Implemented YOLOv8 for real-time traffic signal detection.",
        "Built CNN classifier for improved classification accuracy.",
        "Processed video streams using OpenCV for frame analysis.",
        "Optimized model performance for high FPS inference.",
        "Designed modular architecture for IoT/Edge deployment."
      ]
    },
    {
      title: "TuterNity — Tutoring & Booking Platform",
      description:
        "A full-stack platform with role-based authentication, bookings, chat system, and Stripe-based payments.",
      tech: ["React", "Spring Boot", "PostgreSQL", "JWT Auth", "Stripe API"],
      repo: "https://github.com/anas2k5/tuternity-frontend",
      live: "https://tuternity-frontend.vercel.app/",
      points: [
        "Developed full-stack architecture using React & Spring Boot.",
        "Implemented JWT authentication for secure role-based access.",
        "Designed REST APIs for bookings & user workflows.",
        "Integrated Stripe API for secure online payments.",
        "Built responsive dashboards for Teachers and Students."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div className="project-card" key={idx}>

              <div className="project-header">
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>

              <ul className="project-points">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="project-tech">
                {p.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={p.repo} target="_blank" className="btn primary">
                  Repository
                </a>
                <a href={p.live} target="_blank" className="btn secondary">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

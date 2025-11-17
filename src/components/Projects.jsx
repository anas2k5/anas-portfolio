import React, { useState } from "react";
import "./Projects.css";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: "traffic",
    title: "Traffic Light Detection System",
    short: "Real-time detection & classification using YOLOv8 and CNN.",
    repo: "https://github.com/anas2k5/traffic-light-detection",
    demo: "",
    details: [
      "Real-time detection with YOLOv8 and a CNN classifier.",
      "Implemented in Python with TensorFlow/Keras & OpenCV.",
      "Inference optimizations for near real-time performance."
    ]
  },
  {
    id: "tuternity",
    title: "TuterNity — Tutoring & Booking Platform",
    short: "Full-stack platform with role-based auth, bookings, and payments.",
    repo: "https://github.com/anas2k5/tuternity",
    demo: "https://tuternity-frontend.vercel.app/",
    details: [
      "React frontend + Spring Boot backend + PostgreSQL.",
      "JWT authentication and role-based access (Admin/Teacher/Student).",
      "Stripe integration for payments."
    ]
  }
];

export default function Projects(){
  const [active, setActive] = useState(null);

  return (
    <section className="projects-section reveal">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(p=>(
            <article key={p.id} className="project-card glass">
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-short">{p.short}</p>
                <div className="project-actions">
                  <button className="btn small primary" onClick={()=>setActive(p)}>Details</button>
                  <a className="btn small ghost" href={p.demo||p.repo} target="_blank" rel="noreferrer">Open</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal open={!!active} project={active} onClose={()=>setActive(null)} />
    </section>
  );
}

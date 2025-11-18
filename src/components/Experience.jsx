import "./Experience.css";

const experiences = [
  {
    company: "Sopra Steria",
    role: "Software Developer Intern",
    period: "Sep 2025 — Nov 2025",
    bullets: [
      "Built secure REST APIs using Spring Boot and JWT.",
      "Optimized PostgreSQL queries and integrated Stripe payments.",
      "Developed responsive React UI components."
    ]
  },
  {
    company: "Indian Servers",
    role: "Web Developer Intern",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      "Developed and optimized UI components to improve load times.",
      "Worked with React, HTML, CSS and JS to deliver features."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="exp-container">
        
        <h2 className="exp-title">Experience</h2>

        <div className="timeline">
          {experiences.map((e, i) => (
            <div className="timeline-item" key={i}>

              <div className="timeline-dot"></div>

              <div className="exp-card">

                {/* TOP ROW: COMPANY + DATE */}
                <div className="exp-header">
                  <h3>{e.company}</h3>
                  <span className="exp-period">{e.period}</span>
                </div>

                {/* ROLE */}
                <div className="exp-role">{e.role} • Remote</div>

                {/* BULLETS */}
                <ul className="exp-bullets">
                  {e.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

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

export default function Experience(){
  return (
    <section className="experience-section reveal">
      <div className="container">
        <h2>Experience</h2>

        <div className="exp-list">
          {experiences.map((e,i)=>(
            <div key={i} className="exp-card glass">
              <div className="exp-left">
                <h3>{e.company}</h3>
                <div className="exp-role">{e.role} • Remote</div>
                <ul>
                  {e.bullets.map((b,bi)=>(<li key={bi}>{b}</li>))}
                </ul>
              </div>
              <div className="exp-right">{e.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

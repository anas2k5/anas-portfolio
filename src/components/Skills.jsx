import "./Skills.css";

export default function Skills() {
  const skills = [
    "Java", "Spring Boot", "React", "JavaScript",
    "Python", "TensorFlow", "OpenCV", "PostgreSQL",
    "MySQL", "HTML", "CSS", "DSA"
  ];

  return (
    <section className="skills-section reveal">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          {skills.map((s, i) => (
            <div key={i} className="skill-badge">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

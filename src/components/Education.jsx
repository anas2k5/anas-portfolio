import "./Education.css";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

export default function Education() {

  const data = [
    {
      icon: <FaGraduationCap className="edu-icon" />,
      title: "B.Tech (Computer Science & Engineering)",
      place: "Narayana Engineering College, Nellore",
      score: "CGPA: 8.8",
      year: "2022 — 2026",
      location: "Nellore, AP"
    },
    {
      icon: <FaUniversity className="edu-icon" />,
      title: "Intermediate (MPC)",
      place: "Narayana Junior College, Nellore",
      score: "Percentage: 86%",
      year: "2020 — 2022",
      location: "Nellore, AP"
    },
    {
      icon: <FaSchool className="edu-icon" />,
      title: "SSC (10th Class)",
      place: "Ratnam High School",
      score: "Percentage: 98%",
      year: "2020",
      location: "Nellore, AP"
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2>Education</h2>

        <div className="timeline">
          {data.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>

              <div className="timeline-card glass">
                <div className="edu-icon-box">{item.icon}</div>

                <div className="edu-content">
                  <h3>{item.title}</h3>
                  <p className="muted">{item.place}</p>

                  <div className="edu-meta">
                    <span>{item.score}</span>
                    <span>{item.year}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

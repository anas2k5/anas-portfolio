import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      school: "Narayana Engineering College, Nellore",
      period: "2022 – 2026",
      details: "Focused on full-stack development, AI/ML and cloud computing."
    },
    {
      degree: "Intermediate – MPC",
      school: "Narayana Junior College",
      period: "2020 – 2022",
      details: "Completed with strong academic performance."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="edu-container">

        <h2 className="edu-title">Education</h2>

        <div className="edu-timeline">
          {educationData.map((e, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-dot"></div>

              <div className="edu-card">
                <div className="edu-header">
                  <FaGraduationCap className="edu-icon" />
                  <div>
                    <h3>{e.degree}</h3>
                    <p className="edu-school">{e.school}</p>
                  </div>
                </div>

                <p className="edu-period">{e.period}</p>
                <p className="edu-details">{e.details}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

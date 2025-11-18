import "./Skills.css";
import { 
  FaJava, FaReact, FaHtml5, FaCss3, FaPython, 
  FaDatabase, FaGitAlt 
} from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiPostgresql, SiMysql, SiOpencv, SiTensorflow } from "react-icons/si";

export default function Skills() {

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <FaPython /> }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React JS", icon: <FaReact /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "AI / ML Tools",
      skills: [
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "TensorFlow", icon: <SiTensorflow /> }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "VS Code", icon: "🧩" },
        { name: "Postman", icon: "📨" }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-card glass reveal" key={idx}>
              <h3>{cat.title}</h3>

              <div className="skill-list">
                {cat.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import "./About.css";
import { FiCode, FiAward, FiZap } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT : MAIN CONTENT */}
        <div className="about-left">
          <h2 className="about-title">About Me</h2>

          <p className="about-desc">
            I’m a final-year <strong>Computer Science & Engineering</strong> student and a
            <strong> Java Full-Stack Developer</strong> specializing in Spring Boot, REST APIs,
            and React. I build scalable, maintainable applications and enjoy integrating cloud
            practices for reliable deployments.
          </p>

          <p className="about-desc">
            I also work with AI/ML tools like <strong>YOLOv8</strong>, <strong>TensorFlow</strong>,
            and <strong>OpenCV</strong> for intelligent systems. I focus on clean architecture,
            efficient backend design, and polished user experiences.
          </p>

          {/* BULLET POINTS */}
          <ul className="about-points">
            <li><FiCode /> Built multiple full-stack applications (React + Spring Boot)</li>
            <li><FiZap /> Hands-on experience with real-time AI/ML systems and OpenCV</li>
            <li><FiAward /> Solved <strong>100+ LeetCode</strong> problems — strong problem solving</li>
          </ul>
        </div>

        {/* RIGHT : INFO CARD */}
        <aside className="about-card">
          <h3 className="card-title">Quick Info</h3>

          <div className="info-row">
            <span>Location</span>
            <p>Nellore, AP</p>
          </div>

          <div className="info-row">
            <span>Education</span>
            <p>B.Tech CSE (2022–2026)</p>
          </div>

          <div className="info-row">
            <span>Interests</span>
            <p>Web Dev • AI Systems • Cloud • Clean Code</p>
          </div>

          <div className="info-row">
            <span>LeetCode</span>
            <p>100+ Problems Solved</p>
          </div>

          <div className="info-row">
            <span>Strong Areas</span>
            <p>Backend, APIs, UI/UX, System Design</p>
          </div>
        </aside>

      </div>
    </section>
  );
}

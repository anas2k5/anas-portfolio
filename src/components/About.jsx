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
            I'm a passionate <strong>Full-Stack Developer</strong> specializing in  
            <strong> Java, Spring Boot, and React</strong>. I love building scalable,  
            high-performance applications and working with modern ML frameworks  
            like <strong>YOLOv8</strong> and <strong>TensorFlow/Keras</strong>.
          </p>

          <p className="about-desc">
            I enjoy solving real problems with clean, maintainable code and  
            working in fast-paced engineering environments. Currently, I’m  
            building advanced full-stack and AI-driven systems.
          </p>

          {/* BULLET POINTS */}
          <ul className="about-points">
            <li><FiCode /> Built multiple full-stack applications</li>
            <li><FiZap /> Hands-on experience with real-time AI systems</li>
            <li><FiAward /> Solved <strong>100+ LeetCode</strong> problems</li>
          </ul>
        </div>

        {/* RIGHT : INFO CARD */}
        <div className="about-card">
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
            <p>Web Dev, AI Systems, Clean Code</p>
          </div>

          <div className="info-row">
            <span>LeetCode</span>
            <p>100+ Problems Solved</p>
          </div>

          <div className="info-row">
            <span>Strong Areas</span>
            <p>Backend, APIs, UI/UX, Problem Solving</p>
          </div>
        </div>

      </div>
    </section>
  );
}

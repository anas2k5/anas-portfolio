// Hero.jsx
import React from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg"; // adjust path if needed

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Home">
      <div className="hero-inner container">
        <div className="hero-top">
          {/* Avatar */}
          <div className="hero-avatar">
            <img src={profile} alt="Syed Anas" className="avatar-img" />
            <span className="avatar-ring"></span>
          </div>

          {/* Text */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Syed Anas</span>
          </h1>

          <p className="hero-role">
            Java Full-Stack Developer • Spring Boot • React
          </p>

          <p className="hero-desc">
            I build scalable Java-based full-stack applications using Spring
            Boot, React, and cloud-ready backend design. Focused on clean
            architecture, performance, and turning ideas into reliable
            real-world systems.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              See Projects
            </a>

            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>

            {/* NEW Download Resume Button */}
            <a
              href="/Syed_Anas_Resume.pdf"
              download="Syed_Anas_Resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

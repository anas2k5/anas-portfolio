import "./Hero.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-wrapper">

        {/* Avatar */}
        <div className="hero-avatar">
          <img src={profile} alt="Syed Anas" />
          <div className="avatar-glow"></div>
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Syed Anas</span>
        </h1>

        {/* Subheading */}
        <h3 className="hero-subtitle">
          Full Stack Developer • Java • Spring Boot • React
        </h3>

        {/* Description */}
        <p className="hero-description">
          I build scalable, high-performance web apps and AI-powered systems.  
          Passionate about clean UI, problem-solving, and modern engineering practices.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">See Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>

      </div>
    </section>
  );
}

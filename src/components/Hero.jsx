import "./Hero.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <img src={profile} className="hero-img" alt="profile" />

        <h1 className="hero-title">
          Hi, I'm <span>Syed Anas</span>
        </h1>

        <h3 className="hero-sub">
          Full Stack Developer • Java • Spring Boot • React
        </h3>

        <p className="hero-text">
          I develop scalable web apps and AI-powered systems using modern tools.
          I enjoy building clean UIs, solving complex problems, and delivering
          meaningful digital products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">See Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>

      </div>
    </section>
  );
}

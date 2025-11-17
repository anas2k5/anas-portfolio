import "./Hero.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-top reveal">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <img src={profile} alt="Syed Anas" className="hero-image" />
          </div>

          <div className="hero-copy">
            <h1 className="hero-title">
              Hi, I'm <span>Syed Anas</span>
            </h1>

            <h3 className="hero-sub">Full Stack Developer • Java • Spring Boot • React</h3>

            <p className="hero-desc">
              I develop scalable web applications and ML-powered systems using modern tools.
              I enjoy clean code, problem solving and building products that matter.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn primary">See Projects</a>
              <a href="#contact" className="btn ghost">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-particles" aria-hidden />
    </section>
  );
}

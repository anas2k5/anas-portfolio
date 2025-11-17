import "./About.css";

export default function About(){
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-left">
            <p>
              I'm a B.Tech (CSE) student at Narayana Engineering College (CGPA 9.0). I build scalable web applications using Java Spring Boot and React, and I have experience working with ML tools (YOLOv8, TensorFlow/Keras) for real-time systems.
            </p>

            <p style={{marginTop:12}}>
              I enjoy solving real-world problems by writing clean, maintainable code and collaborating in fast-paced teams. I am actively building projects around web development and intelligent systems.
            </p>
          </div>

          <div className="about-right">
            <ul className="about-list">
              <li><strong>Education:</strong> B.Tech (CSE) — Narayana Engineering College</li>
              <li><strong>CGPA:</strong> 9.0</li>
              <li><strong>Internships:</strong> Indian Servers; Sopra Steria</li>
              <li><strong>Location:</strong> Nellore, AP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

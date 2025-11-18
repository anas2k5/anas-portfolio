import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section reveal">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-left-only">
          <p>
            I'm a B.Tech (CSE) student at Narayana Engineering College (CGPA 9.0).
            I build scalable full-stack applications using Java Spring Boot and React,
            and I have hands-on experience working with ML frameworks such as YOLOv8
            and TensorFlow/Keras for real-time intelligent systems.
          </p>

          <p style={{ marginTop: 14 }}>
            I enjoy solving real-world problems by writing clean, maintainable code
            and collaborating in fast-paced development environments. I’m currently
            building advanced projects in full-stack development and AI-driven systems.
          </p>

          <p style={{ marginTop: 14, fontWeight: 600, color: "var(--accent)" }}>
            • Solved 100+ problems on LeetCode.
          </p>
        </div>
      </div>
    </section>
  );
}

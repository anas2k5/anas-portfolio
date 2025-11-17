import "./Education.css";

export default function Education() {
  return (
    <section className="education-section reveal">
      <div className="container">
        <h2>Education</h2>

        <div className="edu-card glass">
          <div className="edu-left">
            <h3>B.Tech (Computer Science and Engineering)</h3>
            <p className="muted">Narayana Engineering College</p>
          </div>

          <div className="edu-right">
            <div><strong>CGPA</strong> 9.0</div>
            <div><strong>Year</strong> 2021 — 2025</div>
            <div><strong>Location</strong> Nellore, AP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

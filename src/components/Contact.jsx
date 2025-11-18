import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-grid">

          {/* LEFT CARD — CONTACT DETAILS */}
          <div className="contact-card">
            <h3 className="card-heading">Contact Details</h3>

            <p className="contact-subtext">
              If you'd like to collaborate, discuss opportunities, or just say hello —
              feel free to reach out!
            </p>

            <div className="contact-info-box">

              <div className="info-row">
                <span>Email</span>
                <a href="mailto:anassyed236@gmail.com">anassyed236@gmail.com</a>
              </div>

              <div className="info-row">
                <span>Phone</span>
                <a href="tel:+919618602490">+91 9618602490</a>
              </div>

              <div className="info-row">
                <span>LinkedIn</span>
                <a href="https://www.linkedin.com/in/anas-syed-211816274/" target="_blank">
                  View Profile
                </a>
              </div>

              <div className="info-row">
                <span>GitHub</span>
                <a href="https://github.com/anas2k5" target="_blank">
                  github.com/anas2k5
                </a>
              </div>

            </div>

            <a href="mailto:anassyed236@gmail.com" className="btn-primary contact-btn">
              Send Email
            </a>
          </div>

          {/* RIGHT CARD — RESUME */}
          <div className="contact-card">
            <h3 className="card-heading">Resume</h3>

            <p className="contact-subtext">
              Download my updated resume or view my professional profiles online.
            </p>

            <div className="resume-buttons">
              <a
                href="/anas_resume updated.pdf"
                download="Syed_Anas_Resume.pdf"
                className="btn-primary"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/anas-syed-211816274/"
                target="_blank"
                className="btn-secondary"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/anas2k5"
                target="_blank"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

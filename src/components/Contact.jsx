import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-grid">

          {/* LEFT: CONTACT CARD */}
          <div className="contact-card glass-card">
            <h3>Contact Details</h3>

            <p>
              If you'd like to collaborate, discuss opportunities, or just say hello —
              feel free to reach out!
            </p>

            <div className="info">
              <p><strong>Email:</strong> 
                <a href="mailto:anassyed236@gmail.com"> anassyed236@gmail.com</a>
              </p>

              <p><strong>Phone:</strong> 
                <a href="tel:+919618602490"> +91 9618602490</a>
              </p>

              <p><strong>LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/anas-syed-211816274/" target="_blank">
                  View Profile
                </a>
              </p>

              <p><strong>GitHub:</strong> 
                <a href="https://github.com/anas2k5" target="_blank">
                  github.com/anas2k5
                </a>
              </p>
            </div>

            <a href="mailto:anassyed236@gmail.com" className="btn primary">Send Email</a>
          </div>

          {/* RIGHT: RESUME CARD */}
          <div className="contact-card glass-card">
            <h3>Resume</h3>

            <p>
              Download my updated resume or view my professional profiles online.
            </p>

            <div className="resume-links">
              <a 
                href="/anas_resume updated.pdf" 
                download="Syed_Anas_Resume.pdf"
                className="btn primary"
              >
                Download Resume
              </a>

              <a 
                href="https://www.linkedin.com/in/anas-syed-211816274/" 
                className="btn ghost"
                target="_blank"
              >
                LinkedIn
              </a>

              <a 
                href="https://github.com/anas2k5"
                className="btn ghost"
                target="_blank"
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

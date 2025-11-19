import "./Contact.css";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-grid">

          {/* LEFT CARD */}
          <div className="contact-card">

            <h3 className="card-heading">Contact Details</h3>

            <p className="contact-subtext">
              Feel free to reach out for collaboration, opportunities, or even just a quick chat.
            </p>

            <div className="contact-info-box">

              <div className="info-row icon-row">
                <FiMail className="info-icon" />
                <a href="mailto:anassyed236@gmail.com">
                  anassyed236@gmail.com
                </a>
              </div>

              <div className="info-row icon-row">
                <FiPhone className="info-icon" />
                <a href="tel:+919618602490">+91 9618602490</a>
              </div>

              <div className="info-row icon-row">
                <FiLinkedin className="info-icon" />
                <a
                  href="https://www.linkedin.com/in/anas-syed-211816274/"
                  target="_blank"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="info-row icon-row">
                <FiGithub className="info-icon" />
                <a
                  href="https://github.com/anas2k5"
                  target="_blank"
                >
                  github.com/anas2k5
                </a>
              </div>
            </div>

            <a href="mailto:anassyed236@gmail.com" className="btn-primary full-btn">
              Send Email
            </a>
          </div>

          {/* RIGHT CARD */}
          <div className="contact-card">
            <h3 className="card-heading">Resume</h3>

            <p className="contact-subtext">
              Download my updated resume below.
            </p>

            <div className="resume-buttons">
              <a
                href="/Syed_Anas_Resume.pdf"
                download="Syed_Anas_Resume.pdf"
                className="btn-primary"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section reveal">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="glass contact-left">
            <h3>Get in touch</h3>
            <p>Email: <a href="mailto:anassyed236@gmail.com">anassyed236@gmail.com</a></p>
            <p>Phone: <a href="tel:+919618602490">+91 9618602490</a></p>
            <div style={{marginTop:12}}>
              <a className="btn primary" href="mailto:anassyed236@gmail.com">Send Email</a>
            </div>
          </div>

          <div className="glass contact-right">
            <h3>Resume</h3>
            <p>Download a copy of my resume or check my LinkedIn & GitHub.</p>
            <div style={{marginTop:12}}>
              <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

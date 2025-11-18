import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Detect active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let scrollPos = window.scrollY + 140; // improved accuracy

      sections.forEach((sec) => {
        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActiveSection(sec.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-logo">
          <a href="#home">Syed Anas</a>
        </div>

        {/* MENU */}
        <ul className="nav-links">
          {["home", "about", "skills", "experience", "projects"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className={`contact-btn ${
                activeSection === "contact" ? "active-contact" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="nav-socials">
          <a
            href="https://github.com/anas2k5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anas-syed-211816274/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Highlight active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let scrollPos = window.scrollY + 120;

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
        <div className="nav-logo">Syed Anas</div>

        {/* NAV LINKS */}
        <ul className="nav-links">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className={`contact-btn ${activeSection === "contact" ? "active-contact" : ""}`}
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
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anas-syed-211816274/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
}

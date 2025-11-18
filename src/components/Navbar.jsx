import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo">Syed Anas</div>

        {/* MENU */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="nav-socials">
          <a href="https://github.com/anas2k5" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/anas-syed-211816274/" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
}

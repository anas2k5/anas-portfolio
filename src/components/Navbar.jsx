import React, {useState} from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
  const [open,setOpen]=useState(false);
  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-circle">A</div>
          <div>
            <div className="brand-name">Syed Anas</div>
            <div className="brand-sub small">Full Stack Developer</div>
          </div>
        </div>

        <nav className={`navlinks ${open ? "open" : ""}`}>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="burger" onClick={()=>setOpen(s=>!s)} aria-label="menu">
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  );
}

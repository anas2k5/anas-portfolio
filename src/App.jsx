import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { initReveal } from "./utils/scrollReveal";
import "./App.css";

export default function App() {
  useEffect(() => {
    initReveal();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <div className="reveal">
          <Hero />
        </div>

        {/* ABOUT */}
        <section className="section reveal">
          <div className="container">
            <About />
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section reveal" id="education">
          <div className="container">
            <Education />
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section reveal" id="skills">
          <div className="container">
            <Skills />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section experience-section reveal" id="experience">
          <div className="container">
            <Experience />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section reveal" id="projects">
          <div className="container">
            <Projects />
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section reveal" id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>

      </main>
    </>
  );
}

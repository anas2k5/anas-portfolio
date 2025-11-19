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
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  useEffect(() => {
    initReveal();
  }, []);

return (
  <>
    <Navbar />
    <main>

      <section className="section" id="home">
  <Hero />
</section>
  {/* <-- no reveal wrapper */}

      <section className="section reveal" id="about">
        <About />
      </section>

      <section className="section reveal" id="education">
        <Education />
      </section>

      <section className="section reveal" id="skills">
        <Skills />
      </section>

      <section className="section reveal" id="experience">
        <Experience />
      </section>

      <section className="section reveal" id="projects">
        <Projects />
      </section>

      <section className="section reveal" id="contact">
        <Contact />
      </section>

      <Footer />

    </main>
  </>
);



}

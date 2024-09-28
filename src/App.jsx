import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Certification from "./components/certification/Certification";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Certification />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

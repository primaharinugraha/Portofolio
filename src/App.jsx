import React, { useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import CVSection from "./components/Resume/Resume";


function App() {
  useEffect(() => {
    Aos.init({duration:500}); // Inisialisasi tanpa konfigurasi tambahan
  }, []);
  return (
    <div className={`${styles.App} bg-red-500 text-white`}>
  <Navbar />
  <Hero />
  <About />
  <Experience />
  <Projects />
  <CVSection />
  <Contact />
</div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Hero from './Components/hero';
import About from './Components/About';
import Services from './Components/Projects';
import Contact from './Components/Contact';
import Header from './Components/Sidebar';
import Footer from './Components/Footer';
import CursorEffect from './Components/CursorEffect';
import 'react-toastify/dist/ReactToastify.css';

 

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });

  }, []);

 

  return (
    <Router>

<div className="app-container bg-[#050505] text-white">
<CursorEffect />
        <Header />

        <main className="pt-16">

          <section
            id="hero"
            data-aos="fade-up"
          >
            <Hero />
          </section>

          <section
            id="projects"
            className="pt-6"
            data-aos="fade-up"
          >
            <Services />
          </section>

          <section
            id="about"
            className="pt-6"
            data-aos="fade-right"
          >
            <About />
          </section>

          <section
            id="contact"
            className="pt-6"
            data-aos="zoom-in"
          >
            <Contact />
          </section>

        </main>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
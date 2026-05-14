import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import oruvanLogo from '../assets/heroimg.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0F0F0F] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">

        <p className="text-red-500 font-semibold tracking-[4px] uppercase mb-4">
          Oruvan Creative Studio
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building Modern <br />
          Digital Experiences
        </h1>

        <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-[50px]">
          <Typed
            strings={[
              'Website Development',
              'Brand Identity Design',
              'UI/UX Experiences',
              'Creative Digital Solutions',
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </div>

        <p className="text-gray-400 text-lg leading-8 max-w-xl mb-8">
          Oruvan helps businesses build a powerful digital presence through
          modern websites, branding, UI/UX design, posters, brochures,
          and creative business solutions.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">

          <a
            href="#services"
            className="bg-red-600 hover:bg-red-700 transition duration-300 px-7 py-3 rounded-full font-semibold"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-red-500 hover:text-red-500 transition duration-300 px-7 py-3 rounded-full font-semibold"
          >
            Contact Now
          </a>

        </div>
      </div>

      {/* RIGHT IMAGE / LOGO */}
      <div className="md:w-1/2 flex justify-center items-center mt-16 md:mt-0 relative">

        {/* Glow Background */}
        <div className="absolute w-[300px] h-[300px] bg-red-600/20 blur-[120px] rounded-full"></div>

        <img
          src={oruvanLogo}
          alt="Oruvan Logo"
          className="relative w-full max-w-2xl object-contain animate-float"
        />
      </div>

    </section>
  );
};

export default Hero;
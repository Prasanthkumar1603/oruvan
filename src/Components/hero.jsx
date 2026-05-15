import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import oruvanLogo from '../assets/heroimg.png';

const Hero = () => {
  return (

    <section
      id="hero"
      className="
        hero-grid
        relative
        min-h-screen
        bg-[#0F0F0F]
        text-white
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        px-6
        md:px-16
        ppt-32 pb-16
        overflow-hidden
      "
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">

        {/* RED GLOW */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full animate-pulse"></div>

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/5 blur-[150px] rounded-full animate-pulse"></div>

      </div>

      {/* LEFT CONTENT */}
      <div
        className="
          md:w-1/2
          flex
          flex-col
          justify-center
          items-center
          md:items-start
          text-center
          md:text-left
          z-10
        "
      >

        {/* TOP SMALL TEXT */}
        <p
          data-aos="fade-up"
          className="
            text-red-500
            font-semibold
            tracking-[4px]
            uppercase
            mb-4
          "
        >
          Oruvan Creative Studio
        </p>

        {/* BADGE */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/5
            border
            border-white/10
            mb-6
            backdrop-blur-md
          "
        >

          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

          <span className="text-sm text-gray-300">
            Available For Freelance Projects
          </span>

        </div> */}

        {/* MAIN TITLE */}
        <h1
          data-aos="fade-up"
          data-aos-delay="250"
          className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            mb-6
          "
        >
          Building Modern
          <br />
          Digital Experiences
        </h1>

        {/* TYPED TEXT */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="
            text-2xl
            md:text-3xl
            font-bold
            mb-6
            h-[50px]
            bg-gradient-to-r
            from-red-500
            to-white
            bg-clip-text
            text-transparent
          "
        >

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

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="650"
          className="
            text-gray-400
            text-lg
            leading-8
            max-w-xl
            mb-8
          "
        >
          Oruvan helps businesses build a powerful digital presence
          through modern websites, branding, UI/UX design,
          posters, brochures, and creative business solutions.
        </p>

        {/* BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="850"
          className="
            flex
            gap-4
            flex-wrap
            justify-center
            md:justify-start
          "
        >

          {/* BUTTON 1 */}
          <a
            href="#services"
            className="
              bg-red-600
              hover:bg-red-700
              transition-all
              duration-300
              px-7
              py-3
              rounded-full
              font-semibold
              shadow-[0_0_30px_rgba(255,0,0,0.25)]
            "
          >
            Explore Services
          </a>

          {/* BUTTON 2 */}
          <a
            href="#contact"
            className="
              border
              border-gray-600
              hover:border-red-500
              hover:text-red-500
              transition-all
              duration-300
              px-7
              py-3
              rounded-full
              font-semibold
              backdrop-blur-md
            "
          >
            Contact Now
          </a>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        className="
          md:w-1/2
          flex
          justify-center
          items-center
          mt-16
          md:mt-0
          relative
          z-10
        "
      >

        {/* IMAGE GLOW */}
        <div className="absolute w-[350px] h-[350px] bg-red-600/20 blur-[120px] rounded-full hover:scale-[1.02] transition duration-700"></div>

        {/* HERO IMAGE */}
        <img
          src={oruvanLogo}
          alt="Oruvan Hero"
          className="
relative
w-full
max-w-3xl
object-contain
animate-heroReveal
drop-shadow-[0_0_40px_rgba(255,0,0,0.20)]
"
        />

      </div>

    </section>
  );
};

export default Hero;
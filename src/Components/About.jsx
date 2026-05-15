import React, { useState } from 'react';
import aboutImage from '../assets/about.png';

const About = () => {

  const [readMore, setReadMore] = useState(false);

  return (

    <section
      id="about"
      className="
        relative
        bg-[#0B0B0B]
        text-white
        py-24
        px-6
        md:px-16
        overflow-hidden
      "
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-red-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/5 blur-[130px] rounded-full"></div>

      {/* TITLE */}
      <div
        data-aos="fade-up"
        className="text-center mb-16 relative z-10"
      >

        <p className="text-red-500 tracking-[4px] uppercase font-semibold mb-3">
          About Oruvan
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Creative Digital Solutions
        </h2>

      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-16
          items-center
          relative
          z-10
        "
      >

        {/* LEFT IMAGE */}
        <div
          data-aos="fade-right"
          className="
            relative
            flex
            justify-center
            items-center
          "
        >

          {/* GLOW */}
          <div className="absolute w-[320px] h-[320px] bg-red-600/10 blur-[120px] rounded-full"></div>

          {/* IMAGE CARD */}
          <div
            className="
              relative
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              p-4
              shadow-2xl
              backdrop-blur-md
              transition-all
              duration-500
              hover:border-red-500/30
              hover:shadow-[0_0_50px_rgba(255,0,0,0.10)]
              max-w-[430px]
              w-full
            "
          >

            <img
              src={aboutImage}
              alt="About Oruvan"
              className="
                rounded-2xl
                object-contain
                w-full
              "
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center"
        >

          {/* BADGE */}
          {/* <div
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
              w-fit
            "
          >

            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

            <span className="text-sm text-gray-300">
              Freelance Creative Team
            </span>

          </div> */}

          {/* TITLE */}
          <h3
            className="
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Building Modern Experiences
            <span className="text-red-500">
              {' '}Through Design & Development.
            </span>
          </h3>

          {/* SHORT DESCRIPTION */}
          <p
            className="
              text-gray-400
              text-lg
              leading-8
              mb-6
              transition-all
              duration-500
              hover:text-gray-200
            "
          >

            Oruvan is a creative digital studio focused on building modern,
            scalable, and visually engaging digital solutions for businesses,
            startups, and personal brands.

          </p>

          {/* READ MORE CONTENT */}
          <div
            className={`
              overflow-hidden
              transition-all
              duration-700
              ${readMore ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >

            <p
              className="
                text-gray-400
                text-lg
                leading-8
                mb-6
                transition-all
                duration-500
                hover:text-gray-200
              "
            >

              Founded by

              <span
                className="
                  text-white
                  font-semibold
                  ml-1
                "
              >
                Prasanthkumar
              </span>

              {' '}along with a passionate freelance creative team,
              Oruvan delivers modern websites, branding, UI/UX design,
              social media creatives, and digital experiences crafted
              with creativity, performance, and attention to detail.

            </p>

            <p
              className="
                text-gray-400
                text-lg
                leading-8
                mb-8
                transition-all
                duration-500
                hover:text-gray-200
              "
            >

              Our goal is to help businesses build a strong digital presence
              through clean design, modern technology, and impactful visual
              communication that creates real business value.

            </p>

          </div>

          {/* READ MORE BUTTON */}
          <button
            onClick={() => setReadMore(!readMore)}
            className="
              w-fit
              text-red-500
              font-semibold
              mb-10
              transition-all
              duration-300
              hover:text-red-400
            "
          >

            {readMore ? 'Read Less —' : 'Read More +'}

          </button>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* CARD 1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="
                group
                bg-[#121212]
                border
                border-white/10
                rounded-2xl
                p-6
                text-center
                min-w-[220px]
                transition-all
                duration-500
                hover:border-red-500/30
                hover:-translate-y-1
              "
            >

              <h4
                className="
                  text-4xl
                  font-bold
                  text-red-500
                  mb-2
                "
              >
                10+
              </h4>

              <p className="text-gray-400">
                Projects Completed
              </p>

            </div>

            {/* CARD 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="
                group
                bg-[#121212]
                border
                border-white/10
                rounded-2xl
                p-6
                text-center
                min-w-[220px]
                transition-all
                duration-500
                hover:border-red-500/30
                hover:-translate-y-1
              "
            >

              <h4
                className="
                  text-4xl
                  font-bold
                  text-red-500
                  mb-2
                "
              >
                100%
              </h4>

              <p className="text-gray-400">
                Creative Focus
              </p>

            </div>

          </div>

          {/* SIGNATURE */}
          <div className="mt-10 text-center">

            <h4
              className="
                text-white
                font-semibold
                text-lg
                transition-all
                duration-500
                hover:text-red-500
              "
            >
              Prasanthkumar
            </h4>

            <p className="text-gray-500">
              Founder • Oruvan
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
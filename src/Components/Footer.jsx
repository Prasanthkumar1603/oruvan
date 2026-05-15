import React from 'react';
import logo from '../assets/oruvanlogo.png';

const Footer = () => {
  return (

    <footer className="bg-[#050505] text-white relative overflow-hidden">

      {/* TOP GRADIENT LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* LEFT */}
          <div data-aos="fade-up">

            {/* LOGO */}
            <img
              src={logo}
              alt="Oruvan Logo"
              className="h-16 object-contain mb-6"
            />

            {/* BADGE */}
            {/* <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-[#111111]
                border
                border-white/10
                mb-6
              "
            >

              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

              <span className="text-sm text-gray-300">
                Available For Freelance Projects
              </span>

            </div> */}

            {/* CONTENT */}
            <p className="text-gray-400 leading-8 max-w-sm">

              Oruvan helps businesses, startups, and personal brands
              build modern digital experiences through websites,
              branding, UI/UX design, and creative solutions.

            </p>

          </div>

          {/* CENTER */}
          <div data-aos="fade-up" data-aos-delay="200">

            <h3 className="text-2xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <a
                  href="#hero"
                  className="
                    hover:text-red-500
                    transition-all
                    duration-300
                    hover:pl-2
                    inline-block
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="
                    hover:text-red-500
                    transition-all
                    duration-300
                    hover:pl-2
                    inline-block
                  "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="
                    hover:text-red-500
                    transition-all
                    duration-300
                    hover:pl-2
                    inline-block
                  "
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                    hover:text-red-500
                    transition-all
                    duration-300
                    hover:pl-2
                    inline-block
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* RIGHT */}
          <div data-aos="fade-up" data-aos-delay="400">

            <h3 className="text-2xl font-semibold mb-8">
              Connect With Us
            </h3>

            {/* SOCIALS */}
            <div className="flex gap-4 mb-8 flex-wrap">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-[#111111]
                  border border-white/10
                  flex items-center justify-center
                  text-xl
                  transition-all
                  duration-300
                  hover:border-red-500
                  hover:text-red-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_20px_rgba(255,0,0,0.35)]
                "
              >
                <i className='bx bxl-linkedin'></i>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-[#111111]
                  border border-white/10
                  flex items-center justify-center
                  text-xl
                  transition-all
                  duration-300
                  hover:border-red-500
                  hover:text-red-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_20px_rgba(255,0,0,0.35)]
                "
              >
                <i className='bx bxl-github'></i>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-[#111111]
                  border border-white/10
                  flex items-center justify-center
                  text-xl
                  transition-all
                  duration-300
                  hover:border-red-500
                  hover:text-red-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_20px_rgba(255,0,0,0.35)]
                "
              >
                <i className='bx bxl-instagram'></i>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917871922657"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-[#111111]
                  border border-white/10
                  flex items-center justify-center
                  text-xl
                  transition-all
                  duration-300
                  hover:border-red-500
                  hover:text-red-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_20px_rgba(255,0,0,0.35)]
                "
              >
                <i className='bx bxl-whatsapp'></i>
              </a>

            </div>

            {/* CONTACT INFO */}
            <div className="space-y-5">

              {/* EMAIL */}
              <div
                className="
                  bg-[#111111]
                  border border-white/10
                  rounded-2xl
                  p-4
                  transition-all
                  duration-300
                  hover:border-red-500/30
                "
              >

                <p className="text-sm text-gray-500 mb-1">
                  Email
                </p>

                <p className="text-gray-300 break-all">
                  prasanthkumar.pk.official@gmail.com
                </p>

              </div>

              {/* PHONE */}
              <div
                className="
                  bg-[#111111]
                  border border-white/10
                  rounded-2xl
                  p-4
                  transition-all
                  duration-300
                  hover:border-red-500/30
                "
              >

                <p className="text-sm text-gray-500 mb-1">
                  WhatsApp
                </p>

                <p className="text-gray-300">
                  +91 78719 22657
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10
            mt-14
            pt-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-gray-500 text-sm text-center">

            © {new Date().getFullYear()} Oruvan.
            All rights reserved.

          </p>

          <p className="text-gray-600 text-sm text-center">

            Crafted with creativity by Oruvan

          </p>

        </div>

      </div>

    </footer>

  );
};

export default Footer;
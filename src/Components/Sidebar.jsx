import React, { useState } from 'react';
import logo from '../assets/oruvanlogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">

        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Oruvan Logo"
            className="h-18  md:h-40 object-contain"
          />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={toggleMenu}
        >
          <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

        {/* NAVIGATION */}
        <nav
          className={`
            absolute md:static top-20 left-0 w-full md:w-auto
            bg-[#0F0F0F]/95 md:bg-transparent
            backdrop-blur-xl md:backdrop-blur-none
            transition-all duration-300
            ${isOpen ? 'block' : 'hidden md:block'}
          `}
        >

          <ul className="flex flex-col md:flex-row items-center gap-8 py-8 md:py-0 text-white font-medium">

            <li>
              <a
                href="#hero"
                className="hover:text-red-500 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-red-500 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-red-500 transition duration-300"
              >
                Contact
              </a>
            </li>

            {/* CTA BUTTON */}
            <li>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition duration-300"
              >
                Let’s Talk
              </a>
            </li>

          </ul>

        </nav>

      </div>

    </header>
  );
};

export default Header;
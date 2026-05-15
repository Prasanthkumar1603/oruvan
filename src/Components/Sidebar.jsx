import React, { useEffect, useState } from 'react';
import logo from '../assets/oruvanlogo.png';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // SCROLL EFFECT
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (

    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        px-2 md:px-6

        ${scrolled
          ? `
            py-3
          `
          : `
            py-0
 
          `
        }
      `}
    >

<div
  className={`
    max-w-7xl
    mx-auto
    flex
    items-center
    justify-between
    transition-all
    duration-500
    border

    ${scrolled
      ? `
        bg-black/70
        backdrop-blur-2xl
        border-white/10
        rounded-2xl
        px-8
        h-[78px]
        shadow-[0_0_40px_rgba(255,0,0,0.06)]
      `
      : `
  bg-black/20
  backdrop-blur-md
  border-transparent
  px-6
  h-[92px]
      `
    }
  `}
>
        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center gap-3"
        >

<img
  src={logo}
  alt="Oruvan Logo"
  className="
  h-16
  md:h-24
  object-contain
"
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
            absolute
            md:static
            top-20
            left-0
            w-full
            md:w-auto

            bg-[#0F0F0F]/95
            md:bg-transparent

            backdrop-blur-xl
            md:backdrop-blur-none

            transition-all
            duration-300

            ${isOpen ? 'block' : 'hidden md:block'}
          `}
        >

<ul
  className="
    flex
    flex-col
    md:flex-row
    items-center
    gap-8
    py-8
    md:py-5
    text-white
    font-medium
  "
>

  {/* HOME */}
  <li>
    <a
      href="#hero"
      className="
        relative
        group
        hover:text-red-500
        transition-all
        duration-300
      "
    >

      Home

      {/* UNDERLINE */}
      <span
        className="
          absolute
          left-0
          -bottom-2
          h-[2px]
          w-0
          bg-red-500
          transition-all
          duration-300
          group-hover:w-full
        "
      ></span>

    </a>
  </li>

  {/* ABOUT */}
  <li>
    <a
      href="#about"
      className="
        relative
        group
        hover:text-red-500
        transition-all
        duration-300
      "
    >

      About

      <span
        className="
          absolute
          left-0
          -bottom-2
          h-[2px]
          w-0
          bg-red-500
          transition-all
          duration-300
          group-hover:w-full
        "
      ></span>

    </a>
  </li>

  {/* SERVICES */}
  <li>
    <a
      href="#services"
      className="
        relative
        group
        hover:text-red-500
        transition-all
        duration-300
      "
    >

      Services

      <span
        className="
          absolute
          left-0
          -bottom-2
          h-[2px]
          w-0
          bg-red-500
          transition-all
          duration-300
          group-hover:w-full
        "
      ></span>

    </a>
  </li>

  {/* CONTACT */}
  <li>
    <a
      href="#contact"
      className="
        relative
        group
        hover:text-red-500
        transition-all
        duration-300
      "
    >

      Contact

      <span
        className="
          absolute
          left-0
          -bottom-2
          h-[2px]
          w-0
          bg-red-500
          transition-all
          duration-300
          group-hover:w-full
        "
      ></span>

    </a>
  </li>

  {/* BUTTON */}
  <li>

    <a
      href="#contact"
      className="
        bg-red-600
        hover:bg-red-700
        px-6
        py-2.5
        rounded-full
        transition-all
        duration-300
        hover:scale-105
        shadow-[0_0_20px_rgba(255,0,0,0.25)]
      "
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
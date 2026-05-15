import React from 'react';

import {
  Globe,
  Palette,
  LayoutDashboard,
  MonitorSmartphone,
  Brush,
  BadgeCheck,
  Megaphone,
  Layers3,
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={34} />,
    title: 'Website Development',
    description:
      'Modern, responsive, and high-performance business websites built for all devices.',
  },

  {
    icon: <LayoutDashboard size={34} />,
    title: 'UI/UX Design',
    description:
      'Clean and modern user interface designs focused on user experience.',
  },

  {
    icon: <Palette size={34} />,
    title: 'Logo & Branding',
    description:
      'Creative logo design and complete brand identity solutions for businesses.',
  },

  {
    icon: <MonitorSmartphone size={34} />,
    title: 'Portfolio Websites',
    description:
      'Professional portfolio and personal brand websites with modern layouts.',
  },

  {
    icon: <Megaphone size={34} />,
    title: 'Social Media Ads',
    description:
      'Creative Instagram, Facebook, and WhatsApp promotional ad designs.',
  },

  {
    icon: <Brush size={34} />,
    title: 'Posters & Brochures',
    description:
      'Creative marketing materials including posters, brochures, and banners.',
  },

  {
    icon: <Layers3 size={34} />,
    title: 'Landing Pages',
    description:
      'High-converting landing pages designed for campaigns and businesses.',
  },

  {
    icon: <BadgeCheck size={34} />,
    title: 'Business Solutions',
    description:
      'Custom digital solutions for startups, freelancers, and growing businesses.',
  },
];

const Services = () => {
  return (

    <section
      id="services"
      className="
        relative
        bg-[#070707]
        text-white
        py-24
        px-6
        md:px-16
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/5 blur-[140px] rounded-full"></div>

      {/* TITLE */}
      <div
        data-aos="fade-up"
        className="text-center mb-16 relative z-10"
      >

        <p className="text-red-500 uppercase tracking-[4px] font-semibold mb-3">
          What We Offer
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Creative Services
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
          Oruvan provides creative digital services designed to help businesses
          build a strong and professional online presence.
        </p>

      </div>

      {/* SERVICES GRID */}
      <div
  className="
    max-w-7xl
    mx-auto
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-8
    relative
    z-10
  "
>

        {services.map((service, index) => (

          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="
              group
              relative
              overflow-hidden
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              p-8
              transition-all
              duration-500
              hover:border-red-500/40
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(255,0,0,0.12)]
            "
          >

            {/* TOP HOVER LINE */}
            <div
              className="
                absolute
                top-0
                left-0
                w-0
                h-[2px]
                bg-red-500
                group-hover:w-full
                transition-all
                duration-500
              "
            ></div>

            {/* ICON */}
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-red-500/10
                text-red-500
                flex
                items-center
                justify-center
                mb-6
                transition-all
                duration-500
                group-hover:bg-red-500/20
                group-hover:scale-110
              "
            >
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-7">
              {service.description}
            </p>

          </div>

        ))}

      </div>

      {/* BOTTOM CTA */}
      <div
        data-aos="fade-up"
        className="text-center mt-20 relative z-10"
      >

        <p className="text-gray-400 mb-6 text-lg">
          Need a custom digital solution for your business?
        </p>

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-2
            bg-red-600
            hover:bg-red-700
            transition-all
            duration-300
            px-8
            py-4
            rounded-full
            font-semibold
            shadow-[0_0_30px_rgba(255,0,0,0.20)]
          "
        >
          Start Your Project
        </a>

      </div>

    </section>
  );
};

export default Services;
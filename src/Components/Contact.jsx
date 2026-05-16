import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === 'phone') {

      const numOnly = value.replace(/[^0-9]/g, '');

      setFormData({
        ...formData,
        phone: numOnly,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
  
    setLoading(true);
  
    const toastId = toast.loading('Sending message...');
  
    const fullNumber = `${formData.countryCode}${formData.phone}`;
  
    const payload = {
      name: formData.name,
      whatsapp: fullNumber,
      message: formData.message,
    };
  
    try {
  
      await axios.post(
        `${apiUrl}/api/messages/`,
        payload,
        {
          timeout: 10000,
        }
      );
  
      toast.update(toastId, {
        render: 'Message Sent Successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });
  
      setFormData({
        name: '',
        countryCode: '+91',
        phone: '',
        message: '',
      });
  
    } catch (error) {
  
      toast.update(toastId, {
        render: 'Server busy. Try again!',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
  
      console.error(error);
  
    } finally {
  
      setLoading(false);
  
    }
  
  };

  return (

    <section
      id="contact"
      className="
        relative
        bg-[#050505]
        text-white
        py-24
        px-6
        md:px-16
        overflow-hidden
      "
    >

<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  theme="dark"
/>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-10 w-80 h-80 bg-red-500/5 blur-[140px] rounded-full"></div>

      {/* TITLE */}
      <div
        data-aos="fade-up"
        className="text-center mb-16 relative z-10"
      >

        <p className="text-red-500 uppercase tracking-[4px] font-semibold mb-3">
          Contact Oruvan
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">

          Have a project idea or need a creative digital solution?
          Let’s connect and bring your vision to life with Oruvan.

        </p>

      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          items-center
          relative
          z-10
        "
      >

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="
            flex
            flex-col
            justify-center
          "
        >

          {/* HEADING */}
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">

            Let’s Create
            <span className="text-red-500">
              {' '}Modern Digital Experiences.
            </span>

          </h3>

          {/* CONTENT */}
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

            Oruvan helps startups, businesses, and personal brands
            build premium digital experiences through websites,
            branding, UI/UX design, social media creatives,
            and modern development solutions.

          </p>

          <p
            className="
              text-gray-400
              text-lg
              leading-8
              mb-10
              transition-all
              duration-500
              hover:text-gray-200
            "
          >

            Whether you need a business website, creative branding,
            portfolio design, or complete digital presence —
            we’re ready to turn your ideas into reality.

          </p>

          {/* INFO CARDS */}
          <div className="flex flex-col gap-5">

            {/* CARD */}
            <div
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-2xl
                p-5
                transition-all
                duration-500
                hover:border-red-500/30
              "
            >

              <h4 className="text-red-500 font-semibold mb-2">
                WhatsApp Support
              </h4>

              <p className="text-gray-400">
                Fast response for project discussions & client support.
              </p>

            </div>

            {/* CARD */}
            <div
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-2xl
                p-5
                transition-all
                duration-500
                hover:border-red-500/30
              "
            >

              <h4 className="text-red-500 font-semibold mb-2">
                Creative Solutions
              </h4>

              <p className="text-gray-400">
                Websites, branding, posters, UI/UX, social creatives & more.
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div
          data-aos="fade-left"
          className="
            bg-[#101010]
            border
            border-white/10
            rounded-3xl
            p-8
            md:p-10
            shadow-[0_0_60px_rgba(255,0,0,0.05)]
            backdrop-blur-md
          "
        >

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6"
          >

            {/* NAME */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="
                  w-full
                  bg-[#181818]
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-red-500
                  transition-all
                  duration-300
                "
              />

            </div>

            {/* PHONE */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                WhatsApp Number
              </label>

              <div className="flex gap-3">

                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="
                    bg-[#181818]
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    text-white
                    focus:outline-none
                    focus:border-red-500
                  "
                >

                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+971">+971</option>
                  <option value="+94">+94</option>

                </select>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter WhatsApp number"
                  required
                  className="
                    flex-1
                    bg-[#181818]
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    transition-all
                    duration-300
                  "
                />

              </div>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about your project..."
                required
                className="
                  w-full
                  bg-[#181818]
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-red-500
                  transition-all
                  duration-300
                  resize-none
                "
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                bg-red-600
                hover:bg-red-700
                transition-all
                duration-300
                rounded-2xl
                py-4
                text-lg
                font-semibold
                shadow-[0_0_30px_rgba(255,0,0,0.25)]
                hover:scale-[1.01]
                disabled:opacity-70
              "
            >

              {loading ? 'Sending...' : 'Send Message'}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
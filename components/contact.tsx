"use client";

import { FC } from "react";

const Contact: FC = () => {
  return (
    <section id="contact" className="py-10 px-6 md:px-30 bg-[#FEFCFB]">
      <div>
        <h3 className="text-xl font-bold text-left mb-4 text-[#116881]">
          Get In Touch
        </h3>
        <h2
          className="relative text-3xl font-bold text-left mb-12 text-[#001F54] group inline-block"
          style={{ fontFamily: "'Martel Sans', sans-serif" }}
        >
          Contact Us
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001F54] transition-all duration-700 group-hover:w-full" />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Information */}
        <div>
            <form className="space-y-6">
            {/* Name */}
            <div>
                <label className="block text-[#001F54] font-semibold mb-2" htmlFor="name">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1282A2]"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-[#001F54] font-semibold mb-2" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1282A2]"
                />
            </div>

            {/* Subject */}
            <div>
                <label className="block text-[#001F54] font-semibold mb-2" htmlFor="subject">
                Subject
                </label>
                <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1282A2]"
                />
            </div>

            {/* Message */}
            <div>
                <label className="block text-[#001F54] font-semibold mb-2" htmlFor="message">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1282A2]"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-[#1594b9] text-white px-6 py-3 rounded-lg hover:bg-[#0f6b85] transition-all"
            >
                Send Message
            </button>
            </form>
        </div>

        {/* Right - Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.68335646682!2d-79.3811548245236!3d43.654755852331284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb3495d54327%3A0x27798d1206b6abc4!2sLi%20Ka%20Shing%20Knowledge%20Institute!5e0!3m2!1sen!2sca!4v1754784141100!5m2!1sen!2sca"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

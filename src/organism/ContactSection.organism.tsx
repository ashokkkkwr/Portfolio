import React from "react";
import contactImage from "../assets/contact1.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaTelegramPlane, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-blue-100 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        <i className="fas fa-headset"></i> Get in{" "}
        <span className="text-blue-500">Touch</span>
      </h2>

      <div className="bg-white w-full lg:w-[125vh] h-auto lg:h-[50vh] flex flex-col lg:flex-row justify-center items-center rounded-3xl p-6">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src={contactImage}
            alt="Contact"
            draggable="false"
            className="w-[30vh] lg:w-[35vh] object-contain"
          />
        </div>

        <form id="contact-form" className="w-full lg:w-1/2">
          <div className="form-group">
            {/* Name input */}
            <div className="relative mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full pl-10 p-3 border border-gray-400 bg-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            {/* Email input */}
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-10 p-3 border border-gray-400 bg-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            {/* Phone input */}
            <div className="relative mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="w-full pl-10 p-3 border border-gray-400 bg-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            {/* Message textarea */}
            <div className="relative mb-4">
              <textarea
                placeholder="Message"
                name="message"
                required
                className="w-full pl-10 p-3 border border-gray-400 bg-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
              <FaMessage className="absolute left-4 top-7 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-end justify-center">
            <button
              type="submit"
              className="relative px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
              <FaTelegramPlane className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

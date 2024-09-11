import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Portfolio Section */}
          <div className="md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ashok's Portfolio
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
              <br />
              Keep Rising 🚀 and don't stop grinding.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Education",
                "Work",
                "Experience",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="flex justify-center md:justify-start items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <i className="fas fa-chevron-circle-right mr-2"></i> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Info</h3>
            <p className="flex justify-center md:justify-start items-center mb-3">
              <FaPhone className="mr-3 text-blue-400" /> +977 9818762132
            </p>
            <p className="flex justify-center md:justify-start items-center mb-3">
              <FaEnvelope className="mr-3 text-blue-400" />{" "}
              ashokkatwal9811@gmail.com
            </p>
            <p className="flex justify-center md:justify-start items-center mb-6">
              <FaMapMarkedAlt className="mr-3 text-blue-400" /> Itahari-20 Tarahara,
              Nepal-sunsari
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/ashok-katwal-2b6a402ba/"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/ashokkkkwr"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:ashokkatwal9811@gmail.com"
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                aria-label="Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Designed with{" "}
            <IoMdHeart className="inline text-red-500 animate-pulse" /> by{" "}
            <a
              href=""
              className="text-blue-400 hover:underline"
            >
              Ashok Katwal{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';

const Footer = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Portfolio Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Jigar's Portfolio</h3>
            <p className="text-base mb-4">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br />
              <br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'education', 'work', 'experience'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="flex items-center text-blue-600 hover:underline">
                    <i className="fas fa-chevron-circle-right mr-2"></i> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2 text-blue-600" /> +91 XXX-XXX-XXXX
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-blue-600" /> jigarsable21@gmail.com
            </p>
            <p className="flex items-center mb-4">
              <FaMapMarkedAlt className="mr-2 text-blue-600" /> Pune, India-412206
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jigar-sable" className="text-blue-600 hover:text-blue-800" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/jigar-sable" className="text-gray-800 hover:text-gray-600" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="mailto:jigarsable21@gmail.com" className="text-red-600 hover:text-red-800" aria-label="Mail" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} />
              </a>
              <a href="https://twitter.com/jigar_sable" className="text-blue-400 hover:text-blue-600" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://t.me/lifecode5" className="text-blue-600 hover:text-blue-800" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-gray-600 mt-10">
        Designed with <IoMdHeart className="inline text-red-600 animate-pulse" /> by{' '}
        <a href="https://www.linkedin.com/in/jigar-sable" className="text-blue-600 hover:underline">
          jigar sable
        </a>
      </h1>
    </section>
  );
};

export default Footer;

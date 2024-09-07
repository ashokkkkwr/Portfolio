import React from 'react';
import img from '../assets/react.svg'
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#E8EBF7]">
      <h2 className="text-3xl font-bold text-center mb-8 flex justify-center items-center">
        <i className="fas fa-headset text-4xl mr-2"></i> 
        <span>Get In <span className="text-[#6A00E6]">Touch</span></span>
      </h2>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={img}// Make sure this path is correct
              alt="Contact"
              draggable="false"
              className="w-full"
            />
          </div>

          {/* Form Section */}
          <form id="contact-form" className="w-full lg:w-1/2 space-y-6">
            <div className="form-group">
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#6A00E6]"
                />
                <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#6A00E6]"
                />
                <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#6A00E6]"
                />
                <i className="fas fa-phone-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#6A00E6]"
                ></textarea>
                <i className="fas fa-comment-dots absolute left-4 top-4 text-gray-400"></i>
              </div>
            </div>
            <div className="button-area flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-[#6A00E6] text-white font-semibold rounded-md hover:bg-[#4C00A3] transition-colors flex items-center"
              >
                Submit <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

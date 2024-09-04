import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        <i className="fas fa-headset"></i> Get in <span className="text-blue-500">Touch</span>
      </h2>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="./assets/images/contact1.png"
              alt="Contact"
              draggable="false"
              className="w-full"
            />
          </div>

          <form id="contact-form" className="w-full lg:w-1/2 space-y-6">
            <div className="form-group">
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <i className="fas fa-phone-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
                <i className="fas fa-comment-dots absolute left-4 top-4 text-gray-400"></i>
              </div>
            </div>
            <div className="button-area">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
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

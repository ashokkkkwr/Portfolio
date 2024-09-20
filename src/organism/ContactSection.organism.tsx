import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactImage from "../assets/contact1.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaTelegramPlane, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when email sending starts

    emailjs
      .send("service_4vq7bad", "template_pu3vgvq", formData, "Cr-ZwsUhlSKjqu3c4")
      .then((response: any) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setLoading(false); // Set loading to false when email is sent successfully
      })
      .catch((err: any) => {
        console.error("Failed to send email. Error:", err);
        toast.error("Failed to send email. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false); // Set loading to false if an error occurs
      });
  };

  return (
    <section id="contact" className="py-16 bg-blue-100 flex flex-col items-center">
      <ToastContainer />
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

        <form id="contact-form" className="w-full lg:w-1/2" onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Name input */}
            <div className="relative mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-400 bg-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
              <FaMessage className="absolute left-4 top-7 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-end justify-center">
            <button
              type="submit"
              className={`relative px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <>
                  <FaTelegramPlane className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl" />
                  Submit
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

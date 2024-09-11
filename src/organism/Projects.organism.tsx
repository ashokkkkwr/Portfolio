import React from "react";
import Particle from "../molecules/Particle"; // Ensure this component is set up correctly
import watchProject from "../assets/project.png";
import foodProject from "../assets/2024-04-15_20-45.png";
import portfolioImage from "../assets/image.png";
import postFlow from "../assets/image copy.png";
import { FaGithub } from "react-icons/fa";

export default function ProjectsOrganism() {
  return (
    <section className="bg-gray-200" id="work">
      <div className="relative bg-blue-900 text-white min-h-screen rounded-3xl">
        {/* Particle Background */}
        {/* <Particle /> */}

        <div className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mt-10">
            My Recent <span className="text-pink-400">Works</span>
          </h2>
          <p className="text-center text-white mb-12 sm:mb-20 text-base sm:text-lg">
            Here are a few projects I've worked on recently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300 p-4 sm:p-6 text-center">
              <img
                src={postFlow}
                alt="NoteFlow project"
                className="h-40 sm:h-56 mb-4 object-contain mx-auto"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Note Flow
              </h3>
              <p className="text-white text-xs sm:text-sm mb-4">
                NoteFlow is a collaborative platform for creating, sharing, and managing notes with built-in chat support. It includes features like real-time updates, commenting, friend requests, and secure sharing.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <a
                  href="https://github.com/ashokkkkwr/NoteFlow"
                  className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg flex text-sm"
                >
                  <FaGithub className="text-lg sm:text-2xl mr-1" />
                  Backend
                </a>
                <a
                  href="https://github.com/ashokkkkwr/NoteFlow_Frontend"
                  className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg flex text-sm"
                >
                  <FaGithub className="text-lg sm:text-2xl mr-1" />
                  Frontend
                </a>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300 p-4 sm:p-6 text-center">
              <img
                src={watchProject}
                alt="Tik Tik project"
                className="h-40 sm:h-56 mb-4 object-contain mx-auto"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Tik Tik</h3>
              <p className="text-white text-xs sm:text-sm mb-4">
                Smart Watch E-commerce website built using Java Servlets and JSP, featuring a dynamic product catalog, user authentication, and shopping cart functionality.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <a
                  href="https://github.com/ashokkkkwr/Tik_Tik-Watch-ecommerce"
                  className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg flex text-sm"
                >
                  <FaGithub className="text-lg sm:text-2xl mr-1" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300 p-4 sm:p-6 text-center">
              <img
                src={foodProject}
                alt="Food Delivery App project"
                className="h-40 sm:h-56 mb-4 object-contain mx-auto"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Food Delivery App
              </h3>
              <p className="text-white text-xs sm:text-sm mb-4">
                A seamless food ordering platform developed using modern technologies like Node.js, React, and MongoDB, with a user-friendly design.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <a
                  href="https://github.com/ashokkkkwr/Food-delivery-app"
                  className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg flex text-sm"
                >
                  <FaGithub className="text-lg sm:text-2xl mr-1" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300 p-4 sm:p-6 text-center">
              <img
                src={portfolioImage}
                alt="Ashok's Portfolio project"
                className="h-40 sm:h-56 mb-4 object-contain mx-auto"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Ashok's Portfolio
              </h3>
              <p className="text-white text-xs sm:text-sm mb-4">
                Personal portfolio showcasing proficiency in backend development with Node.js, PostgreSQL, and React.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <a
                  href="https://github.com/ashokkkkwr/Portfolio"
                  className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg flex text-sm"
                >
                  <FaGithub className="text-lg sm:text-2xl mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

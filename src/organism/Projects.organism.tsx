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

        <div className="max-w-6xl mx-auto py-12">
          <h2 className="text-4xl font-bold text-center text-white mt-10">
            My Recent <span className="text-pink-400">Works</span>
          </h2>
          <p className="text-center text-white mb-20">
            Here are a few projects I've worked on recently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300 p-6 text-center">
              <img
                src={postFlow}
                alt="React logo"
                className="h-56  mb-4 object-contain"
              />
              <h3 className="text-2xl font-semibold text-white">Note Flow</h3>
              <p className="text-white text-sm mb-4">
                NoteFlow is a collaborative platform for creating, sharing, and
                managing notes with build in chat support to chat with your
                friends. Features include real-time updates, commenting,
                chatting friend requests, and secure sharing, built with modern
                technologies like Node.js and React with Typescript, typeorm,
                PostgreSQL etc .
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/ashokkkkwr/NoteFlow"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg flex"
                >
                  <FaGithub className="text-2xl mr-1" />
                  Backend
                </a>
                <a
                  href="https://github.com/ashokkkkwr/NoteFlow_Frontend"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg flex"
                >
                  <FaGithub className="text-2xl mr-1" />
                  Frontend
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300  p-6 text-center">
              <img
                src={watchProject}
                alt="React logo"
                className="h-56  mb-4 object-contain"
              />
              <h3 className="text-2xl font-semibold text-white">Tik Tik</h3>
              <p className="text-white text-sm mb-4">
                The Smart Watch E-commerce Website is a complete full-stack
                project built using Java Servlets and JSP, offering a seamless
                online shopping experience for smart watches. The website
                features a dynamic product catalog, user authentication,
                shopping cart functionality.The backend, developed with Java
                Servlets, ensures efficient data processing and smooth
                interactions, while JSP delivers a dynamic user interface.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/ashokkkkwr/Tik_Tik-Watch-ecommerce"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg flex"
                >
                  <FaGithub className="text-2xl mr-1" />
                  GitHub
                </a>
                {/* <a
                  href="#"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                >
                  Demo
                </a> */}
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300  p-6 text-center">
              <h3 className="text-2xl font-semibold text-white">
                Food Delievery App
              </h3>
              <img
                src={foodProject}
                alt="React logo"
                className="h-56  mb-4 object-contain"
              />

              <p className="text-white text-sm mb-4">
                The Food Delivery App is a sleek and efficient platform designed
                to provide a seamless food ordering experience. Built with
                user-centric design principles, the app offers an intuitive
                interface that makes browsing restaurants enjoyable. Developed
                using modern technologies like Node.js, React, and MongoDb, the
                app is optimized for performance and scalability.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/ashokkkkwr/Food-delivery-app"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg flex"
                >
                  <FaGithub className="text-2xl mr-1" />
                  GitHub
                </a>
                {/* <a
                  href="#"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                >
                  Demo
                </a> */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-110 transition duration-300  p-6 text-center">
              <h3 className="text-2xl font-semibold text-white">
                Ashok's Portfolio
              </h3>

              <img
                src={portfolioImage}
                alt="React logo"
                className="h-56  mb-4 object-contain"
              />
              <p className="text-white text-sm mb-4">
                My personal portfolio is designed to showcase the portfolio and
                expertise of mine, a skilled developer with a focus on backend
                development. The website highlights projects that demonstrate
                proficiency in technologies like Node.js, TypeORM, PostgreSQL,
                and React, emphasizing clean, scalable code and innovative
                solutions.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/ashokkkkwr/Portfolio"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg flex"
                >
                  <FaGithub className="text-2xl mr-1" />
                  GitHub
                </a>
                {/* <a
                  href="#"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                >
                  Demo
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Add more project cards here */}
      </div>
    </section>
  );
}

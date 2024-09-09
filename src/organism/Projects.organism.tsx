import React from "react";
import Particle from "../molecules/Particle"; // Ensure this component is set up correctly
import watchProject from "../assets/project.png"
import foodProject from "../assets/2024-04-15_20-45.png"
import portfolioImage from "../assets/image.png"
export default function ProjectsOrganism() {
  return (
    <div className="relative bg-blue-900 text-white min-h-screen">
      {/* Particle Background */}
      {/* <Particle /> */}


      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center text-white">
          My Recent <span className="text-pink-400">Works</span>
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Here are a few projects I've worked on recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-800 border-2 border-gray-700 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://reactjs.org/logo-og.png"
              alt="React logo"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">Note Flow</h3>
            <p className="text-gray-400 text-sm mb-4">
              Personal Chat Room or Workspace to share resources and hangout with
              friends. Built with React.js, Material-UI, and Firebase.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                GitHub
              </a>
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                Demo
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-md p-6 text-center">
            <img
              src={portfolioImage}
              alt="React logo"
              className="h-56  mb-4 object-contain"
            />
            <h3 className="text-2xl font-semibold text-white">Ashok's Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4">
              My personal blog page built with Next.js and Tailwind CSS  sdjnk lsdljodszjfndsjfnzshjfn ls jl fjsdfjlnsvzd slkj sj osj jof lnsz ofonjd lfsflsjdnf jsdf jdnsd fjds fljds fjds fdsfdsjkf ndsjf ndsfjsdfjdsfjdslf js jls n lkjdsdl dsofn dsf dsofd sflkj sfjlsf sdz
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                GitHub
              </a>
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                Demo
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-md p-6 text-center">
            <img
              src={foodProject}
              alt="React logo"
              className="h-56  mb-4 object-contain"
            />
            <h3 className="text-2xl font-semibold text-white">Food Delievery App</h3>
            <p className="text-gray-400 text-sm mb-4">
              Online code and markdown editor built with React.js.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/ashokkkkwr/Food-delivery-app" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                GitHub
              </a>
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                Demo
              </a>
            </div>
          </div>
            {/* Card 4 */}
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-md p-6 text-center">
            <img
              src={watchProject }
              alt="React logo"
              className="h-56  mb-4 object-contain"
            />
            <h3 className="text-2xl font-semibold text-white">Editor.io</h3>
            <p className="text-gray-400 text-sm mb-4">
            Complete Full stack project of Smart watch ecommerce website using java servlets and JSP.


               </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                GitHub
              </a>
              <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add more project cards here */}
    </div>
  );
}

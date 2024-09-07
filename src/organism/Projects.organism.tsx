import React from "react";
import Particle from "../molecules/Particle"; // Ensure this component is set up correctly

export default function ProjectsOrganism() {
  return (
    <div className="relative bg-[#0a002b] text-white min-h-screen">
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
          <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://reactjs.org/logo-og.png"
              alt="React logo"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">Chatify</h3>
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
              src="https://reactjs.org/logo-og.png"
              alt="React logo"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">Bits-of-Code</h3>
            <p className="text-gray-400 text-sm mb-4">
              My personal blog page built with Next.js and Tailwind CSS, rendering
              markdown files using Next.js.
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
              src="https://reactjs.org/logo-og.png"
              alt="React logo"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">Editor.io</h3>
            <p className="text-gray-400 text-sm mb-4">
              Online code and markdown editor built with React.js. Supports HTML,
              CSS, and JS code preview.dp;s;ilfjdsalhsld;f afh dsa;lfh asdflhasd fah;f asfh;l nasf hjsal;nfahsbf;sahildf/sahfoblsa;fh;bsfhajsbfjlabsfp' ;swfsjpnksjgs; fjaqn joq; jd qqpdj
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
            {/* Card 4 */}
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-md p-6 text-center">
            <img
              src="https://reactjs.org/logo-og.png"
              alt="React logo"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">Editor.io</h3>
            <p className="text-gray-400 text-sm mb-4">
              Online code and markdown editor built with React.js. Supports HTML,
              CSS, and JS code preview.dp;s;ilfjdsalhsld;f afh dsa;lfh asdflhasd fah;f asfh;l nasf hjsal;nfahsbf;sahildf/sahfoblsa;fh;bsfhajsbfjlabsfp' ;swfsjpnksjgs; fjaqn joq; jd qqpdj
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

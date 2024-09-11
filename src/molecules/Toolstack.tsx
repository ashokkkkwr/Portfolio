// Toolstack.js
import React from "react";
import { FaGithub, FaLinux } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman, SiSlack } from "react-icons/si";

function Toolstack() {
  return (
    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-screen-xl p-4 border-b-2 border-blue-300 pb-10 md:pb-20">
      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <FaGithub className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <SiVisualstudiocode className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <SiPostman className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <SiSlack className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <FaLinux className="text-5xl md:text-7xl text-white" />
      </li>
    </ul>
  );
}

export default Toolstack;

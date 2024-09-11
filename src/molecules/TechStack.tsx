// Techstack.js
import React from "react";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiPython, DiJava } from "react-icons/di";
import { SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

function Techstack() {
  return (
    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-screen-xl p-4 border-b-2 border-blue-300 pb-10 md:pb-24">
      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiJavascript1 className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiNodejs className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiReact className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiMongodb className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <SiTailwindcss className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiGit className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <SiMysql className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <FaHtml5 className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <SiPostgresql className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiPython className="text-5xl md:text-7xl text-white" />
      </li>

      <li className="px-8 py-5 md:px-20 md:py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50 bg hover:scale-105 transition duration-300">
        <DiJava className="text-5xl md:text-7xl text-white" />
      </li>
    </ul>
  );
}

export default Techstack;

import React from "react";
import { FcLinux } from "react-icons/fc";
import { FaLinux,FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <ul className="flex flex-wrap justify-center bg- w-[82rem] gap-8 bg--100">
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <FaGithub className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <SiVisualstudiocode  className="text-7xl text-white"/>
      </li>
      <li  className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <SiPostman className="text-7xl text-white"/>
      </li>
      <li  className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <SiSlack className="text-7xl text-white"/>
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <FaLinux className="text-7xl text-white"/>
      </li>
    </ul>
  );
}

export default Toolstack;

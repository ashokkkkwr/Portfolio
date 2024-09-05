import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
// import { FaTailwind } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <ul className="flex flex-wrap justify-center bg- w-[82rem] gap-8 bg--100">
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiJavascript1 className="text-7xl text-white" />
      </li>

      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiNodejs className="text-7xl  text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiReact className="text-7xl text-white" />
      </li>

      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiMongodb className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <SiTailwindcss className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiGit className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <SiMysql className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <FaHtml5 className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <SiPostgresql className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiPython className="text-7xl text-white" />
      </li>
      <li className="px-20 py-5 border-2 border-blue-300 rounded-md shadow-lg shadow-blue-500/50  bg hover:scale-105 transition duration-300">
        <DiJava className="text-7xl text-white" />
      </li>
    </ul>
  );
}

export default Techstack;

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
  SiTailwindcss
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";


function Techstack() {
  return (
    <ul style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <li xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </li> */}
      <li className="tech-icons">
        <DiJavascript1 />
      </li>
      {/* <li xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </li> */}
      <li className="tech-icons">
        <DiNodejs />
      </li>
      <li className="tech-icons">
        <DiReact />
      </li>
      {/* <li xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </li> */}
      <li  className="tech-icons">
        <DiMongodb />
      </li>
      <li className="tech-icons">
        <SiTailwindcss />
      </li>
      <li  className="tech-icons">
        <DiGit />
      </li>
      <li  className="tech-icons">
      <SiMysql />
      </li>
      <li className="tech-icons">
      <FaHtml5 />

      </li>
      <li  className="tech-icons">
        <SiPostgresql />
      </li>
      <li  className="tech-icons">
        <DiPython />
      </li>
      <li  className="tech-icons">
        <DiJava />
      </li>
    </ul>
  );
}

export default Techstack;

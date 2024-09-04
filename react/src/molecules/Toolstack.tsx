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
    <ul style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <li className="tech-icons">
        <FaGithub />
      </li>
      <li className="tech-icons">
        <SiVisualstudiocode />
      </li>
      <li  className="tech-icons">
        <SiPostman />
      </li>
      <li  className="tech-icons">
        <SiSlack />
      </li>
      <li className="tech-icons">
        <FaLinux />
      </li>
    </ul>
  );
}

export default Toolstack;

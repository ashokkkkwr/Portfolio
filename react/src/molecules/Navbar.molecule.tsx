import React from "react";

export default function NavbarMolecule() {
  return (
    <div>
      <header className="flex justify-between bg-red-500 p-6">
        <div className="flex">
          <a href="/" className="logo">
            <i className="fab fa-node-js"></i> Ashok
          </a>
        </div>
        <nav className=" ">
          <ul className="   flex justify-between bg-red-400 px-20">
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

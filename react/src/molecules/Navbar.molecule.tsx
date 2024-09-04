import React, { useState, useEffect } from "react";

export default function NavbarMolecule() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: string | null = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });

      // Ensure currentSection is not null before setting state
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="flex justify-between items-center bg-white shadow-md p-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            <i className="fab fa-node-js"></i> Ashok Katwal
          </a>
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a
                className={`${
                  activeSection === "home"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeSection === "about"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeSection === "skills"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeSection === "education"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#education"
              >
                Education
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeSection === "work"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#work"
              >
                Work
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeSection === "experience"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeSection === "contact"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

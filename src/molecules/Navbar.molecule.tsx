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

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Delay the scroll slightly to ensure the state updates first
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-white shadow-md p-7 sticky top-0 z-50 ">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800 ml-20">
            <i className="fab fa-node-js"></i> Ashok <span className="text-blue-600 font-poppins">Katwal</span>
          </a>
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg mr-20">
            <li>
              <a
                className={`${
                  activeSection === "home"
                    ? "text-blue-500 font-poppins"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#home"
                onClick={() => handleClick("home")}
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
                onClick={() => handleClick("about")}
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
                onClick={() => handleClick("skills")}
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
                onClick={() => handleClick("education")}
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
                onClick={() => handleClick("work")}
              >
                Work
              </a>
            </li>
            {/* <li>
              <a
                className={`${
                  activeSection === "experience"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#experience"
                onClick={() => handleClick("experience")}
              >
                Experience
              </a>
            </li> */}
            <li>
              <a
                className={`${
                  activeSection === "contact"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } transition duration-300`}
                href="#contact"
                onClick={() => handleClick("contact")}
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

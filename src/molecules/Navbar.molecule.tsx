import React, { useState, useEffect } from "react";

export default function NavbarMolecule() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

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
    setIsOpen(false); // Close the menu after clicking a link in mobile view

    // Delay the scroll slightly to ensure the state updates first
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-white shadow-md p-5 md:p-7 sticky top-0 z-50">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            <i className="fab fa-node-js"></i> Ashok <span className="text-blue-600 font-poppins">Katwal</span>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="text-3xl 2xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
        {/* Desktop Menu */}
        <nav className={`hidden 2xl:block`}>
          <ul className="flex space-x-8 text-lg">
            {renderNavLinks(activeSection, handleClick)}
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg absolute top-full left-0 w-full`}
      >
        <ul className="flex flex-col space-y-4 p-5 text-lg">
          {renderNavLinks(activeSection, handleClick)}
        </ul>
      </nav>
    </div>
  );
}

// Helper function to render navigation links
function renderNavLinks(activeSection: string, handleClick: (sectionId: string) => void) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return links.map((link) => (
    <li key={link.id}>
      <a
        className={`${
          activeSection === link.id ? "text-blue-500" : "hover:text-blue-500"
        } transition duration-300`}
        href={`#${link.id}`}
        onClick={() => handleClick(link.id)}
      >
        {link.label}
      </a>
    </li>
  ));
}

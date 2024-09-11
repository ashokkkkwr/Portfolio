import React, { useState } from "react";
import { IoBookSharp, IoFootballSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { GoDash } from "react-icons/go";
import AshokBlack from "../assets/ashokB.jpeg";
import AshokWhite from "../assets/ashokH.jpeg";

function AboutCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 px-4 md:px-52">
      <div className="mb-8 md:mb-0">
        <img
          src={isHovered ? AshokBlack : AshokWhite}
          alt="Ashok"
          className="h-[40vh] md:h-[60vh] w-[30vh] md:w-[40vh] object-cover transition-transform duration-300 ease-in-out rounded-md shadow-2xl shadow-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="text-center md:text-left md:ml-8">
        <blockquote className="text-gray-800">
          <p className="text-lg md:text-xl font-poppins">
            Hi Everyone, I am{" "}
            <span className="purple text-purple-500">Ashok Katwal</span> from{" "}
            <span className="purple text-purple-500">Itahari, Nepal.</span>
            <br />
            I am currently an Intern as a software developer at Information
            Care.
            <br />
            Currently in my final year in Bachelor in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="mt-5 space-y-3">
            <li className="flex justify-center md:justify-start items-center text-lg md:text-xl font-poppins">
              <FaBookReader className="text-3xl mr-2" /> Reading Books.
            </li>
            <li className="flex justify-center md:justify-start items-center text-lg md:text-xl font-poppins">
              <IoIosFitness className="text-3xl mr-2" /> Exercise.
            </li>
            <li className="flex justify-center md:justify-start items-center text-lg md:text-xl font-poppins">
              <IoFootballSharp className="text-3xl mr-2" /> Playing Football.
            </li>
          </ul>
        </blockquote>
        <div className="mt-5">
          <p className="text-lg md:text-xl font-poppins flex justify-center md:justify-start">
            <MdEmail className="text-3xl mr-2 text-blue-500" />{" "}
            <span>ashokkatwal9811@gmail.com</span>
          </p>
          <p className="text-lg md:text-xl font-poppins flex justify-center md:justify-start mt-2">
            <HiLocationMarker className="text-3xl mr-2 text-blue-500" />{" "}
            <span>Itahari-20 Tarahara.</span>
          </p>
          <div className="mt-5 flex justify-center md:justify-start">
            <button className="bg-blue-600 text-white text-lg md:text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 transition duration-300">
              Resume &rarr;
            </button>
          </div>
        </div>
        <div className="mt-10 text-center md:text-left">
          <p className="text-lg md:text-xl font-poppins">
            "Don't Complain, Just Enjoy Your Pain!"
          </p>
          <footer className="flex justify-center md:justify-start items-center mt-4 text-lg md:text-xl font-bold text-purple-500">
            <GoDash className="mr-2" /> Ashok
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;

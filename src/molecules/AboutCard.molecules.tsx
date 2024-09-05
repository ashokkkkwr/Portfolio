import React, { useState } from "react";
import { IoBookSharp, IoFootballSharp } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { GiAbstract042 } from "react-icons/gi";
import AshokBlack from "../assets/ashokB.jpeg";
import AshokWhite from "../assets/ashokH.jpeg";
import { GoDash } from "react-icons/go";
import { FaBookReader } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { IoIosFitness } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

function AboutCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg- flex justify-between items-center mt-20 px-52">
      <div>
        <img
          src={isHovered ? AshokBlack : AshokWhite}
          alt="Ashok"
          className="h-[60vh] w-[40vh] object-cover transition-transform duration-300 ease-in-out rounded-md shadow-2xl shadow-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div>
        <blockquote className="bg- ">
          <p className="text-xl font-poppins">
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
          <ul className="mt-5  ml-">
            <li className="flex text-xl font-poppins">
              <FaBookReader className="text-3xl text--500 mr-2" /> Reading
              Books.
            </li>
            <li className="flex text-xl font-poppins mt-2">
              <IoIosFitness className="text-4xl text--500 mr-2" /> Exercise.
            </li>
            <li className="flex text-xl font-poppins">
              <IoFootballSharp className="text-3xl text-500 mr-2" /> Playing
              Football.
            </li>
          </ul>
        </blockquote>
        <div className="mt-5">
          <p className="text-xl font-poppins flex">
            <span className="text-blue-500 font-bold mr-2 flex">
              <MdEmail className="text-3xl" />
              Email:
            </span>
            <span>ashokkatwal9811@gmail.com</span>
          </p>
          <p className="text-xl font-poppins flex">
            <span className="text-blue-500 font-bold mr-2 flex">
              <HiLocationMarker className="text-3xl" />
              location:
            </span>
            <span>Itahari-20 Tarahara.</span>
          </p>
          <div className="mt-8">
          <button className="bg-blue-600 text-white text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ">
            Resume &rarr;
          </button>
          </div>
        </div>
        <div className="bg w-96 flex-col flex ">
        <p className=" flex justify- items- mt-10 text-xl font-poppins">
          "Don't Complain, Just Enjoy Your Pain!"
        </p>
        <footer className="flex justify-center items-center text-xl font-poppins font-bold text-purple-500">
          <GoDash />
          Ashok
        </footer>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;

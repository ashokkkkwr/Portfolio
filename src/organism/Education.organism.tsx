import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import vishwa from "../assets/vishwa Adarsha.jpg";
import IIC from "../assets/IIC.png"
import DPS from "../assets/delhi-public-school-fulbaari-siliguri-schools-9ts62jzc1x.avif"
export default function EducationOrganism() {
  return (
      <section
        className="flex flex-col justify-center items-center p-40 bg-gray-200"
        id="education"
      >
        <h1 className="flex text-6xl p- font-serif">
          <FaGraduationCap className="text-7xl mr-3" />
          <span className="text-blue-500">My</span>{" "}
          <span className="ml-2">Education</span>
        </h1>
        {/* <p className="font-poppins text-lg">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p> */}
        <div className="box-container">
          <div className="flex bg-white h-60  w-[130vh] overflow-hidden pr-32 rounded-md shadow-xl shadow-gray-600 mt-10">
            <div className="image">
              <img
                src={IIC}
                alt=""
                className="h-[29vh] w-[50vh] bg-contain"
              />
            </div>
            <div className="content">
              <h3 className="text-2xl font-poppins font-bold  text-blue-900 px-10 py-5 ">
                Bachelor in Information Technology
              </h3>
              <p className="font-poppins font-bold text-lg text-gray-700 ml-10">
                Itahari International College | BSC Hons Computing
              </p>
              <h4 className="ml-10">2022-2025 | Pursuing</h4>
              <div className="mt-7">
                <button className=" ml-10 bg-blue-600 text-white text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ">
                  Browse &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="box-container">
          <div className="flex bg-white h-60  w-[130vh] overflow-hidden pr-32 rounded-md shadow-xl shadow-gray-600 mt-10">
            <div className="image">
              <img
                src={vishwa}
                alt=""
                className="h-[29vh] w-[50vh] bg-contain"
              />
            </div>
            <div className="content">
              <h3 className="text-2xl font-poppins font-bold  text-blue-900 px-10 py-5 ">
                High School in Computer Science (Management)
              </h3>
              <p className="font-poppins font-bold text-lg text-gray-700 ml-10">
                Vishwa Adarsha College | NEB
              </p>
              <h4 className="ml-10">2020-2022 | Completed</h4>
              <div className="mt-7">
                <button className=" ml-10 bg-blue-600 text-white text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ">
                  Browse &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="w-">
          <div className="flex bg-white h-60 w-[130vh] overflow-hidden pr-32 rounded-md shadow-xl shadow-gray-600 mt-10">
            <div className="image">
              <img
                src={DPS}
                alt=""
                className="h-[29vh] w-[50vh] bg-contain"
              />
            </div>
            <div className="content">
              <h3 className="text-2xl font-poppins font-bold  text-blue-900 px-10 py-5 ">
                School in Ncert Board
              </h3>
              <p className="font-poppins font-bold text-lg text-gray-700 ml-10">
                Delhi Public School | CBSE
              </p>
              <h4 className="ml-10">2014-2020 | Completed</h4>
              <div className="mt-7">
                <button className=" ml-10 bg-blue-600 text-white text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ">
                  Browse &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

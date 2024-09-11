import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import vishwa from "../assets/vishwa Adarsha.jpg";
import IIC from "../assets/IIC.png";
import DPS from "../assets/delhi-public-school-fulbaari-siliguri-schools-9ts62jzc1x.avif";

export default function EducationOrganism() {
  return (
    <section className="flex flex-col justify-center items-center p-10 md:p-40 bg-gray-200" id="education">
      <h1 className="flex text-3xl md:text-6xl font-serif mb-10 md:mb-20">
        <FaGraduationCap className="text-4xl md:text-7xl mr-3" />
        <span className="text-blue-500">My</span>
        <span className="ml-2">Education</span>
      </h1>

      {/* Card 1 */}
      <div className="box-container w-full md:w-[130vh]">
        <div className="flex flex-col md:flex-row bg-white h-auto md:h-60 w-full overflow-hidden rounded-md shadow-xl shadow-gray-600 mt-10">
          <div className="image flex-shrink-0">
            <img src={IIC} alt="IIC" className="h-auto w-full md:h-[29vh] md:w-[50vh] object-cover" />
          </div>
          <div className="content p-5 md:px-10 md:py-5">
            <h3 className="text-xl md:text-2xl font-poppins font-bold text-blue-900">
              Bachelor in Information Technology
            </h3>
            <p className="font-poppins font-bold text-lg text-gray-700">
              Itahari International College | BSC Hons Computing
            </p>
            <h4 className="">2022-2025 | Pursuing</h4>
            <div className="mt-5">
              <button className="bg-blue-600 text-white text-lg md:text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300">
                Browse &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="box-container w-full md:w-[130vh]">
        <div className="flex flex-col md:flex-row bg-white h-auto md:h-60 w-full overflow-hidden rounded-md shadow-xl shadow-gray-600 mt-10">
          <div className="image flex-shrink-0">
            <img src={vishwa} alt="Vishwa Adarsha" className="h-auto w-full md:h-[29vh] md:w-[50vh] object-cover" />
          </div>
          <div className="content p-5 md:px-10 md:py-5">
            <h3 className="text-xl md:text-2xl font-poppins font-bold text-blue-900">
              High School in Computer Science (Management)
            </h3>
            <p className="font-poppins font-bold text-lg text-gray-700">
              Vishwa Adarsha College | NEB
            </p>
            <h4>2020-2022 | Completed</h4>
            <div className="mt-5">
              <button className="bg-blue-600 text-white text-lg md:text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300">
                Browse &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="box-container w-full md:w-[130vh]">
        <div className="flex flex-col md:flex-row bg-white h-auto md:h-60 w-full overflow-hidden rounded-md shadow-xl shadow-gray-600 mt-10">
          <div className="image flex-shrink-0">
            <img src={DPS} alt="Delhi Public School" className="h-auto w-full md:h-[29vh] md:w-[50vh] object-cover" />
          </div>
          <div className="content p-5 md:px-10 md:py-5">
            <h3 className="text-xl md:text-2xl font-poppins font-bold text-blue-900">
              School in NCERT Board
            </h3>
            <p className="font-poppins font-bold text-lg text-gray-700">
              Delhi Public School | CBSE
            </p>
            <h4>2014-2020 | Completed</h4>
            <div className="mt-5">
              <button className="bg-blue-600 text-white text-lg md:text-xl py-2 px-4 rounded-lg shadow-xl shadow-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300">
                Browse &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

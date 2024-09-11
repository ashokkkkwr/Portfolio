import React from 'react';
import Type from "./Type";
import ashok from '../assets/ashok.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faTelegramPlane, 
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroOrganism() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-[20vh] px-4 md:px-52 bg-gray-100" id="home">
      <div className="flex flex-col items-start mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-2 md:mb-4 leading-snug">
          Hi There,
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4 leading-snug mt-2">
          I'm Ashok <span className="text-orange-500">Katwal</span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 md:mb-8">
          I am into <span className="text-orange-700 ml-2 font-serif font-extrabold"><Type /></span>
        </p>
        <a href="#aboutflex" className="flex items-center text-white bg-purple-700 hover:bg-purple-800 px-5 py-3 rounded-full font-bold uppercase tracking-wide shadow-purple-500 shadow-lg">
          About Me
          <FontAwesomeIcon icon={faArrowCircleDown} className="ml-2" />
        </a>
        <div className="mt-8 md:mt-16">
          <ul className="flex space-x-4">
            <li className='bg-black rounded-full p-2'>
              <a
                className="text-blue-700 hover:text-blue-800 text-3xl"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/ashok-katwal-2b6a402ba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li className='bg-black rounded-full p-2'>
              <a
                className="text-blue-400 hover:text-blue-500 text-3xl"
                aria-label="GitHub"
                href="https://github.com/ashokkkkwr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li className='bg-black rounded-full p-2'>
              <a
                className="text-blue-400 hover:text-blue-500 text-3xl"
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li className='bg-black rounded-full p-2'>
              <a
                className="text-blue-500 hover:text-blue-600 text-3xl"
                aria-label="Telegram"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
              </a>
            </li>
            <li className='bg-black rounded-full p-2'>
              <a
                className="text-pink-600 hover:text-pink-700 text-3xl"
                aria-label="Instagram"
                href="https://www.instagram.com/ashok_katwal.123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-auto flex justify-center">
        <img 
          draggable="false" 
          className="w-[70vw] md:w-[40vh] h-auto rounded-3xl shadow-xl shadow-blue-300" 
          src={ashok}
          alt="Hero Image" 
        />
      </div>
    </div>
  );
}

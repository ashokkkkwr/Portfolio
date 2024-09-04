import React from 'react';
import Type from "./Type";
import ashok from '../assets/ashok.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faTelegramPlane, 
  faInstagram, 
  faDev 
} from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroOrganism() {
  return (
    <div className="flex items-center justify-between py-[10vh] px-8  bg-gray-100" id="home">
      <div className="flex flex-col items-start">
        <h2 className="text-4xl sm:text-6xl font-bold font-serif text-gray-800 mb-4 leading-snug ml-28">
          Hi There, </h2>

          <h2 className='text-4xl sm:text-5xl font-bold font- text-gray-800 mb-4 leading-snug ml-28 mt-2'> I'm Ashok <span className="text-orange-500">Katwal</span></h2>
       
        <p className="flex text-3xl text-gray-700 mb-8 ml-28">
          I am into <span className="text-orange-700 ml-2 font-serif font-extrabold text-3xl"><Type /></span>
        </p>
        <a href="#aboutflex" className="flex items-center text-white bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full font-bold uppercase tracking-wide ml-28 mt-5 shadow-purple-500 shadow-lg">
          About Me
          <FontAwesomeIcon icon={faArrowCircleDown} className="ml-2" />
        </a>
        <div className="mt-16 ml-28" >
          <ul className="flex space-x-4">
            <li className='bg-black rounded-full p-2 '>
              <a
                className="text-blue-700 hover:text-blue-800 text-3xl"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/jigar-sable/"
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
                href="https://github.com/jigar-sable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li className='bg-black rounded-full  p-2'>
              <a
                className="text-blue-400 hover:text-blue-500 text-3xl"
                aria-label="Twitter"
                href="https://twitter.com/jigar_sable"
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
                href="https://t.me/lifecode5"
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
                href="https://www.instagram.com/jigarsable.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
           
          </ul>
        </div>
      </div>
      
      <div className=" mr-[17vh]">
        <img 
          draggable="false" 
          className="w-[47vh]  h-auto rounded-3xl " 
          src={ashok}
          alt="Hero Image" 
        />
      </div>
    </div>
  );
}

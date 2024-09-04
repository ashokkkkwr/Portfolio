import React from 'react';
import Type from "./Type";

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
    <div className="flex items-center justify-between py-16 px-8 bg-gray-100" id="home">
      <div className="flex flex-col items-start">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-snug">
          Hi There,<br /> I'm Ashok <span className="text-orange-500">Katwal</span>
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          I am into <span className="text-red-700"><Type /></span>
        </p>
        <a href="#aboutflex" className="flex items-center text-white bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full font-bold uppercase tracking-wide">
          About Me
          <FontAwesomeIcon icon={faArrowCircleDown} className="ml-2" />
        </a>
        <div className="mt-8">
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-blue-700 hover:text-blue-800"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/jigar-sable/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li>
              <a
                className="text-gray-900 hover:text-gray-700"
                aria-label="GitHub"
                href="https://github.com/jigar-sable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 hover:text-blue-500"
                aria-label="Twitter"
                href="https://twitter.com/jigar_sable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a
                className="text-blue-500 hover:text-blue-600"
                aria-label="Telegram"
                href="https://t.me/lifecode5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
              </a>
            </li>
            <li>
              <a
                className="text-pink-600 hover:text-pink-700"
                aria-label="Instagram"
                href="https://www.instagram.com/jigarsable.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-gray-900"
                aria-label="Dev"
                href="https://dev.to/jigarsable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDev} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="w-1/2 max-w-sm">
        <img 
          draggable="false" 
          className="w-full h-auto rounded-full shadow-lg" 
          src="./assets/images/hero.png" 
          alt="Hero Image" 
        />
      </div>
    </div>
  );
}

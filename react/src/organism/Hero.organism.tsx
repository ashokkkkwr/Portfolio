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
    <div className="flex" id="home">
      <div id="particles-js"></div>

      <div className="content">
        <h2>
          Hi There,<br /> I'm Ashok <span>Katwal</span>
        </h2>
        <p className='flex'>
          I am into <Type />
        </p>
        <a href="#aboutflex" className="btn">
          <span>About Me</span>
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </a>
        <div className="socials">
          <ul className="flex">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/jigar-sable/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/jigar-sable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="https://twitter.com/jigar_sable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="https://t.me/lifecode5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/jigarsable.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                className="dev"
                aria-label="Dev"
                href="https://dev.to/jigarsable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDev} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="image">
        <img 
          draggable="false" 
          className="tilt" 
          src="./assets/images/hero.png" 
          alt="Hero Image" 
        />
      </div>
    </div>
  );
}

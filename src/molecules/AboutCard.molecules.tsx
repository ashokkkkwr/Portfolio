import React, { useState } from "react";
import { ImPointRight } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { GiAbstract042 } from "react-icons/gi";
import AshokBlack from "../assets/ashokB.jpeg";
import AshokWhite from "../assets/ashokH.jpeg";

function AboutCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg- flex justify-between items-center px-96">
       <div>
        <img
          src={isHovered ? AshokBlack :AshokWhite }
          alt="Ashok"
          className="h-96 w-80 object-cover transition-transform duration-300 ease-in-out rounded-md shadow-2xl shadow-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div>
        <blockquote className="">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashok Katwal </span>
            from <span className="purple">Itahari, Nepal.</span>
            <br />
            I am currently Intern as a software developer at Information Care.
            <br />
            Currently in my final year in Bachlor in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoBookSharp /> Reading Books.
            </li>
            <li className="about-activity">
              <GrYoga /> Exercise.
            </li>
            <li className="about-activity">
              <GiAbstract042 /> Playing Football.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Complain Just Enjoy Your Pain!"{" "}
          </p>
          <footer className="blockquote-footer">Ashok</footer>
        </blockquote>
      </div>

     
    </div>
  );
}

export default AboutCard;

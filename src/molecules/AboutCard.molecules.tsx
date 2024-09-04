import React from "react";
import { ImPointRight } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { GiAbstract042 } from "react-icons/gi";

function AboutCard() {
  return (
    <div className="quote-div-view">
      <div>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashok Katwal </span>
            from <span className="purple"> Itahari, Nepal.</span>
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
          <footer className="blockquote-footer">Ashok </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;

import React from 'react'
import Particle from "../molecules/Particle";
import AboutCard from '../molecules/AboutCard.molecules';
import Techstack from '../molecules/TechStack';
import Toolstack from '../molecules/Toolstack';
import Github from '../molecules/Github';

export default function AboutOrganism() {
  return (
    <div>
      
      <div  className="">
      <Particle />
      <div>
        <ul style={{ justifyContent: "center", padding: "10px" }}>
          <li
           
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </li>
          <li
          
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </li>
        </ul>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </div>
    </div>
    </div>
  )
}

import React from 'react'
import Particle from "../molecules/Particle";
import AboutCard from '../molecules/AboutCard.molecules';


export default function AboutOrganism() {
  return (
<div id="about" >
      
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
      
      </div>
    </div>
    </div>
  )
}

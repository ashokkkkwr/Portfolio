import React from "react";
import Particle from "../molecules/Particle";
import AboutCard from "../molecules/AboutCard.molecules";

export default function AboutOrganism() {
  return (
    <div id="about" className="">
      <div className="">
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
              <div className="flex justify-center">
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="mt-20">
                Know Who <strong className="purple">I'M</strong>
              </h1>
              </div>
              <AboutCard />
            </li>
            {/**
             * <li
          
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

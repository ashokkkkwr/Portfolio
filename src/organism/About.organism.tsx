import React from "react";
import Particle from "../molecules/Particle";
import AboutCard from "../molecules/AboutCard.molecules";

export default function AboutOrganism() {
  return (
    <section
    id="about"
    className="p-16"
  >
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
              <h1 className="mt- text-6xl p- font-serif">
                Know Who <strong className="purple text-blue-500">I'M</strong>
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
    </section>
  );

}

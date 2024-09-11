import React from "react";
import Particle from "../molecules/Particle";
import AboutCard from "../molecules/AboutCard.molecules";

export default function AboutOrganism() {
  return (
    <section id="about" className="p-4 md:p-16">
      <div className="">
        <Particle />
        <div>
          <ul className="flex flex-col items-center md:justify-center md:p-10">
            <li className="flex flex-col items-center justify-center pt-6 md:pt-8 pb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-center">
                Know Who{" "}
                <strong className="purple text-blue-500">I'M</strong>
              </h1>
              <AboutCard />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

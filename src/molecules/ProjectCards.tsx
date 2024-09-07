import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props: {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  isBlog: boolean;
  demoLink?: string;
}) {
  return (
    <div className="text-center">
      <img className="w-full h-32 object-contain mb-4" src={props.imgPath} alt="project" />
      <h2 className="text-2xl font-semibold text-white">{props.title}</h2>
      <p className="text-gray-400 text-sm mt-2 mb-6">{props.description}</p>
      
      <div className="flex justify-center gap-4">
        <a
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
        >
          <BsGithub /> <span>GitHub</span>
        </a>

        {props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <CgWebsite /> <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;

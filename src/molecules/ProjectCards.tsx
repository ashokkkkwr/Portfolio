import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props: {
  imgPath: string | undefined;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  ghLink: string | undefined;
  isBlog: any;
  demoLink: string | undefined;
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={props.imgPath}
        alt="project"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">{props.title}</h2>
        <p className="text-gray-300 text-justify">{props.description}</p>
        <div className="mt-6">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            <BsGithub className="inline-block mr-2" />{" "}
            {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 ml-4"
            >
              <CgWebsite className="inline-block mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;

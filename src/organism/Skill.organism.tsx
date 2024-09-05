import React from 'react'
import Techstack from '../molecules/TechStack';
import Toolstack from '../molecules/Toolstack';
import Github from '../molecules/Github';
export default function SkillOrganism() {
  return (
    <div id='skills' className='flex flex-col justify-center items-center bg-red-500'>
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
  )
}

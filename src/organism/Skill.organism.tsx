import React from 'react'
import Techstack from '../molecules/TechStack';
import Toolstack from '../molecules/Toolstack';
import Github from '../molecules/Github';
export default function SkillOrganism() {
  return (
    <section id='skills' className='flex flex-col justify-center items-center py-20 bg-blue-900 rounded-3xl'>
          <h1 className="text-6xl p font-serif mb-20 text-white">
          Professional <strong className="text-blue-500">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-6xl p font-serif mt-20 mb-10 text-white">
          <strong className="text-blue-500">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
    </section>
  )
}

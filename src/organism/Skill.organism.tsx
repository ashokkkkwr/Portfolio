// SkillOrganism.js
import React from 'react'
import Techstack from '../molecules/TechStack';
import Toolstack from '../molecules/Toolstack';
import Github from '../molecules/Github';

export default function SkillOrganism() {
  return (
    <section id='skills' className='flex flex-col justify-center items-center py-10 md:py-20 bg-blue-900 rounded-3xl'>
      <h1 className="text-4xl md:text-6xl font-serif mb-10 md:mb-20 text-white">
        Professional <strong className="text-blue-500">Skillset</strong>
      </h1>

      <Techstack />

      <h1 className="text-4xl md:text-6xl font-serif mt-10 md:mt-20 mb-5 md:mb-10 text-white">
        <strong className="text-blue-500">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </section>
  )
}

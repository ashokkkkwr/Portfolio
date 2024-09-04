import React from 'react'
import NavbarMolecule from '../molecules/Navbar.molecule'
import HeroOrganism from '../organism/Hero.organism'
import AboutOrganism from '../organism/About.organism'
import SkillsOrganism from '../organism/Skills.organism'

export default function HomePages() {
  return (
    <>
    <div>
        <NavbarMolecule />
        <HeroOrganism />
        <AboutOrganism />
        <SkillsOrganism />
        
    </div>
  


    </>
  )
}

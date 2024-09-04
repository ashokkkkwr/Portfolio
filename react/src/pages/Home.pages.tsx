import React from 'react'
import NavbarMolecule from '../molecules/Navbar.molecule'
import HeroOrganism from '../organism/Hero.organism'
import AboutOrganism from '../organism/About.organism'
import EducationOrganism from '../organism/Education.organism'


export default function HomePages() {
  return (
    <>
    <div>
        <NavbarMolecule />
        <HeroOrganism />
        <AboutOrganism />
        <EducationOrganism />

        
    </div>
  


    </>
  )
}

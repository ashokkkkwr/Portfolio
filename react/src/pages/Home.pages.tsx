import React from 'react'
import NavbarMolecule from '../molecules/Navbar.molecule'
import HeroOrganism from '../organism/Hero.organism'
import AboutOrganism from '../organism/About.organism'
import EducationOrganism from '../organism/Education.organism'
import ProjectsOrganism from '../organism/Projects.organism'
import Experience from '../organism/Experience.organism'
import ContactSection from '../organism/ContactSection.organism'
import Footer from '../organism/Footer.organism'


export default function HomePages() {
  return (
    <>
    <div>
      <div className='sticky top-0'>
      <NavbarMolecule />
      </div>
        
        <HeroOrganism />
        <AboutOrganism />
        <EducationOrganism />
        <ProjectsOrganism />
        <Experience />
        <ContactSection />
        <Footer />
    </div>
    </>
  )
}

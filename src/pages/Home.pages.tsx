import React from 'react'
import NavbarMolecule from '../molecules/Navbar.molecule'
import HeroOrganism from '../organism/Hero.organism'
import AboutOrganism from '../organism/About.organism'
import EducationOrganism from '../organism/Education.organism'
import ProjectsOrganism from '../organism/Projects.organism'
import Experience from '../organism/Experience.organism'
import ContactSection from '../organism/ContactSection.organism'
import Footer from '../organism/Footer.organism'
import SkillOrganism from '../organism/Skill.organism'
import Testimonials from '../organism/Testimonials'


export default function HomePages() {
  return (
    <>
    <div>
      <div className='sticky top-0 z-10 '>
      <NavbarMolecule />
      </div>
        
        <div className='bg-black '>
        <HeroOrganism />
        </div>
      
        <AboutOrganism />
        <SkillOrganism />
        <EducationOrganism />
        <ProjectsOrganism />
        <Testimonials />
        
        {/* <Experience /> */}
        <ContactSection />
        <Footer />
    </div>
    </>
  )
}

import React from 'react'

export default function AboutOrganism() {
  return (
    <div>
      
<section className="about" id="about">
    <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div className="row">

    <div className="image">

<img 
  draggable="false" 
  className="tilt" 
//   src={} 
  alt="Profile Picture" 
/>
    </div>
    <div className="content">
        <h3>I'm Ashok</h3>
        <span className="tag">Full Stack Developer</span>
        
        <p>I am a Full-Stack developer based in Itahari, Nepal. 
          I am currently persuing Bachlor in Information Technology from IIC.
          I am very passionate about improving my coding skills & developing applications & websites.
          I build WebApps and Websites using MERN Stack.
          Working for myself to improve my skills.
          </p>
        
        <div className="box-container">
           
            <div className="box">
              <p><span> email : </span> ashokkatwal9811@gmail.com</p>
              <p><span> place : </span> Itahari, Nepal - 412206</p>
            </div>
        </div>
        
        <div className="resumebtn">
            <a href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view" target="_blank" className="btn"><span>Resume</span>
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
</section>
    </div>
  )
}

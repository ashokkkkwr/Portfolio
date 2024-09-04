import React from 'react';

export default function EducationOrganism() {
  return (
    <div>
      <div className="education" id="education">
        <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
        <p className="quote">Education is not the learning of facts, but the training of the mind to think.</p>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src="./assets/images/educat/college.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Bachelor of Engineering in Information Technology</h3>
              <p>Zeal College of Engineering and Research | SPPU</p>
              <h4>2020-2024 | Pursuing</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img draggable="false" src="./assets/images/educat/school.jpg" alt="" />
            </div>
            <div className="content">
              <h3>HSC Science | Informatics Practices</h3>
              <p>Shri L. G. Haria Multipurpose School | CBSE</p>
              <h4>2018-2020 | Completed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../about.css"
import myImage from "../img/img/Gift.jpg"
import Arrow from "../img/img/icons8-double-down-32.png"




const About = () =>{
      return(
            <div id="About">

            {/*left side */}
           <div className="section-header">
    <p className="section-subtitle">Get To Know More</p>
    <h1 className="section-title">About Me</h1>
  </div>
  <div className="section-content">
    <div className="image-container">
      <img src={myImage} alt="" className="profile-picture" />
    </div>
    <span>

    </span>
    <div className="details-container">

    {/* right side */}
      <div className="detail-item">
        <img src={""} alt="" className="icon" />
        <h3>Experience</h3>
        <p>I am a Graduate Full-Stack Developer</p>
      </div>
      <div className="detail-item">
        <img src="img/community.svg" alt="" className="icon" />
        <h3>Education</h3>
        <p>Diploma In ICT - Software Development</p>
      </div>
      <div className="info">
        <h3>Why Choose Me?</h3>
        <p>🚀 Passion for Excellence: I thrive on challenges and am driven by a relentless pursuit of excellence. Each project I undertake is an opportunity to push the boundaries and surpass expectations.</p>
        <p>💡 Creative Problem Solver: I love solving puzzles, and coding is my favorite puzzle-solving playground.</p>
        <p>🌐 Full-Stack Expertise: Proficient in a variety of technologies, I am a versatile full-stack developer comfortable navigating both front-end and back-end landscapes.</p>
        <p>👨‍💻 Continuous Learner: I am committed to continuous learning, always seeking out opportunities to expand my skill set and stay ahead of the curve.</p>
      </div>
    </div>
  </div>
  <img
    src={Arrow}
    alt="Arrow icon"
    className="arrow"
    onClick={() => { window.location.href = './#experience'; }}
  />

            </div>
      )
}
export default About;
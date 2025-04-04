import React from "react";
import "../about.css"
import myImage from "../img/img/Gift.jpg"
import Arrow from "../img/img/icons8-double-down-32.png"
import Info from "./info";




const About = () =>{
      return(
  <div className="about-section" id="About">

            {/*left side */}
  <div className="section-header">
    <p className="section-subtitle">Get To Know More</p>
    <h1 className="section-title">About Me</h1>
  </div>

  <div className="about-container container grid">
    
      <img src={myImage} alt="" className="profile-picture" />
    </div>
    
    <div className="about-data">
        <Info/>
    </div>

    <div className="about-description">
        <h3>Why Choose Me?</h3>
        <p>🚀 Passion for Excellence: I thrive on challenges and am driven by a relentless pursuit of excellence. Each project I undertake is an opportunity to push the boundaries and surpass expectations.</p>
        <p>💡 Creative Problem Solver: I love solving puzzles, and coding is my favorite puzzle-solving playground.</p>
        <p>🌐 Full-Stack Expertise: Proficient in a variety of technologies, I am a versatile full-stack developer comfortable navigating both front-end and back-end landscapes.</p>
        <p>👨‍💻 Continuous Learner: I am committed to continuous learning, always seeking out opportunities to expand my skill set and stay ahead of the curve.</p>
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
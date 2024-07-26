import React from 'react';
import '../header.css'
import G from '../img/img/letter-g(1).png'
const Header = () => {
  return (
      <div className="n-wrapper"> 
      <div className="n-left">
        <div className="n-name">Portfo<span>lio</span></div>
        <label class="switch">
    <input type="checkbox"></input>
    <span class="slider"></span>
    
</label>
        </div>
        
         <div className='n-right'>
         <div className="n-list">
        <ul style={{listStyleType:'none'}}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div> 
      
      </div>
      <img src={G} alt=""></img>
      </div> 
     
    
  )
};

export default Header;

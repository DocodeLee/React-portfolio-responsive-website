import React from 'react'
import './MobileNav.css'
// i want to open mobileNav so i set the props
// isopen is sate and togglMenu is what i want to do after the condition
//in here menu can be opened r not so if it is isopen class name will be
//mobile-menu-active, if isopen is false it will be just mobile-menu
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
  <>
  <div className={`mobile-menu ${isOpen ? "active" : " "}`}
  onClick={toggleMenu}  >
    <div className="mobile-menu-container">
    <i className=" logo fa-regular fa-user"></i>

    <ul>
        <li>
            <a href='https://www.youtube.com/' className= "menu-item">Home</a>
        </li>
        <li>
        <a href='https://www.youtube.com/'  className='menu-item'>Skills</a>
      </li>

      <li>
        <a href='https://www.youtube.com/' className='menu-item'>Work Experience</a>
      </li>

      <li>
        <a href='https://www.youtube.com/' className='menu-item'>Contact Me</a>
      </li>
      <button className='contact-btn' onClick={() => {}}>
        Hire Me
      </button>
    </ul>
    </div>
  </div>
  </>
  )
}

export default MobileNav
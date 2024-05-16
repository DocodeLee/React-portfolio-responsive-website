import React, { useState }  from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';


const Navbar = () => {
  const [openMenu, setOpenMmenu] =useState(false);

  const toggleMenu= () =>{
    setOpenMmenu(!openMenu);
    // MobileNav is connected to Navbar, so here is the parent.
    // set the var as openMenu, and func for openMenu
    // the basic is false,
    // i set the name as toggleMenu so on here also i made func
    // as name togglMenu it change the setOpenMenu as true
    // !openMenu = true
    // and i execute <MobileNav> and add isOpen which i set at child
    // toggleMenu as func toggleMenu. so this is the data flow
  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-Container'>
    <div className='nav-content'>
      <h1 className='logo'>Welcome To My HomePage</h1>
    <ul>
      <li>
        <a href='https://www.youtube.com/' className='menu-item'>Home</a>
      </li>
      <li>
        <a href='https://www.youtube.com/' className='menu-item'>Skills</a>
      </li>
      <li>
        <a href='https://www.youtube.com/' className='menu-item'>Work Experience</a>
      </li>
      <li>
        <a href='https://www.youtube.com/' className='menu-item'>Contact Me</a>
      </li>
      <button className="contact-btn" onClick={()=>{}}>
        Hire Me
        </button>
    </ul>
    <button className='menu-btn' onClick={toggleMenu}>
    <span
     className={"material-symbols-outlined"}
     >
    {/* <i class="fa-solid fa-bars"></i> */}
    {openMenu ? "Cl": "M"}
     </span>
    </button>
    </div>
    </nav>
    </>
  )
}

export default Navbar
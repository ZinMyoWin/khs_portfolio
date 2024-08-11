import React, { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {

  const [showHamburgerMenu, setShowHamburgerMenu] = useState('')

  const hamburgerMenu = ()=>{
    setShowHamburgerMenu(prevState => prevState === 'active' ? '' : 'active');
  }

  return (
      <div className="nav-bar">
        <div className='nav-container'>
          <div className='nav-logo'>
            <a href='#'>KAUNG HTIKE SAN</a>
          </div>
          <div className='nav-links-container'>
            <div className='nav-link'>
              <a href='#'>Work</a>
            </div>
            <div className='nav-link'>
              <a href='#'>About</a>
            </div>
            <div className='nav-link'>
              <a href='#'>Contact</a>
            </div>
          </div>
        
          <RxHamburgerMenu onClick={hamburgerMenu} className="hamburger-menu"/>
        
        </div>

        <div className={`hamburger-nav-links-container ${showHamburgerMenu}`}>
            <div className='hamburger-nav-link'>
              <a href='#'>Work</a>
            </div>
            <div className='hamburger-nav-link'>
              <a href='#'>About</a>
            </div>
            <div className='hamburger-nav-link'>
              <a href='#'>Contact</a>
            </div>
          </div>
      </div>
  );
}

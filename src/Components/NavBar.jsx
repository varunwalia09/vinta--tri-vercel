import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const backgroundRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(backgroundRef.current, {
        opacity: 0.6,
        scale: 1.05,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.to(navbarRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.to('.menu-item', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2,
      });
    } else {
      gsap.to(backgroundRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power4.in',
      });

      gsap.to(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.7,
        ease: 'power4.in',
      });

      gsap.to('.menu-item', {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.7,
        ease: 'power4.in',
        stagger: -0.1,
      });
    }
  }, [isOpen]);

  return (
    <nav className="nav">
      <a href="/" className="logo-1">
        <p>Vintaverse</p>
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ <span className="menu-text">Menu</span>
      </div>

      {isOpen && (
        <div className="menu-fullscreen" ref={backgroundRef}>
          <div className="close-icon" onClick={toggleMenu}>
            ✖ <span className="close-text">Close</span>
          </div>
          <ul className="navbar-1" ref={navbarRef}>
            <li className="menu-item">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="menu-item">
              <Link to="/skills" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;





// import React from 'react'
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <nav className='top-1'>
//         <a href="/" className="logo-1">
//         <p>Vintaverse</p>
//         </a>
//         <ul className="navbar-1">
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//             <li>
//                 <Link to="/skills">Skills</Link>
//             </li>
//             <li>
//                 <Link to="/contact">Contact</Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default NavBar;
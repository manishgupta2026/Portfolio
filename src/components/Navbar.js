// import React, { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleMenu = () => {
//     setIsMobile(!isMobile);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">My Portfolio</div>
//       <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
//         <li><a href="#hero">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css"; // Make sure the CSS is linked correctly

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

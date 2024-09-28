import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            Education
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            Experience
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#certification">
            Certification
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            Projects
          </AnchorLink>
        </li>
        {/* <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li> */}
      </ul>
    </div>
  );
}

export default Navbar;

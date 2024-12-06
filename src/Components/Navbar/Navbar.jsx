import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { GiHamburgerMenu, GiTireIronCross } from 'react-icons/gi';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../../Assets/logo.png";
import './Navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
    <div className='topnav'>
        <div className="container">
        <div className='top-left'>
        <ul>
        <li><MdEmail/>demo@example.com </li>
        <li> <IoCall />123456789</li>
        </ul>
        </div>
        <div className="top-right">
        <ul>
            <li><FaInstagram /></li>
            <li><FaFacebookF /></li>
            <li><FaLinkedinIn /></li>
            <li><FaTwitter /></li>
        </ul>

        </div>
        </div>
    </div>
    <div className="navbar">
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        
        <ul className="navbar-links">
        <li className="nav"><a href="#home">Home</a></li>
        <li className="nav"><a href="#about">About</a></li>
        <li className="nav"><a href="#Courses">Courses</a></li>
        <li className="nav"><a href="#Instructor">Instructor</a></li>
        <li className="nav"><a href="#Registor">Registor</a></li>
        <li className="nav"><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-small">
        <GiHamburgerMenu  fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="nav-small-overlay">
            <GiTireIronCross fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-small-links">
        <li ><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
        <li ><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
        <li ><a href="#Courses" onClick={() => setToggleMenu(false)}>Courses</a></li>
        <li ><a href="#Instructor" onClick={() => setToggleMenu(false)}>Instructor</a></li>
        <li><a href="#Registor" onClick={() => setToggleMenu(false)}>Registor</a></li>
        <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
      </ul>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

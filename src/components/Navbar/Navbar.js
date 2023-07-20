import React, { useRef} from "react";
// import classes from "./Navbar.module.css";
import Logo from "../../assets/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ scrollToSection,className }) => {
 

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav"); 
    
  };

  return (
    <header className= {className}>
     <img src={Logo} alt="Logo" />
      <nav ref={navRef}>
        {/* <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a> */}



          
          <a
            href="#1"
            onClick={(e) => {
              scrollToSection("about-us-section");
              e.preventDefault();
            }}
          >
            About Us
          </a>
       
      
          <a
            href="#2"
            onClick={(e) => {
              scrollToSection("how-it-works-section");
              e.preventDefault();
            }}
          >
            How it works?
          </a>
        
      
          <a
            href="#3"
            onClick={(e) => {
              scrollToSection("benifits-section");
              e.preventDefault();
            }}
          >
            Benefits
          </a>
        
      
          <a
            href="#4"
            onClick={(e) => {
              scrollToSection("pricing-section");
              e.preventDefault();
            }}
          >
            Pricing
          </a>
        
      
          <a
            href="#5"
            onClick={(e) => {
              scrollToSection("reviews-section");
              e.preventDefault();
            }}
          >
            Reviews
          </a>
        
      
          <a
            href="#6"
            onClick={(e) => {
              scrollToSection("faq-section");
              e.preventDefault();
            }}
          >
            FAQ
          </a>

          <button   className="nav_btn_mobi"  type="button">Create an account</button>
        


        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button    className="nav_btn_desk"  type="button">Create an account</button>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;

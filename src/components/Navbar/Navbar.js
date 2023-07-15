import React, { useRef, useState } from "react";
// import classes from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ scrollToSection,className }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const clasVal = isMenuOpen ? classes.nav_ul_resposive : classes.nav_ul;
  // return (
  //   <nav className={classes.nav}>
  //     <img src={Logo} alt="Logo" />
  //     <AiOutlineMenu
  //       className={classes.nav_icon}
  //       onClick={() => setIsMenuOpen(!isMenuOpen)}
  //     />
  //     <ul className={clasVal}>
        // <li>
        //   <a
        //     href="#"
        //     onClick={(e) => {
        //       scrollToSection("about-us-section");
        //       e.preventDefault();
        //     }}
        //   >
        //     About Us
        //   </a>
        // </li>
        // <li>
        //   <a
        //     href="#"
        //     onClick={(e) => {
        //       scrollToSection("how-it-works-section");
        //       e.preventDefault();
        //     }}
        //   >
        //     How it works?
        //   </a>
        // </li>
        // <li>
        //   <a
        //     href="#"
        //     onClick={(e) => {
        //       scrollToSection("benifits-section");
        //       e.preventDefault();
        //     }}
        //   >
        //     Benefits
        //   </a>
        // </li>
        // <li>
        //   <a
        //     href="#"
        //     onClick={(e) => {
        //       scrollToSection("pricing-section");
        //       e.preventDefault();
        //     }}
        //   >
        //     Pricing
        //   </a>
        // </li>
        // <li>
        //   <a
        //     href="#"
        //     onClick={(e) => {
        //       scrollToSection("reviews-section");
        //       e.preventDefault();
        //     }}
        //   >
        //     Reviews
        //   </a>
        // </li>
        // <li>
        //   <a
        //     href="#"
        //     onClick={(e) => {
        //       scrollToSection("faq-section");
        //       e.preventDefault();
        //     }}
        //   >
        //     FAQ
        //   </a>
        // </li>
  //     </ul>
  // <button
  //   className={classes.nav_btn}
  //   type="button"

  // >
  //   {" "}
  //   Create an account
  // </button>

  //   </nav>
  // );

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

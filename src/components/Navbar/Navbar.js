import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clasVal = isMenuOpen ? classes.nav_ul_resposive : classes.nav_ul;
  return (
    <nav className={classes.nav}>
      <img src={Logo} alt="Logo" />
      <AiOutlineMenu
        className={classes.nav_icon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ul className={clasVal}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection("about-us-section");
              e.preventDefault();
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection("how-it-works-section");
              e.preventDefault();
            }}
          >
            How it works?
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection("benifits-section");
              e.preventDefault();
            }}
          >
            Benefits
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection("pricing-section");
              e.preventDefault();
            }}
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection("reviews-section");
              e.preventDefault();
            }}
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection("faq-section");
              e.preventDefault();
            }}
          >
            FAQ
          </a>
        </li>
      </ul>
      <button
        className={classes.nav_btn}
        type="button"
        
      >
        {" "}
        Create an account
      </button>
    
    </nav>
  );
};

export default Navbar;

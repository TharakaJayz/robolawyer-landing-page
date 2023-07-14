import React from "react";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/aboutUs/AboutUs";
import HowItWorks from "./pages/howItWorks/HowItWorks";

import { Route, Routes } from "react-router-dom";
import Benifits from "./pages/Benifits/Benifits";
import Pricing from "./pages/pricing/Pricing";
import Reviews from "./pages/reviews/Reviews";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/home/Home";

const App = () => {

// functoin to scroll 

  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
    
  };



  return (
    <div className={classes.app_main}>
      <Navbar scrollToSection={scrollToSection} />
      <Home/>
      <AboutUs />
      <HowItWorks />
      <Benifits />
      <Pricing/>
      <Reviews />
      <FAQ />
    </div>
  );
};

export default App;

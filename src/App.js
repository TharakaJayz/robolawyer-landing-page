import React from "react";
import classes from "./App.module.css";

import AboutUs from "./pages/aboutUs/AboutUs";
import HowItWorks from "./pages/howItWorks/HowItWorks";


import Benifits1 from "./pages/Benifits/Benifits1";
import Pricing from "./pages/pricing/Pricing";
import Reviews from "./pages/reviews/Reviews";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/home/Home";
import Benifits2 from "./pages/Benifits/Benifits2";
import Partners from "./pages/partners/Partners";

const App = () => {

// functoin to scroll 

  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
    
  };



  return (
    <div className={classes.app_main}>
      {/* <Navbar scrollToSection={scrollToSection} /> */}
      <Home/>
      <AboutUs />
      <HowItWorks />
      <Benifits1 />
      <Benifits2 />
      <Pricing/>
      <Partners />
      <Reviews />
      <FAQ />
      {/* <button className={classes.app_btn}>HOME</button> */}
    </div>
  );
};

export default App;

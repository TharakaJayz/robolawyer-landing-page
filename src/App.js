import React, { useEffect } from "react";
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
import Footer from "./pages/footer/Footer";
import Certified from "./pages/certified/Certified";
import ContactUs from "./pages/contactUs/ContactUs";
import ReactGA  from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router";
const App = () => {

// functoin to scroll 



 useEffect(()=>{
  ReactGA.initialize("G-V7BHWNW5GR");

  ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "app.js" });
 },[])

  return (
     <BrowserRouter>
     <Routes>
      <Route path ="/" element = {
    <div className={classes.app_main}>
      {/* <Navbar scrollToSection={scrollToSection} /> */}
     
        <div className={classes.app_btn}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#howitworks">HOW IT WORKS</a>
          <a href="#benifits1">BENIFITS 1</a>
          <a href="#benifits2">BENIFITS 2</a>
          <a href="#pricing">PRICING</a>
          <a href="#partners">PARTNERS</a>
          <a href="#reviews">REVIEWS</a>
          <a href="#faq">FAQ</a>
          <a href="#certified">CERTIFIED</a>
          <a href="#contactus">CONTACT US</a>
        </div>
      <Home/>
      <AboutUs />
      <HowItWorks />
      <Benifits1 />
      <Benifits2 />
      <Pricing/>
      <Partners />
      <Reviews />
      <FAQ />
      <Certified />
      <ContactUs />
      <Footer />
      {/* <button className={classes.app_btn}>HOME</button> */}
    </div>

      } />
    </Routes>
    </BrowserRouter>
  );
};

export default App;

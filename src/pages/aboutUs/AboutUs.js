import React from "react";
import classes from "./AboutUs.module.css";

import aboutImg from "../../assets/aboutImg.png";

const AboutUs = () => {
  return (
    <div className={classes.about_main} id="about-us-section">
      <div className={classes.about_main_L}>
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className={classes.about_main_R}>
        <section className={classes.about_main_R_sec1}>ABOUT US</section>
        <section className={classes.about_main_R_sec2}>
          <span>What is</span> Robolawyer
        </section>
        <section className={classes.about_main_R_sec3}>
          <p>Robolawyer uses state-of-the-art natural language processing technology to understand complex legal queries and provide accurate responses, making it easy to obtain legal information and guidance.  y leveraging the power of AI, the system can analyze and interpret various legal documents, statutes, and case law to provide comprehensive and up-to-date answers.Our goal with Robolawyer is to empower individuals by making legal information more accessible, demystifying complex legal concepts, and promoting legal literac</p>
        </section>  
      </div>
    </div>
  );
};

export default AboutUs;

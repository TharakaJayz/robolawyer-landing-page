import React from "react";
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.home_main}>
      <Navbar scrollToSection={scrollToSection} />
      <div className={classes.home_sub}>
        <div className={classes.home_sub_l}>
          <section className={classes.sec_1}>
            <a href="#">Unlock legal solutions with Robolawyer</a>
          </section>
          <section className={classes.sec_2}>
            Simplify Your Legal Journey <br></br>with AI Powered Expertise
          </section>
          <section className={classes.sec_3}>
            <p>
              Experience a seamless and empowering legal journey with
              Robolawyer. Our AI-powered platform combines the expertise of
              top-notch attorneys with cutting-edge technology to revolutionize
              legal services
            </p>
          </section>
          <section className={classes.sec_4}>
            <button>Get Robolawyer for $0</button>
            <p>No credit card required</p>
          </section>
        </div>
        <div className={classes.home_sub_r}>r</div>
      </div>
    </div>
  );
};

export default Home;

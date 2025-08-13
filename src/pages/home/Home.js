import React from "react";
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import shape from "../../assets/rectangle.png";
import homeCircles from "../../assets/home_circles.png";
import pic1Home from "../../assets/pic1_home.png";
import pic2Home from "../../assets/pic2_home.png";
import user1 from '../../assets/User Thumb1.png';
import user2 from '../../assets/User Thumb2.png';
import user3 from '../../assets/User Thumb3.png';
import user4 from '../../assets/User Thumb4.png';
import user5 from '../../assets/User Thumb5.png';
import ReactGA from "react-ga4";
const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonclick = () =>{
    ReactGA.event({
  category: "credit card btn config",
  action: "no_action",
  label: "button", // optional
  
});
  }

  return (
    <div className={classes.home_main}>
      <Navbar scrollToSection={scrollToSection} className={classes.nav_style} />
      <div className={classes.home_sub}>
        <div className={classes.home_sub_l}>
          <section className={classes.sec_1}>
            <a href="unlock">Unlock legal solutions with Robolawyer</a>
          </section>
          <section className={classes.sec_2}>
            Simplify Your Legal Journey <span>with AI Powered Expertise
            </span>
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
            <button onClick={handleButtonclick}>Get Robolawyer for $0</button>
            <p>No credit card required</p>
          </section>
        </div>
        <div className={classes.home_sub_r}>
          <div className={classes.sub_r_div}>
            <div className={classes.sub_r_div_wrap}>
            <div className={classes.sub_r_div_sub}>

              {/* ttttt */}
            <section className={classes.sub_r_div_sec1}>
            <div className={classes.sub_r_text}>
            <section className={classes.seb_r_sec1}>
              <button>Your AI Law assistant</button>
            </section>
            <section className={classes.seb_r_sec2}>
              {" "}
              Get your doubts clarified <span>instantly, </span>
            </section>
            <section className={classes.seb_r_sec3}>
              {" "}
              Aliquam ut euismod condimentum elementum ultricies volutapat sit
              non.
            </section>
            </div>
            <img src= {pic1Home}  alt = "pic1"  />
            </section>
            <section className={classes.sub_r_div_sec2}>
             <img  className={classes.img1}  src = {pic2Home} alt='pic2'  />

             <section>
              
              <img  className={classes.user_img1} src ={user1}   alt="user1"/>
              <img  className={classes.user_img2} src ={user2}   alt="user2"/>
              <img  className={classes.user_img3} src ={user3}   alt="user3"/>
              <img  className={classes.user_img4} src ={user4}   alt="user4"/>
              <img  className={classes.user_img5} src ={user5}   alt="user5"/>
              </section> 
            </section>
            </div>
           <div className={classes.sub_r_shape}>

            <img className={classes.shape1} src={homeCircles} alt="circles" />
            <img   className={classes.shape2}src={shape} alt="shape" />
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
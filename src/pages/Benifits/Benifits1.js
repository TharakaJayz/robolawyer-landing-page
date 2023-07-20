import React from "react";
import classes from "./Benifits1.module.css";
import imgage from "../../assets/benifict_img.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Benifits1 = () => {
  return (
    <div className={classes.benificts_main} id="benifits-section">
      <div className={classes.Benifits_main_content}>
        <div className={classes.Benifits_main_content_L}>
          <img src={imgage} alt="business men" />
        </div>
        <div className={classes.Benifits_main_content_R}>
          <section className={classes.main_content_R_sec1}>BENEFITS</section>
          <section className={classes.main_content_R_sec2}>
            What you will <span>get </span>
          </section>
          <section className={classes.main_content_R_sec3}>
            <section>
              {" "} 
              <BsFillCheckCircleFill className={classes.svg} />
              <p>Easily access legal information and guidance</p>
            </section>
            <section>
              {" "}
              <BsFillCheckCircleFill className={classes.svg} />
              <p>Reduce costs by accessing legal resources</p>   
            </section>{" "}
            <section>
              {" "}
              <BsFillCheckCircleFill className={classes.svg} />
              <p>Receive immediate responses and solutions, saving valuable time</p>
            </section>{" "}
            <section>
              {" "}
              <BsFillCheckCircleFill className={classes.svg} />
              <p>Trust in accurate and reliable information based on up-to-date legal principles</p>
            </section>{" "}

           
            <section>
              {" "}
              <BsFillCheckCircleFill className={classes.svg} />
              <p>Receive tailored legal advice and guidance that addresses your unique needs and concerns.</p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Benifits1;

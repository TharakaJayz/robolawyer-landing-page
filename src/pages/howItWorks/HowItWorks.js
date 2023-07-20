import React from "react";
import classes from "./HowItWorks.module.css";
import rect from "../../assets/rectangle.png";
import circle from "../../assets/circle_bullet+process.png";
import process_img from "../../assets/proces_img.png";

const HowItWorks = () => {
  return (
    <div className={classes.HItW_main} id="how-it-works-section">
      <div className={classes.HItW_main_div}>
        <img className={classes.HItW_main_div_img1} src={rect} alt="rectangle" />
        <div className={classes.HItW_main_div_detail}>
          <section className={classes.detail_sec1}>
            <section className={classes.detail_sec1_sub_sec1}>PROCESS</section>
            <section className={classes.detail_sec1_sub_sec2}>
              How it <span>works?</span>
            </section>  
            <section className={classes.detail_sec1_sub_sec3}>
              <section className={classes.detail_sec1_sub_sec3_L}>
                {" "}
                <div></div>
              </section>
              <section className={classes.detail_sec1_sub_sec3_R}>
                <div className={classes.detail_sec1_sub_sec3_div}>
                  <section>
                    {" "}
                    <img src={circle} alt="circle" />
                  </section>
                  <section>
                    <h3>Give input as text/Voice</h3>
                    <p>
                      Users provide their legal queries, keywords, or upload
                      legal documents to the website.
                    </p>
                  </section>
                </div>

                <div className={classes.detail_sec1_sub_sec3_div}>
                  <section>
                    {" "}
                    <img src={circle} alt="circle" />
                  </section>
                  <section>
                    <h3>Your input get process from our server</h3>
                    <p>
                      The website utilizes advanced NLP techniques to analyze
                      and understand the user input, extract relevant
                      information, and categorize legal concepts.
                    </p>
                  </section>
                </div>

                <div className={classes.detail_sec1_sub_sec3_div}>
                  <section>
                    {" "}
                    <img src={circle} alt="circle" />
                  </section>
                  <section>
                    <h3>Output and assistance</h3>
                    <p>
                      Based on the processed data, the website retrieves
                      relevant legal information, provides intelligent search
                      results, offers automated responses or recommendations
                    </p>
                  </section>
                </div>
              </section>
            </section>
          </section>
          <section className={classes.detail_sec2}>
            <img  className={classes.detail_sec2_img} src = {process_img}  alt = 'prosess'  />
            <img className={classes.HItW_main_div_img3} src={rect} alt="rectangle" />
            
          </section>
          </div>
          <img className={classes.HItW_main_div_img2} src={rect} alt="rectangle" />
      </div>
    </div>
  );
};

export default HowItWorks;

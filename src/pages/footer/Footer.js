import React from "react";
import classes from "./Footer.module.css";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={classes.footer_main}>
      <div className={classes.footer_main_content}>
        <div className={classes.footer_main_sub1}>
          <section className={classes.main_sub_sec1}>
            <span>Product</span>
            <span className={classes.sec}>Company</span>
          </section>
          <section className={classes.main_sub_sec2}>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
          </section>
        </div>

        <div className={classes.footer_main_sub1}>
          <section className={classes.main_sub_sec1}>
            <span>Resources</span>
            <span className={classes.sec}>Use cases</span>
          </section>
          <section className={classes.main_sub_sec2}>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
          </section>
        </div>

        <div className={classes.footer_main_sub1}>
          <section className={classes.main_sub_sec1}>
            <span>Social</span>
            <span className={classes.sec}>Legal</span>
          </section>
          <section className={classes.main_sub_sec2}>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
            <section>
              <a href="#">Overview</a>
              <a className={classes.sec} href="#">
                About us
              </a>
            </section>
          </section>
        </div>
      </div>
      <div className={classes.footer_end}>
        <AiOutlineCopyright />
        <a href="#robolawyer">2023 Robolawyer. All rights reserved. </a>
      </div>
    </div>
  );
};

export default Footer;

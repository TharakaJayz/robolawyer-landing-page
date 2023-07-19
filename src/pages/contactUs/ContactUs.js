import React from "react";
import classes from "./ContactUs.module.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const ContactUs = () => {
  const [value, setValue] = useState();
  return (
    <div className={classes.contact_main}>
      <div className={classes.main_top}>
        <h4>Contact us</h4>
        <h1>Get in touch</h1>
        <p>We'd love to hear from you. Please fill out this form.</p>
      </div>
      <div className={classes.main_bottom}>
        <form>
          <div className={classes.row_1}>
            <section>
              {" "}
              <span>First name</span>
              <input type="text" placeholder="First name" />{" "}
            </section>{" "}
            <section>
              {" "}
              <span>Last name</span>
              <input type="text" placeholder="Last name" />{" "}
            </section>{" "}
          </div>
          <section className={classes.row_2}>
            {" "}
            <span>Email</span>
            <input type="email" placeholder="you@company.com" />{" "}
          </section>
          <section className={classes.row_3}>
            {" "}
            <span>Phone number</span>
            <PhoneInput
              placeholder={value}
              value={value}
              onChange={setValue}
            />{" "}
          </section>


          <section className={classes.row_4}>
            <span>Message</span>
            <textarea placeholder="Leave us a message..."></textarea>
          </section>

          <section className={classes.row_5}> <input type="checkbox" value={"agreee"}  /> You agree to our friendly privacy policy. </section>
          <section className={classes.row_6}> <button>Send message</button> </section>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

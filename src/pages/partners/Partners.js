import React from 'react';
import classes from './Partners.module.css';
import parter1 from '../../assets/partner1.png'
import parter2 from '../../assets/partner2.png'
import parter3 from '../../assets/partner3.png'
import parter4 from '../../assets/partner4.png'
import parter5 from '../../assets/partner5.png'
import parter6 from '../../assets/partner6.png'

const Partners = () => {
  return (
    <div className={classes.partner_main}>
        <div className={classes.extra_div}></div>
       
      <h4>PARTNERS</h4>
      <h2>Our partners</h2>
      <p>Experience a seamless and empowering legal jou Robolawyer. Our AI-powered platform combines the </p>
      <div className={classes.partner_log_div}>
        <section className={classes.logo_sec}>
            <img  className={classes.img_1}  src = {parter1}  alt = ""  />
            <img  className={classes.img_2}  src  = {parter2}  alt = ""  />
        </section>
        <section className={classes.logo_sec}>
            <img  className={classes.img_3}  src = {parter3}  alt = ""  />
            <img  className={classes.img_4}  src  = {parter4}  alt = ""  />
        </section>
        <section className={classes.logo_sec}>
            <img  className={classes.img_5}  src = {parter5}  alt = ""  />
            <img  className={classes.img_6}  src  = {parter6}  alt = ""  />
        </section>
      </div>
      <div className={classes.extra_div}></div>
    </div>
  )
}

export default Partners

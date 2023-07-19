import React from 'react';
import classes from './Certified.module.css';

import logo1 from '../../assets/certificateLogo1.png';
import logo2 from '../../assets/certificateLogo2.png';
import logo3 from '../../assets/certificateLogo3.png';

const Certified = () => {
  return (
    <div className={classes.certified_main}>
        <div className={classes.sub_div} >
       <h1>Certified by</h1>
       <h5>Our Robolawyer is certified by</h5>
       <section>
           <span> <img  className={classes.img1}  src = {logo1}  alt = 'GDPR' /></span>
           <span> <img  className={classes.img2}  src = {logo2}  alt = 'GDPR' /></span>
           <span> <img  className={classes.img3}  src = {logo3}  alt = 'GDPR' /></span>
       </section>

       </div>
    </div>
  )
}

export default Certified

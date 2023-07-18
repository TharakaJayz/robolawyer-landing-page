import React from 'react';
import classes from './Reviews.module.css';
import Feedback from './Feedback';

const Reviews = () => {
  return (
    <div id = 'reviews-section' className={classes.review_main}>
       <section className={classes.sec1}>
        <h5>TESTIMONIALS</h5>
        <h1>What our customers say about us</h1>
        <p>Experience a seamless and empowering legal jou Robolawyer. Our AI-powered platform combines the  Experience a seamless and empowering legal jou Robolawyer.</p>
       </section>
       <section className={classes.sec2}>
           <Feedback className = {classes.big}  size = {2} />
           <Feedback className = {classes.smal}   size = {1}  />
       </section>
    </div>
  )
}

export default Reviews

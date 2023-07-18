import React from "react";
import classes from "./QuestionCard.module.css";
import { useState } from "react";
import Testing from "./Testing";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';

const QuestionCard = (props) => {
  const [showLogic, setShowLogic] = useState(false);
  console.log(showLogic);
  return (
    <div className={`${classes.que_main}  ${props.className} `}>
      <section className={classes.question}>
        {props.details.question}{" "}
       {!showLogic &&( <AiOutlinePlusCircle  className={classes.toggle_svg}    onClick={() => setShowLogic(!showLogic)} /> )}
       {showLogic &&( <AiOutlineMinusCircle  className={classes.toggle_svg}   onClick={() => setShowLogic(!showLogic)} /> )}
        
      </section>
      <section className={showLogic ? classes.show : classes.hide}>
        {" "}
        <p>
        {props.details.answer}
        </p>
      </section>
      <hr className={classes.hr} />

      {/* <div>test text</div>
      <div   className={ showLogic ?  classes.show: classes.hide }   > <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p></div> */}
    </div>
  );
};

export default QuestionCard;

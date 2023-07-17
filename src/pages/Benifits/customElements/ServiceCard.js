import React from 'react';
import classes from './ServiceCard.module.css';
import {BsQuestionOctagon} from 'react-icons/bs';

const ServiceCard = (props) => {
  return (
    <div className={  `${classes.serviceCard_main}   ${props.className}`}>
        <div className={classes.svg_div}>

        {/* <BsQuestionOctagon className={classes.svg}/>  */}
        {props.svg}
        </div>
        <h3>{props.heading}</h3>
        
        <p>{props.para}</p>
    </div>
  )
}

export default ServiceCard

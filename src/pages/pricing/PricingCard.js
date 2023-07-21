import React from "react";
import classes from "./PricingCard.module.css";
// import {MdDone} from 'react-icons/md';

const PricingCard = (props) => {
  return (
    <div className={`${classes.pricingCard_main}  ${props.className} `}>
      <h4> {props.details.name} </h4>
      <p>{props.details.desc} </p>
      <div className={classes.price_div}> <h1>${props.details.price} </h1> /Month</div>
      <button>Start today</button>
      <div className={classes.feture_div}>
       
        <section> {props.details.points[0].svg} {props.details.points[0].desc}</section>
        <section> {props.details.points[1].svg} {props.details.points[1].desc}</section>
        <section> {props.details.points[2].svg} {props.details.points[2].desc}</section>
        <section> {props.details.points[3].svg} {props.details.points[3].desc}</section>
        <section> {props.details.points[4].svg} {props.details.points[4].desc}</section>
        <section> {props.details.points[5].svg} {props.details.points[5].desc}</section>
       
      </div>
    </div>
  );
};

export default PricingCard;

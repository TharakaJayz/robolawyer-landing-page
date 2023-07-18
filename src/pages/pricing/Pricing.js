import React, { useState } from "react";

import classes from "./Pricing.module.css";

import Switch from "react-switch";
import PricingCard from "./PricingCard";

import { MdDone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Pricing = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const detailsForPriceCard = [
    {
      name: "Freebie",
      desc: "Ideal for individuals who need quick access to basic features.",
      price: "0",
      points: [
        { svg: <MdDone  className={classes.svg_done}/> , desc: <span  className={classes.span_done}>Lorem ipsum</span>},
        { svg: <MdDone  className={classes.svg_done}/> , desc:<span className={classes.span_done}>Lorem ipsum</span>},
        { svg: <AiOutlineClose  className={classes.svg_close}/> , desc:<span className={classes.span_close}>Lorem ipsum</span>},
        { svg: <AiOutlineClose  className={classes.svg_close}/> , desc:<span className={classes.span_close}>Lorem ipsum</span>},
        { svg: <AiOutlineClose  className={classes.svg_close}/> , desc:<span className={classes.span_close}>Lorem ipsum</span>},
        { svg: <AiOutlineClose  className={classes.svg_close}/> , desc:<span className={classes.span_close}>Lorem ipsum</span>},
      ],
    },
    {
      name: "Basic",
      desc: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "10",
      points: [
        { svg: <MdDone  className={classes.svg_done}/> , desc:<span className={classes.span_done}>Lorem ipsum</span>},
        { svg: <MdDone  className={classes.svg_done}/> , desc:<span className={classes.span_done}>Lorem ipsum</span>},
        { svg: <MdDone  className={classes.svg_done}/> , desc:<span className={classes.span_done}>Lorem ipsum</span>},
        { svg: <MdDone  className={classes.svg_done}/> , desc:<span className={classes.span_done}>Lorem ipsum</span>},
        { svg: <MdDone  className={classes.svg_done}/> , desc:<span className={classes.span_done}>Lorem ipsum</span>},
     
        { svg: <AiOutlineClose  className={classes.svg_close}/> , desc:<span className={classes.span_close}>Lorem ipsum</span>},
      ],
    },
  ];

  return (
    <div id="pricing-section" className={classes.pricing_main}>
      <div className={classes.pricing_main_top}>
        <h5>PRICING</h5>
        <h1>Flat price for everyone</h1>
        <p className={classes.p}>
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostr
        </p>
        <div className={classes.pricing_main_top_toggle}>
          {checked && <p> Billed Monthly </p>}
          {!checked && <p className={classes.toggled}> Billed Monthly </p>}
          <Switch
            onChange={handleChange}
            checked={checked}
            className={classes.react_switch}
            onColor="#4169E3"
          />

          {checked && <p className={classes.toggled}> Billed Yearly </p>}
          {!checked && <p> Billed Yearly </p>}
        </div>
      </div>
      <div className={classes.pricing_main_bottom}>
        <PricingCard      details = {detailsForPriceCard[0]}     className={classes.priceCard_style_freebie} />
        <PricingCard      details = {detailsForPriceCard[1]}     className={classes.priceCard_style_basic} />
        <PricingCard      details = {detailsForPriceCard[0]}     className={classes.priceCard_style_permium} />
        <PricingCard      details = {detailsForPriceCard[0]}     className={classes.priceCard_style_lawyer} />
      </div>
    </div>
  );
};

export default Pricing;

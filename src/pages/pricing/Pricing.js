import React, { useState } from "react";

import classes from "./Pricing.module.css";

import Switch from "react-switch";

const Pricing = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
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
            
            {checked &&( <p>   Billed Monthly </p>   )}
            {!checked &&( <p className={classes.toggled}>   Billed Monthly </p>   )}
            <Switch
              onChange={handleChange}
              checked={checked}
              className= {classes.react_switch}
              onColor = "#4169E3"
            />
             
                {checked &&( <p className={classes.toggled}> Billed Yearly </p>   )}
                {!checked &&( <p > Billed Yearly </p>   )}
          
        </div>
      </div>
      <div className={classes.pricing_main_bottom}></div>
    </div>
  );
};

export default Pricing;

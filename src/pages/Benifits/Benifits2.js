import React from "react";
import classes from "./Benifits2.module.css";
import ServiceCard from "./customElements/ServiceCard";
import { BsQuestionOctagon } from "react-icons/bs";
import Lawyer from "./customElements/Lawyer";

const Benifits2 = () => {
  const ServiceCardDetails = [
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
    {
        svg: <BsQuestionOctagon />,
        heading: "legal information and research",
        para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
      },
      {
        svg: <BsQuestionOctagon />,
        heading: "legal information and research",
        para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
      },
      {
        svg: <BsQuestionOctagon />,
        heading: "legal information and research",
        para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
      },
      {
        svg: <BsQuestionOctagon />,
        heading: "legal information and research",
        para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
      },
      {
        svg: <BsQuestionOctagon />,
        heading: "legal information and research",
        para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
      },
  ];

  return (
    <div className={classes.benifits2_main}>
      <div className={classes.benifits2_main_top}>
        <h1>
          Let Robolawyer answer to <span> your questions. </span>
        </h1>
        <p>
          Experience a seamless and empowering legal journey with Robolawyer.
          Our AI-powered platform combines the{" "}
        </p>
      </div>
      <div className={classes.benifits2_main_bottom}>
        <section className={classes.main_bottom_sec1}>
          <h5>AREA OF DEPLOYMENT</h5>
          <h2>Where Robolawyer can be used</h2>
          <p>
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr
          </p>
        </section>
        <section className={classes.main_bottom_sec2}>
          <section className={classes.bottom_sec2_sub1}>
            {" "}
            <ServiceCard
              className={classes.main_bottom_sec2_card}
              svg={ServiceCardDetails[0].svg}
              heading={ServiceCardDetails[0].heading}
              para={ServiceCardDetails[0].para}
            />{" "}
            <ServiceCard
              className={classes.main_bottom_sec2_card}
              svg={ServiceCardDetails[1].svg}
              heading={ServiceCardDetails[1].heading}
              para={ServiceCardDetails[1].para}
            />{" "}
            <ServiceCard
              className={classes.main_bottom_sec2_card}
              svg={ServiceCardDetails[2].svg}
              heading={ServiceCardDetails[2].heading}
              para={ServiceCardDetails[2].para}
            />{" "}
          </section>
          <section className={classes.bottom_sec2_sub2}>
            <ServiceCard
              className={classes.main_bottom_sec2_card}
              svg={ServiceCardDetails[3].svg}
              heading={ServiceCardDetails[3].heading}
              para={ServiceCardDetails[3].para}
            />{" "}
            <ServiceCard
              className={classes.main_bottom_sec2_card}
              svg={ServiceCardDetails[4].svg}
              heading={ServiceCardDetails[4].heading}
              para={ServiceCardDetails[4].para}
            />{" "}
            <ServiceCard
              className={classes.main_bottom_sec2_card}
              svg={ServiceCardDetails[5].svg}
              heading={ServiceCardDetails[5].heading}
              para={ServiceCardDetails[5].para}
            />{" "}
          </section>
        </section>
        <section className={classes.main_bottom_sec3}>
            <h4>We provide law knowledge to everyone</h4>
            <div  className={classes.div_normal}> <Lawyer display = {3} />  </div>
           <div className={classes.div_small}> <Lawyer   display = {2}  />  </div>
        </section>
      </div>
    </div>
  );
};

export default Benifits2;

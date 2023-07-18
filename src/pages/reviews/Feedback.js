import React from "react";
import classes from "./Feedback.module.css";
import quota from "../../assets/quation.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Feedback = (props) => {
  return (
    <div className={`${classes.feedback_main}  ${props.className} `}>
      <Swiper
        className={classes.swipe}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={props.size}
        //   navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={classes.swip_div}>
            <section className={classes.sec_1}>
              {" "}
              <span>"</span>{" "}
            </section>
            <section className={classes.sec_2}>
              <p>
                An exquisite blend of fashion-forward designs and impeccable
                craftsmanship, our fashion website is a testament to the pursuit
                of sartorial excellence.{" "}
              </p>
              <h4>Albert kinseki</h4>
              <h5>founder of Yu fashions</h5>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swip_div}>
            <section className={classes.sec_1}>
              {" "}
              <span>"</span>{" "}
            </section>
            <section className={classes.sec_2}>
              <p>
                An exquisite blend of fashion-forward designs and impeccable
                craftsmanship, our fashion website is a testament to the pursuit
                of sartorial excellence.{" "}
              </p>
              <h4>Albert kinseki</h4>
              <h5>founder of Yu fashions</h5>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swip_div}>
            <section className={classes.sec_1}>
              {" "}
              <span>"</span>{" "}
            </section>
            <section className={classes.sec_2}>
              <p>
                An exquisite blend of fashion-forward designs and impeccable
                craftsmanship, our fashion website is a testament to the pursuit
                of sartorial excellence.{" "}
              </p>
              <h4>Albert kinseki</h4>
              <h5>founder of Yu fashions</h5>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Feedback;

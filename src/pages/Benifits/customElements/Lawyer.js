import React from "react";
import classes from "./Lawyer.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { US } from "country-flag-icons/react/3x2";
import { AU } from "country-flag-icons/react/3x2";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import lawyer1 from "../../../assets/lawyer.png";

const Lawyer = (props) => {
  const lawyerDetails = [
    {
      img: lawyer1,
      name: "Mike johnson",
      flag: <US className={classes.img} />,
      country: "United status",
    },
    {
      img: lawyer1,
      name: "Mike johnson",
      flag: <AU className={classes.img} />,
      country: "Australia",
    },
    {
      img: lawyer1,
      name: "Mike johnson",
      flag: <AU className={classes.img} />,
      country: "Australia",
    },
    {
      img: lawyer1,
      name: "Mike johnson",
      flag: <US className={classes.img} />,
      country: "Australia",
    },
  ];
  return (
    <div className={classes.lawyer_main}>
      <Swiper
        className={classes.Swiper_}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={props.display}
        navigation={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {lawyerDetails.map((lawyer) => {
          return (
            <SwiperSlide>
              <div className={classes.swiperSlide}>
                <img
                  src={lawyer.img}
                  className={classes.swipe_img}
                  alt="lawyer"
                />
                <section className={classes.swiperSlide_sec}>
                  <h5>{lawyer.name}</h5>
                  <section>
                    {" "}
                    {/* <US className={classes.img} />  */}
                    {lawyer.flag}
                    <span>{lawyer.country}</span>
                  </section>
                </section>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                
                <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide> */}
      </Swiper>

      {/* <Swiper
        className={`${classes.Swiper_}  ${props.smallStyle}`}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img src={lawyer1} className={classes.swipe_img} alt="lawyer" />
            <section className={classes.swiperSlide_sec}>
              <h5>Mike johnson</h5>
              <section>
                {" "}
                <US className={classes.img} /> <span>United status</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Lawyer;

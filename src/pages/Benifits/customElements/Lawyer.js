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
      name: "Mike johnson1",
      flag: <US className={classes.img} />,
      country: "United status",
    },
    {
      img: lawyer1,
      name: "Mike johnson2",
      flag: <AU className={classes.img} />,
      country: "Australia",
    },
    {
      img: lawyer1,
      name: "Mike johnson3",
      flag: <AU className={classes.img} />,
      country: "Australia",
    },
    {
      img: lawyer1,
      name: "Mike johnson4",
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
        loop={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {lawyerDetails.map((lawyer) => {
          return (
            <div className={classes.test_div}>
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
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Lawyer;

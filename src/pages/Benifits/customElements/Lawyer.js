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
    {
      img: lawyer1,
      name: "Mike johnson5",
      flag: <US className={classes.img} />,
      country: "Australia",
    },
    {
      img: lawyer1,
      name: "Mike johnson6",
      flag: <US className={classes.img} />,
      country: "Australia",
    },
    {
      img: lawyer1,
      name: "Mike johnson7",
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
        // loopedSlidesLimit={false}
        // loopedSlides={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* {lawyerDetails.map((lawyer) => {
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
                     
                      {lawyer.flag}
                      <span>{lawyer.country}</span>
                    </section>
                  </section>
                </div>
              </SwiperSlide>

            
              <SwiperSlide> slide 2 </SwiperSlide>
              <SwiperSlide> slide 3 </SwiperSlide>
              <SwiperSlide> slide 4 </SwiperSlide>
              <SwiperSlide> slide 5 </SwiperSlide>
            </div>
          );
        })} */}
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[0].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[0].name}</h5>
              <section>
                {" "}
                {lawyerDetails[0].flag}
                <span>{lawyerDetails[0].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[1].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[1].name}</h5>
              <section>
                {" "}
                {lawyerDetails[1].flag}
                <span>{lawyerDetails[1].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[2].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[2].name}</h5>
              <section>
                {" "}
                {lawyerDetails[2].flag}
                <span>{lawyerDetails[2].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[3].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[3].name}</h5>
              <section>
                {" "}
                {lawyerDetails[3].flag}
                <span>{lawyerDetails[3].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[4].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[4].name}</h5>
              <section>
                {" "}
                {lawyerDetails[4].flag}
                <span>{lawyerDetails[4].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[5].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[5].name}</h5>
              <section>
                {" "}
                {lawyerDetails[5].flag}
                <span>{lawyerDetails[5].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.swiperSlide}>
            <img
              src={lawyerDetails[6].img}
              className={classes.swipe_img}
              alt="lawyer"
            />
            <section className={classes.swiperSlide_sec}>
              <h5>{lawyerDetails[6].name}</h5>
              <section>
                {" "}
                {lawyerDetails[6].flag}
                <span>{lawyerDetails[6].country}</span>
              </section>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Lawyer;

import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper/modules";

const CurrentEvents = ({ matchingValue }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {matchingValue.map((data, idx) => (
          <SwiperSlide key={idx}>
            <h1 className="text-center px-4">
              {data.isAlive
                ? `আজ ${data?.name} এর জন্মদিন `
                : `আজ ${data?.name} এর মৃত্যু বার্ষিকী  `}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
CurrentEvents.propTypes = {
  matchingValue: PropTypes.array,
};
export default CurrentEvents;

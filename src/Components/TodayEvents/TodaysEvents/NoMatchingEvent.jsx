import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../CurrentEvents/style.css";

// import required modules
import { EffectCards } from "swiper/modules";

const NoMatchingEvent = ({ NoValue }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className="text-center px-4">{NoValue}</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
NoMatchingEvent.propTypes = {
  NoValue: PropTypes.string,
};
export default NoMatchingEvent;

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../CurrentEvents/style.css";

// import required modules
import { EffectCards } from "swiper/modules";
const UpcommingEvent = ({ upCommingData }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {upCommingData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <h1 className="text-center p-4">
              {`${data.birthday} তারিখে ${data.name} এর জন্মদিন`}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

UpcommingEvent.propTypes = {
  upCommingData: PropTypes.array,
};

export default UpcommingEvent;

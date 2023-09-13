import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../CurrentEvents/style.css";

// import required modules
import { EffectCards } from "swiper/modules";
const UpCommingDeadEvent = ({ upCommingDeadData }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {upCommingDeadData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <h1 className="text-center p-4 ">
              {`${data.name} এর মৃত্যু বার্ষিকী ${data.deadDate}  তারিখে`}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

UpCommingDeadEvent.propTypes = {
  upCommingDeadData: PropTypes.array,
};

export default UpCommingDeadEvent;

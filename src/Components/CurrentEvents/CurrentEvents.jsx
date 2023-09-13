// const CurrentEvents = () => {
//   return (
//     <div className=" container mx-auto lg:mt-20 my-12 text-center flex justify-center">
//       <div className="rounded-full flex justify-center h-16 md:w-1/2 items-center">
//         <h1 className="lg:text-3xl text-xl text-[#1f5ba4] font-extrabold">
//           আজকের এই দিনে যা যা ঘটেছিলোঃ-
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default CurrentEvents;

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
                ? `আজ ${data.name} এর জন্মদিন `
                : `আজ ${data.name} এর মৃত্যু বার্ষিকী  `}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
CurrentEvents.propTypes = {
  villeger: PropTypes.any,
};
export default CurrentEvents;

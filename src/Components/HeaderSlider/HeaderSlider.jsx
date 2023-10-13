import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HeaderSlider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TimerCountdown from "../Carosol/Carosoal";

const HeaderSlider = () => {
  return (
    <div className="mt-16 relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {}
        <SwiperSlide>
          <img
            className="w-full h-full cover"
            src="https://icms-image.slatic.net/images/ims-web/76b78e2f-db47-46d4-a279-70679a36f2c9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full cover"
            src="https://icms-image.slatic.net/images/ims-web/5c3ea859-2ecd-4e85-bc10-68cfd2e56727.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="md:absolute md:right-4 md:bottom-2 z-30 ">
        <div className=" bg-white md:border-red-600 my-4 md:my-0  mx-auto border px-4 text-center">
          <span className="text-green-800  font-bold">
            দূর্গাপূজার বাকি আর মাত্র
          </span>
          <TimerCountdown />
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;

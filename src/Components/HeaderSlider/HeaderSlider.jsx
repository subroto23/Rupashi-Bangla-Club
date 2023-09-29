import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./HeaderSlider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeaderSlider = () => {
  return (
    <div className="mt-16">
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
        className="md:h-[80vh] h-[130px]"
      >
        {}
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/1413205702/photo/abstract-blue-neon-stadium-background-illuminated-with-lamps-on-ground-science-product-and.jpg?s=1024x1024&w=is&k=20&c=Kumc_hLrWRf9qeWDh9xAsZAxT58ndvwawmPB_NorRLA="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://icms-image.slatic.net/images/ims-web/5c3ea859-2ecd-4e85-bc10-68cfd2e56727.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;

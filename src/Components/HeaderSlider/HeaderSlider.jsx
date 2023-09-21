import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import HeaderSliderOverlay from "../HeaderSliderOverLay/HeaderSliderOverlay";
const HeaderSlider = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/b36d89e75c4e5f883241")
      .then((res) => res.json())
      .then((imageArr) => setImages(imageArr));
  }, []);
  return (
    <div className="">
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
        {images.map((imagesUrl, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative md:h-[80vh] h-44 mt-16 group">
              <div
                className="absolute h-full w-full object-container contrast-100 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${imagesUrl.image})` }}
                alt="SliderImage"
              >
                <div className="absolute inset-0 bg-primary opacity-40 invisible group-hover:visible"></div>
                {images.map((sliderArr, idx) => (
                  <HeaderSliderOverlay key={idx} sliderArr={sliderArr} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HeaderSlider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TimerCountdown from "../Carosol/Carosoal";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const HeaderSlider = () => {
  const [eventsData, setEventsData] = useState([]);
  const [eventsTitle, setEventsTitle] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/events")
      .then((res) => {
        const CurrentDay = new Date().getDate();
        const CurrentMonth = new Date().getMonth();
        const CurrentYear = new Date().getFullYear();
        const currentDate = `${CurrentYear}-${CurrentMonth + 1}-${CurrentDay}`;
        const EventsDate = res.data.payload.event.filter(
          (event) => event.date >= currentDate
        );
        EventsDate.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return dateA - dateB;
        });
        const date = EventsDate[0].date.split("-");
        const dateCount = `${date[1]}/${date[2]}/${date[0]}`;
        setEventsTitle(EventsDate[0].title);
        setEventsData(dateCount), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
            src="https://i.ibb.co/VTwSNpt/e587c6aa-76ec-4ff1-ae01-e9fd99c5568f.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full cover"
            src="https://i.ibb.co/pxBKpKT/bf6f5dea-77ab-4b6f-be88-f2005952d565.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      {loading ? (
        ""
      ) : (
        <div className="md:absolute md:right-4 md:bottom-2 z-30 ">
          <div className=" bg-white md:border-red-600 my-4 md:my-0  mx-auto border px-4 text-center">
            <span className="text-green-800  font-bold">
              {`${eventsTitle}`} বাকি আর মাত্র
            </span>
            <TimerCountdown eventsData={eventsData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSlider;

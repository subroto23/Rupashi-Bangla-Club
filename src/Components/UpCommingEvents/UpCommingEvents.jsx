import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const UpCommingEvents = () => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://rbc-server.vercel.app/events")
      .then((res) => {
        const currentDate = moment().format("YYYY-MM-DD");
        const EventsDateArrs = res?.data?.payload?.event;
        const filtedDate = EventsDateArrs.filter(
          (data) =>
            data.date.slice(0, 7) === currentDate.slice(0, 7) &&
            data.date > currentDate
        );
        setEvents(
          filtedDate.sort((a, b) => new Date(a.date) - new Date(b.date))
        );
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div data-aos="zoom-in-down" className="mb-4 md:my-16">
      {loading ? (
        <span></span>
      ) : (
        <>
          <div className="text-center md:mt-8 mt-10 md:text-3xl text-primary animate-jump-in animate-infinite animate-duration-[6000ms] animate-delay-2000 animate-ease-linear my-4">
            <strong className="">মাসের অনুষ্ঠানসমূহ</strong>
          </div>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper max-w-6xl mx-auto max-h-56 bg-yellow-100"
          >
            {events.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="card bg-primary text-primary-content rounded-sm">
                  <div className="card-body">
                    <div className="text-center">
                      <h2 className="card-title justify-center ">
                        {data.title}
                      </h2>
                      <p className="mt-2 animate-pulse animate-infinite animate-duration-[4000ms] animate-delay-[3000ms] animate-ease-linear">
                        {data.subtitle}
                      </p>
                    </div>
                    <p className="md:block linethrough hidden">
                      {data.about.slice(0, 250)}...
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn">{data.date}</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default UpCommingEvents;

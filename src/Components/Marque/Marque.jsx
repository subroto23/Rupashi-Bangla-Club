import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  const [titleLists, setTitleLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbc-server.vercel.app/title/heading")
      .then((res) => {
        const titleValue = res.data.payload.data;
        titleValue.shift();
        setTitleLists(titleValue.reverse(0, -1)), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios.get("https://rbc-server.vercel.app/events").then((res) => {
      const currentDate = moment().format("YYYY-MM-DD");
      const EventsDateArrs = res.data.payload.event;
      const filtedDate = EventsDateArrs.filter(
        (data) => data.date.slice(0, 10) === currentDate.slice(0, 10)
      );
      setEvents(filtedDate);
      setLoading(false);
    });
  }, []);
  return (
    <div className="fixed bottom-0 z-10 bg-white text-gray-400 w-full">
      {loading ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        <div className="py-1">
          <Marquee>
            {titleLists.map((data) => {
              return (
                <div key={data._id} className="mr-8">
                  <span className="text-red-600 mx-1 font-bold animate-ping">
                    <span className="loading loading-ring loading-sm"></span>
                  </span>
                  {data?.title}
                </div>
              );
            })}
            {events &&
              events.map((data) => {
                return (
                  <div key={data._id} className="mr-8">
                    <span className="text-red-600 mx-1 font-bold animate-ping">
                      *Live
                    </span>
                    আজ {data?.title}
                  </div>
                );
              })}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default Marque;

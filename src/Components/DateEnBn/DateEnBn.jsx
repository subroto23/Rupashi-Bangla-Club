import countItDown from "count-it-down";
import { useState } from "react";
const TimerCountdown = ({ eventsData }) => {
  const weddingDate = new Date(`${eventsData}`);
  const [countingValue, setCountingValue] = useState({});

  countItDown(weddingDate, (date) => setCountingValue(date));
  return (
    <div
      data-aos="flip-up"
      className="flex flex-col items-center justify-center "
    >
      <div className="grid md:grid-cols-4 grid-cols-4 md:gap-12 gap-10 text-primary dark:text-white">
        <div className="flex flex-col justify-center items-center">
          <span className="countdown font-mono animate-pulse">
            <span style={{ "--value": `${countingValue.days}` }}></span>
          </span>
          দিন
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="countdown font-mono animate-pulse">
            <span style={{ "--value": `${countingValue.hours}` }}></span>
          </span>
          ঘন্টা
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="countdown font-mono animate-pulse">
            <span style={{ "--value": `${countingValue.minutes}` }}></span>
          </span>
          মিনিট
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="countdown font-mono ">
            <span style={{ "--value": `${countingValue.seconds}` }}></span>
          </span>
          সেকেন্ড
        </div>
      </div>
    </div>
  );
};

export default TimerCountdown;

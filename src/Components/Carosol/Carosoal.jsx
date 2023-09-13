import countItDown from "count-it-down";
import { useState } from "react";
const Carosoal = () => {
  const weddingDate = new Date("10/20/2023");
  const [countingValue, setCountingValue] = useState({});

  countItDown(weddingDate, (date) => setCountingValue(date));
  return (
    <div className="pt-[75px]">
      <div
        className="hero md:min-h-screen min-h-[70vh] bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/navratri-durga-puja-festival-cultural-celebration-card-background_1035-24684.jpg?w=740&t=st=1694626310~exp=1694626910~hmac=c592d1341ad64d7b9c0f8e4d90b19df4d79fee420102b9238ded164a6f6719b0)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-gray-800"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-sm md:max-w-lg border-4 bg-red-600 opacity-80 p-4 md:px-2 md:py-6 rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm">
            <h1 className="mb-5 md:text-4xl font-bold leading-normal">
              দূর্গা পূজার আর মাত্র বাকিঃ-
            </h1>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 auto-cols-max">
                <div className="flex flex-col justify-center items-center">
                  <span className="countdown font-mono md:text-5xl">
                    <span style={{ "--value": `${countingValue.days}` }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="countdown font-mono md:text-5xl">
                    <span
                      style={{ "--value": `${countingValue.hours}` }}
                    ></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="countdown font-mono md:text-5xl">
                    <span
                      style={{ "--value": `${countingValue.minutes}` }}
                    ></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="countdown font-mono md:text-5xl">
                    <span
                      style={{ "--value": `${countingValue.seconds}` }}
                    ></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosoal;

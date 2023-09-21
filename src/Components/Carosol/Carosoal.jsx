import countItDown from "count-it-down";
import { useState } from "react";
const Carosoal = () => {
  const weddingDate = new Date("10/20/2023");
  const [countingValue, setCountingValue] = useState({});

  countItDown(weddingDate, (date) => setCountingValue(date));
  return (
    <div>
      {/* <div className="blur-[150px] md:h-16 h-16 to-purple-400 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 "></div> */}
      <div className="container mx-auto">
        <div className="flex flex-col  items-center md:py-8 pt-1 justify-center my-12">
          <h1 className="text-gray-900 dark:text-white font-bold text-3xl md:text-6xl xl:text-7xl">
            দূর্গা পূজার বাকি
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-8 md:my-8 my-4 text-primary dark:text-white">
            <div className="flex flex-col justify-center items-center">
              <span className="countdown font-mono ">
                <span
                  className="text-5xl md:text-6xl xl:text-7xl"
                  style={{ "--value": `${countingValue.days}` }}
                ></span>
              </span>
              দিন
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="countdown font-mono ">
                <span
                  className="text-5xl md:text-6xl xl:text-7xl"
                  style={{ "--value": `${countingValue.hours}` }}
                ></span>
              </span>
              ঘন্টা
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="countdown font-mono ">
                <span
                  className="text-5xl md:text-6xl xl:text-7xl"
                  style={{ "--value": `${countingValue.minutes}` }}
                ></span>
              </span>
              মিনিট
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="countdown font-mono ">
                <span
                  className="text-5xl md:text-6xl xl:text-7xl"
                  style={{ "--value": `${countingValue.seconds}` }}
                ></span>
              </span>
              সেকেন্ড
            </div>
          </div>
          <div className="flex flex-col items-center w-4/5 text-center">
            <p className="leading-10 mt-8 text-gray-700 dark:text-gray-300 text-xl md:text-center text-justify">
              সাধারণত আশ্বিন মাসের শুক্ল পক্ষের ষষ্ঠ থেকে দশম দিন পর্যন্ত
              শারদীয়া দুর্গাপূজা অনুষ্ঠিত হয়। এই পাঁচটি দিন যথাক্রমে
              দুর্গাষষ্ঠী, দুর্গাসপ্তমী, মহাষ্টমী, মহানবমী ও বিজয়াদশমী নামে
              পরিচিত।
            </p>
            <div className="flex md:gap-12 my-8 gap-4">
              <button className="text-white bg-primary md:px-10 px-6 py-3 rounded-full hover:bg-indigo-900 hover:transition duration-300 font-semibold">
                আয়োজন
              </button>
              <button className="md:px px-6  py-3 rounded-full hover:transition hover:duration-300 bg-purple-100 text-black font-semibold hover:bg-primary hover:text-white">
                বিস্তারিত
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosoal;

import { useEffect, useState } from "react";
import HeroBigNews from "./HeroBigNews/HeroBigNews";

const TopNews = () => {
  const [newsArr, setNewsArr] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/9e9fcadf9f4c38ad6d38")
      .then((res) => res.json())
      .then((data) => setNewsArr(data.reverse()));
  }, []);
  return (
    <div className="md:my-24 my-8 md:mx-auto mx-2 container">
      <div className=" mt-8 mb-16 text-center">
        <h1 className="text-4xl text-primary font-extrabold">আমাদের সংবাদ</h1>
        <p className="text-xl  font-bolder my-2 font-bold ml-6">
          সংবাদ পড়ুন,সংবাদ দিন
        </p>
      </div>
      {newsArr.length > 0 && <HeroBigNews newsArr={newsArr} />}
    </div>
  );
};

export default TopNews;

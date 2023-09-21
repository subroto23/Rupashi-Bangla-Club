import { useEffect, useState } from "react";
import HeroBigNews from "./HeroBigNews/HeroBigNews";

const TopNews = () => {
  const [newsArr, setNewsArr] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/07b1fa8c1567c93fd234")
      .then((res) => res.json())
      .then((data) => setNewsArr(data.reverse()));
  }, []);
  return (
    <div className="md:my-24 my-2 md:mx-auto container">
      <div className="mt-8 mb-16 text-center">
        <h1 className="text-4xl text-primary font-extrabold">আমাদের সংবাদ</h1>
        <p className="text-xl  font-bolder my-2 font-bold ml-6">
          আমাদের গ্রামের ঘটনা
        </p>
      </div>
      {newsArr.length > 0 && <HeroBigNews newsArr={newsArr} />}
    </div>
  );
};

export default TopNews;

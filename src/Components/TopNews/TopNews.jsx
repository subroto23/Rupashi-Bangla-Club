import { useEffect, useState } from "react";
import HeroBigNews from "./HeroBigNews/HeroBigNews";
import axios from "axios";

const TopNews = () => {
  const [newsArr, setNewsArr] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/api/news/view/")
      .then((res) => {
        setNewsArr(res.data.payload.allNews.reverse()), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(newsArr);
  return (
    <div className="md:my-24 my-2 md:mx-auto container">
      <div className="mt-8 mb-16 text-center">
        <h1 className="text-4xl text-primary font-extrabold">আমাদের সংবাদ</h1>
        <p className="text-xl  font-bolder my-2 font-bold ml-6">
          আমাদের গ্রামের ঘটনা
        </p>
      </div>
      {newsArr.length > 0 && (
        <HeroBigNews newsArr={newsArr} loading={loading} />
      )}
    </div>
  );
};

export default TopNews;

import { useEffect, useState } from "react";
import HeroBigNews from "./HeroBigNews/HeroBigNews";
import axios from "axios";

const TopNews = () => {
  const [newsArrs, setnewsArrs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/api/news/view/")
      .then((res) => {
        const newsArrays = res.data.payload.allNews;
        setnewsArrs(newsArrays.slice(0, 6)), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-6xl mx-auto md:my-16">
      {loading ? (
        ""
      ) : (
        <h1
          data-aos="zoom-in"
          className="text-xl mb-8 text-primary font-extrabold md:block hidden"
        >
          সংবাদ পড়ুন
        </h1>
      )}
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        {loading
          ? // <span className="loading loading-spinner text-warning"></span>
            ""
          : newsArrs.map((newsValue) => {
              return (
                <HeroBigNews
                  key={newsValue._id}
                  newsValue={newsValue}
                  loading={loading}
                />
              );
            })}
      </div>
    </div>
  );
};

export default TopNews;

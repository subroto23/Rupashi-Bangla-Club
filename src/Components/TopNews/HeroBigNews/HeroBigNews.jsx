import { useEffect, useState } from "react";
import BoxNews from "../BoxNews/BoxNews";
import { Link, NavLink } from "react-router-dom";
import { Buffer } from "buffer";

const HeroBigNews = ({ newsArr, loading }) => {
  const [newsDetails, setNewsDetails] = useState("");
  const [image, setImage] = useState([]);
  useEffect(() => {
    if (newsArr[0].details.length > 40) {
      setNewsDetails(newsArr[0].details.slice(0, 80));
      setImage(`${Buffer.from(newsArr[0].image).toString("ascii")} `);
    }
  }, []);
  return (
    <>
      {loading ? (
        <span>Loading....</span>
      ) : (
        <div className="grid md:grid-cols-6 grid-cols-1 gap-4 rounded-3xl">
          <div className="relative md:col-span-3 h-[556px] bg-blend-overlay block">
            <NavLink to={`/news/views/${newsArr[0]._id}`}>
              <div className="absolute h-full w-full bg-cover hover:brightness-150 hover:text-primary hover:contrast-100">
                <div className="relative">
                  <img
                    className="relative min-h-[200px]"
                    src={`data:image/jpg;base64,${image}`}
                    alt=""
                  />
                  <div className="bg-black h-full">
                    <div className="absolute bottom-0 md:px-8 px-4 space-y-2 bg-black w-full">
                      <div className="absolute bottom-4">
                        <h1 className="md:text-5xl text-yellow-600 text-xl font-bold hover:text-primary">
                          {newsArr[0].title}
                        </h1>
                        <p className="md:text-2xl text-lg text-justify text-white">
                          {newsDetails}...{" "}
                          <Link
                            to="/news/views/:id"
                            className="text-yellow-300 font-extrabold"
                          >
                            বিস্তারিত পড়ুন
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="grid md:col-span-3 col-span-1 gap-4 relative w-full ">
            <BoxNews newsArr={newsArr} />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBigNews;

import { Link } from "react-router-dom";
import { Buffer } from "buffer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const AllNewsViews = () => {
  const [loaders, setLoaders] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://rbcwebsite.onrender.com/api/news/view/").then((res) => {
      const loderDatas = res.data.payload.allNews;
      setLoaders(loderDatas.reverse()), setLoading(false);
    });
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-lg text-orange-600 animate-pulse text-center">
        সংবাদ পড়ুন
      </h1>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
            {loaders.map((news) => {
              return (
                <div
                  key={news._id}
                  className="flex flex-col  border-4 gap-8 justify-center items-center bg-gray-100"
                >
                  <Link to={`/news/views/${news._id}`}>
                    <div className="bg-white hover:bg-blue-100 rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                      <img
                        src={`data:image/jpg;base64,${Buffer.from(
                          news?.image
                        ).toString("ascii")}`}
                        alt=""
                        className="w-full h-64 object-cover hover:rounded-xl"
                      />
                      <div className="p-6">
                        <h2 className="md:text-2xl text-lg font-bold text-gray-800 mb-2">
                          {news?.title}
                        </h2>
                        <p className="text-gray-700 leading-tight mb-4">
                          {news.details.length > 60 ? (
                            <>
                              {news.details.slice(0, 107)}{" "}
                              <span className="animate-bounce text-primary">
                                ...
                              </span>
                            </>
                          ) : (
                            news?.details
                          )}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-gray-800 font-semibold">
                              <Link
                                to={`/news/views/${news._id}`}
                                className="text-red-600"
                              >
                                বিস্তারিত পড়ুন
                              </Link>
                            </span>
                          </div>
                          <span className="text-gray-600">
                            {news?.date.slice(0, 10)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AllNewsViews;

import { Link } from "react-router-dom";
// import { Buffer } from "buffer";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
const AllNewsViews = () => {
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const { isPending: loading, data: loaders } = useQuery({
    queryKey: ["allNews"],
    queryFn: async () => {
      const resData = await axios
        .get(`https://rbc-server.vercel.app/api/news/view/?page=${page}`)
        .then((res) => {
          const ArraysData = res?.data?.payload?.allNews;
          setPagination(res?.data?.payload);
          return ArraysData;
        });
      return resData;
    },
  });
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-lg my-6 text-orange-600 animate-pulse text-center">
        সংবাদ পড়ুন
      </h1>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
            {loaders?.map((news) => {
              return (
                <div
                  data-aos="flip-up"
                  key={news._id}
                  className="border  gap-8"
                >
                  <Link to={`/news/views/${news._id}`}>
                    <div className="h-full hover:bg-blue-100 rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                      <img
                        src={news.image}
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
                              {news?.details?.slice(0, 107)}{" "}
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
      <div className="text-center mt-8 ">
        <button
          disabled={page <= 1}
          className="btn btn-gost bg-green-600 hover:bg-red-500 text-white mr-2"
          onClick={() => setPage(pagination.currentPage - 1)}
        >
          পূর্বের পেজ
        </button>
        <span>
          {pagination.currentPage} / {pagination.totalPages}
        </span>
        <button
          disabled={page >= pagination.totalPages}
          className="btn btn-gost bg-green-600 hover:bg-red-500 text-white ml-2"
          onClick={() => setPage(pagination.currentPage + 1)}
        >
          আরো দেখুন
        </button>
      </div>
    </div>
  );
};

export default AllNewsViews;

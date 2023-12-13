import HeroBigNews from "./HeroBigNews/HeroBigNews";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TopNews = () => {
  const { isPending: loading, data: newsArrs } = useQuery({
    queryKey: ["newArray"],
    queryFn: async () => {
      const resData = await axios
        .get("https://rbc-server.vercel.app/api/news/view")
        .then((res) => {
          const newsArrays = res?.data?.payload?.allNews;
          return newsArrays.slice(0, 6);
        });
      return resData;
    },
  });
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
        {loading ? (
          <span className="loading loading-spinner text-warning"></span>
        ) : (
          newsArrs?.map((newsValue) => {
            return (
              <HeroBigNews
                key={newsValue._id}
                newsValue={newsValue}
                loading={loading}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TopNews;

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Buffer } from "buffer";

const HeroBigNews = ({ newsValue }) => {
  const [newsDetails, setNewsDetails] = useState("");
  const [image, setImage] = useState([]);
  useEffect(() => {
    if (newsValue.details.length > 40) {
      setNewsDetails(newsValue.details.slice(0, 50));
      setImage(`${Buffer.from(newsValue.image).toString("ascii")} `);
    }
  }, []);
  return (
    <div className="relative bg-blend-overlay block">
      <NavLink to={`/news/views/${newsValue._id}`}>
        <div className="hover:brightness-150 hover:text-primary hover:contrast-100">
          <div className="relative ">
            <img
              className="relative brightness-50 w-full h-[250px]"
              src={`data:image/jpg;base64,${image}`}
              alt=""
            />
            <div className="bg-black h-full">
              <div className="absolute bottom-0 md:px-8 px-4 space-y-2 bg-black w-full">
                <div className="absolute bottom-4 pr-2">
                  <h1 className="md:text-5xl text-yellow-600 text-xl font-bold hover:text-primary">
                    {newsValue.title.slice(0, 35)}...
                  </h1>
                  <p className="md:text-2xl text-lg text-justify text-white">
                    {newsDetails}...{" "}
                    <Link
                      to={`/news/views/${newsValue._id}`}
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
  );
};

export default HeroBigNews;

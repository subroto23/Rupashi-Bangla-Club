import BoxNews from "../BoxNews/BoxNews";
import { NavLink } from "react-router-dom";
const HeroBigNews = ({ newsArr }) => {
  return (
    <div className="grid md:grid-cols-6 grid-cols-1 gap-4 rounded-3xl">
      <div className="relative md:col-span-3 h-[556px] bg-blend-overlay block">
        <NavLink to={`/news/views/${newsArr[0].id - 1}`}>
          <div
            className="absolute h-full w-full bg-cover hover:brightness-150 hover:text-primary hover:contrast-100"
            style={{
              backgroundImage: `url("${newsArr[0].link}")`,
            }}
          >
            <div className="bg-black opacity-60 h-full">
              <div className="absolute bottom-8 px-8 space-y-2">
                <h1 className="md:text-5xl text-xl font-bold text-white hover:text-primary">
                  {newsArr[0].title}
                </h1>
                <p className="md:text-2xl text-lg text-justify text-white">
                  {newsArr[0].description}
                </p>
                <p className="md:text-2xl font-bold text-xl text-justify text-pink-800 ">
                  TagName
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="grid md:col-span-3 col-span-1 gap-4 relative w-full ">
        <BoxNews newsArr={newsArr} />
      </div>
    </div>
  );
};

export default HeroBigNews;

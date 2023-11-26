import { Link, NavLink } from "react-router-dom";
// import { Buffer } from "buffer";

const HeroBigNews = ({ newsValue }) => {
  return (
    <div data-aos="flip-left" className="relative bg-blend-overlay block">
      <NavLink to={`/news/views/${newsValue._id}`}>
        <div className="hover:brightness-150 hover:text-primary hover:contrast-100">
          <div className="relative ">
            <img
              className="w-full h-64 object-cover hover:rounded-xl"
              // src={`data:image/jpg;base64,${image}`}
              src={newsValue.image}
              alt=""
            />
            <div className="bg-black h-full">
              <div className="md:px-8 space-y-2 bg-black">
                <div className="absolute bottom-0 left-0 bg-primary w-full px-4 text-left">
                  <div className="-mt-8">
                    <h1 className="md:text-5xl text-yellow-500 text-xl font-bold hover:text-primary">
                      {newsValue?.title?.slice(0, 30)}...
                    </h1>
                    <p className="md:text-2xl text-lg  text-white  text-center pb-2">
                      {/* {newsDetails}...{" "} */}
                      <Link
                        to={`/news/views/${newsValue._id}`}
                        className="font-extrabold"
                      >
                        বিস্তারিত পড়ুন
                      </Link>
                    </p>
                  </div>
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

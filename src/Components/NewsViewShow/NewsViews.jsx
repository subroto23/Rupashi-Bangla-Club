import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
import { Buffer } from "buffer";
import { Outlet, useLoaderData } from "react-router-dom";
const NewsViews = () => {
  const newsData = useLoaderData();
  const { createdBy, title, date, details, image } =
    newsData.payload.newsDetails;
  const DateTime = date.slice(0, 10);
  const images = Buffer.from(image).toString("ascii");
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="pt-20 max-w-6xl pb-12 container mx-auto px-4 text-justify">
        <h1 className="text-primary underline mt-6 mb-2 md:text-3xl text-lg">
          খবর
        </h1>
        <p className="text-xs text-gray-400">তারিখঃ {DateTime}</p>
        <small className="text-sm text-gray-400">প্রতিবেদকঃ {createdBy}</small>
        <h1 className="md:text-2xl text-lg mb-8">{title}</h1>
        <figure className="flex flex-col items-center">
          <img
            className="rounded-md"
            src={`data:image/jpg;base64,${images}`}
            alt=""
          />
          <figcaption className="text-xs text-center mb-2 mt-3">
            ছবি তুলেছেনঃ {createdBy}
          </figcaption>
        </figure>
        <article>
          <p>{details}</p>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NewsViews;

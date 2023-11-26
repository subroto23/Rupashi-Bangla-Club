import { Helmet } from "react-helmet";
import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
// import { Buffer } from "buffer";
import { Outlet, useLoaderData } from "react-router-dom";
const NewsViews = () => {
  const newsData = useLoaderData();
  const { createdBy, title, date, details, image } =
    newsData.payload.newsDetails;
  const DateTime = date.slice(0, 10);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={details} />
        <meta property="og:image" content={`${image}`} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta property=" og:type" content="article" />
      </Helmet>
      <div
        data-aos="flip-up"
        className="max-w-6xl pb-12 container mx-auto px-4 text-justify"
      >
        <h1 className="text-primary underline mt-6 mb-2 md:text-3xl text-lg">
          খবর
        </h1>
        <p className="text-xs text-gray-400">তারিখঃ {DateTime}</p>
        <small className="text-sm text-gray-400">প্রতিবেদকঃ {createdBy}</small>
        <h1 className="md:text-2xl text-lg mb-8">{title}</h1>
        <figure className="flex flex-col items-center">
          <img className="rounded-md object-cover" src={image} alt="" />
          <figcaption className="text-xs text-center mb-2 mt-3">
            ছবি সংগ্রহ করেছেনঃ {createdBy}
          </figcaption>
        </figure>
        <div
          dangerouslySetInnerHTML={{ __html: details }}
          className="my-6 text-3xl leading-normal"
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsViews;

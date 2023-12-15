import { Helmet } from "react-helmet-async";
import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
const NewsViews = () => {
  const newsData = useLoaderData();
  const { createdBy, title, date, details, image } =
    newsData.payload.newsDetails;
  const pageURL = window.location.href;
  const DateTime = date.slice(0, 10);

  useEffect(() => {
    // Create meta elements
    const titleMeta = document.createElement("meta");
    titleMeta.setAttribute("property", "og:title");
    titleMeta.content = title;

    const imageMeta = document.createElement("meta");
    imageMeta.setAttribute("property", "og:image");
    imageMeta.content = details;

    const descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("property", "og:description");
    descriptionMeta.content = image;

    // Append meta elements to the head
    document.head.appendChild(titleMeta);
    document.head.appendChild(imageMeta);
    document.head.appendChild(descriptionMeta);

    // Clean up the added meta tags on component unmount
    return () => {
      document.head.removeChild(titleMeta);
      document.head.removeChild(imageMeta);
      document.head.removeChild(descriptionMeta);
    };
  }, [title, details, image]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Helmet>
        <title>{title}</title>
        {/* <meta name="description" content={details} /> */}
        {/* <meta property="og:title" content={title} data-react-helmet="true" />
        <meta
          property="og:description"
          content={details}
          data-react-helmet="true"
        />
        <meta name="description" content={details} />
        <link rel="canonical" href={pageURL} />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ="
          data-react-helmet="true"
        />
        <meta
          property="og:image:secure_url"
          content="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ="
          data-react-helmet="true"
        /> */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content={pageURL} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div
        data-aos="flip-up"
        className="max-w-6xl pb-12 mx-auto px-4  text-justify"
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

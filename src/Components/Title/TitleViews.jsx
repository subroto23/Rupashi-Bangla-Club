import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const TitleViews = () => {
  const [titleLists, setTitleLists] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbc-server.vercel.app/title/heading")
      .then((res) => {
        const titleValue = res?.data?.payload?.data;
        setTitleLists(titleValue), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        <caption className="my-2 font-bold">
          {titleLists[0]?.title}{" "}
          <span className="text-red-600 ml-2 animate-pulse">Live*</span>
        </caption>
      )}
    </>
  );
};

export default TitleViews;

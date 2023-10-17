import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  const [titleLists, setTitleLists] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/title/heading")
      .then((res) => {
        const titleValue = res.data.payload.data;
        setTitleLists(titleValue.reverse(0, -1)), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="fixed bottom-0 z-10 bg-white text-gray-400 w-full">
      {loading ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        <div className="py-1">
          <Marquee>
            {titleLists.map((data) => {
              return (
                <>
                  <div className="mr-8">
                    <span className="text-red-600 mx-1 font-bold animate-ping">
                      <span className="loading loading-ring loading-sm"></span>
                    </span>
                    {data?.title}
                  </div>
                </>
              );
            })}{" "}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default Marque;

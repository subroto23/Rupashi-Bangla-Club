import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TitleUpdate = () => {
  const [titleLists, setTitleLists] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/title/heading")
      .then((res) => {
        const cadaValue = res.data.payload.data;
        setTitleLists(cadaValue), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      {loading ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        titleLists.map((list) => {
          return (
            <div key={list._id} className="flex justify-center items-center">
              <p>{list.title}</p>
              <Link to={`/admin/title/title-update/${list._id}`}>
                <button className="btn btn-gost text-primary">Edit</button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TitleUpdate;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewsUpdate = () => {
  const [newsArrs, setnewsArrs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/api/news/view/")
      .then((res) => {
        const newsArrays = res.data.payload.allNews;
        setnewsArrs(newsArrays.slice(0, 6)), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "আপনি কিন্তু একবার ডিলেট করে ফেললে আর ফিরে পাবেন না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা! আমি নিশ্চিত",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://rbcwebsite.onrender.com/api/news/${id}`)
          .then(() => {
            const filter = newsArrs.filter((data) => data._id !== id);
            Swal.fire("সফলভাবে ডিলেট করা হয়েছে");
            setnewsArrs(filter);
          });
      }
    });
  };
  return (
    <div data-aos="flip-up" className="max-w-6xl mx-auto">
      <h1 className="text-lg my-6 text-orange-600 animate-pulse text-center">
        সংবাদ আপডেট করুন
      </h1>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          {newsArrs?.map((news) => {
            return (
              <div key={news._id} className="border">
                <div className="flex justify-between items-center">
                  <p className="w-2/4 py-2">{news.title}</p>
                  <Link to={`/admin/title/update/${news._id}`}>
                    <button className="text-primary w-1/4">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(news._id)}
                    className="text-red-600 w-1/4"
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default NewsUpdate;

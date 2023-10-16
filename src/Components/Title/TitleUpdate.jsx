import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
        axios.delete(`https://rbcwebsite.onrender.com/title/heading/${id}`);
        Swal.fire("ডিলেটেট!", "ডিলেট করা হয়েছে পেজটি রিলোড দিন", "সফলভাবে");
      }
    });
  };
  return (
    <div className="flex mt-2 flex-col max-w-6xl mx-auto">
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
              <Link onClick={() => handleDelete(list._id)}>
                <button className="btn btn-gost text-red-600 font-bold">
                  X
                </button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TitleUpdate;

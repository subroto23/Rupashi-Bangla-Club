import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardUpdate = () => {
  const [cadaLists, setCadaLists] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbc-server.vercel.app/cada/details")
      .then((res) => {
        const cadaValue = res.data.payload.data;
        setCadaLists(cadaValue), setLoading(false);
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
        axios.delete(`https://rbc-server.vercel.app/cada/details/${id}`);
        Swal.fire("ডিলেটেট!", "ডিলেট করা হয়েছে পেজটি রিলোড দিন", "সফলভাবে");
      }
    });
  };
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <table className="text-left text-sm font-light">
        <caption className="my-2">চাঁদা আপডেট করুন</caption>
        <thead className="border-b bg-yellow-200 font-medium dark:border-neutral-500 dark:bg-neutral-600">
          <tr className="text-center">
            <th scope="col" className="px-2 py-4 border">
              নাম
            </th>
            <th scope="col" className="px-2 py-4 border">
              পরিশোধ
            </th>
            <th scope="col" className="px-2 py-4 border">
              আপডেট
            </th>
            <th scope="col" className="px-2 py-4 border">
              ডিলিট
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <span className="loading loading-spinner text-success"></span>
          ) : (
            cadaLists.map((list) => {
              return (
                <tr
                  key={list._id}
                  className="border odd:bg-white text-center bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                >
                  <td className="whitespace-nowrap py-4 border">{list.name}</td>
                  <td className="whitespace-nowrap py-4 border">
                    {list.paidTk}
                  </td>
                  <td className="whitespace-nowrap py-4 border font-medium">
                    <Link to={`/admin/cada-update-form/${list._id}`}>
                      <button className="btn btn-gost text-primary">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 border font-medium">
                    <button
                      onClick={() => handleDelete(list._id)}
                      className="btn btn-gost text-red-600"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CardUpdate;

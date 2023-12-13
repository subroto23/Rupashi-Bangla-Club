import axios from "axios";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseDueValue from "../../MiddleWare/UseDueValue";
const AdminDueView = () => {
  const [dueViewsLoader, isPending, refetch] = UseDueValue();
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
          .delete(`https://rbc-server.vercel.app/due/details/${id}`)
          .then(() => {
            Swal.fire("ডিলেটেট!", "ডিলেট করা হয়েছে পেজটি রিলোড দিন", "সফলভাবে");
            refetch();
          });
      }
    });
  };
  if (isPending) {
    return <span className="loading loading-spinner text-accent"></span>;
  }
  return (
    <div data-aos="flip-up" className="mt-4 max-w-6xl mx-auto">
      <table className="text-xs w-full text-center" border="2">
        <caption className="mb-2 font-bold ">বকেয়ার তালিকা</caption>
        <thead>
          <tr className="bg-yellow-500 font-bold border">
            <th className="p-2 border">নাম</th>
            <th className="p-2 border">পরিশোধ</th>
            <th className="p-2 border">বকেয়া</th>
            <th className="p-2 border">আপডেট</th>
            <th className="p-2 border">ডিলেট</th>
          </tr>
        </thead>
        <tbody>
          {dueViewsLoader?.map((due) => (
            <tr key={due._id} className="even:bg-gray-200">
              <td className="w-1/8 p-2 border">{due.name}</td>
              {/* <td className="w-2/8 p-2 border">{due.source}</td> */}
              {/* <td className="w-1/8 p-2 border">{due.fixedTk}</td> */}
              <td className="w-1/8 p-2 border">{due.paidTk}</td>
              <td className="w-1/8 p-2 border">{due.due}</td>
              <td className="w-1/8 p-2 border">
                <Link
                  to={`/admin/due/update/${due._id}`}
                  className="text-primary"
                >
                  Edit
                </Link>
              </td>
              <td className="w-1/8 p-2  border">
                <button
                  onClick={() => handleDelete(due._id)}
                  className="btn btn-gost text-red-600"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDueView;

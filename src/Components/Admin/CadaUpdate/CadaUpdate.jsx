import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardUpdate = () => {
  const [cadaLists, setCadaLists] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rbcwebsite.onrender.com/cada/details")
      .then((res) => {
        const cadaValue = res.data.payload.data;
        setCadaLists(cadaValue), setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <table className="max-w-32 text-left text-sm font-light">
        <thead className="border-b bg-yellow-200 font-medium dark:border-neutral-500 dark:bg-neutral-600">
          <tr className="text-center">
            <th scope="col" className="px-2 py-4">
              নাম
            </th>
            <th scope="col" className="px-2 py-4">
              ধার্যকৃত
            </th>
            <th scope="col" className="px-2 py-4">
              পরিশোধ
            </th>
            <th scope="col" className="px-2 py-4">
              Edit
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
                  className="border-b odd:bg-white text-center bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                >
                  <td className="whitespace-nowrap px-2 py-4">{list.name}</td>
                  <td className="whitespace-nowrap px-2 py-4">
                    {list.fixedTk}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4">{list.paidTk}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <Link to={`/admin/cada-update-form/${list._id}`}>
                      <button className="btn btn-gost text-primary">
                        Edit
                      </button>
                    </Link>
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

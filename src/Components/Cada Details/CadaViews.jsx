import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TitleViews from "../Title/TitleViews";

const CadaViews = () => {
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
    <div className="flex flex-col mt-16 max-w-6xl mx-auto">
      <table className="max-w-32 text-left text-sm font-light">
        <TitleViews />
        <thead className="border-b bg-yellow-600 font-medium dark:border-neutral-500 dark:bg-neutral-600">
          <tr className="text-center">
            <th scope="col" className="px-2 py-4 border">
              #
            </th>
            <th scope="col" className="px-2 py-4 border">
              নাম
            </th>
            <th scope="col" className="px-2 py-4 border">
              ধার্যকৃত
            </th>
            <th scope="col" className="px-2 py-4 border">
              পরিশোধ
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <span className="loading loading-spinner text-success"></span>
          ) : (
            cadaLists.map((list, idx) => {
              return (
                <tr
                  key={list._id}
                  className="border odd:bg-white text-center bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                >
                  <td className="whitespace-nowrap px-6 py-4 border font-medium">
                    {idx + 1}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 border">
                    {list.name}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 border">
                    {list.fixedTk}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 border">
                    {list.paidTk}
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

export default CadaViews;

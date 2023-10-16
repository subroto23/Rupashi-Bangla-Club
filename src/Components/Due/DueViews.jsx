import { useLoaderData } from "react-router-dom";

const DueViews = () => {
  const dueViewsLoader = useLoaderData();
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <table className="text-xs w-full text-center" border="2">
        <caption className="mb-2 font-bold ">বকেয়ার তালিকা</caption>
        <thead>
          <tr className="bg-yellow-500 font-bold border">
            <th className="p-2 border">নাম</th>
            <th className="p-2 border">বকেয়ার ধরন</th>
            <th className="p-2 border">ধার্যকৃত</th>
            <th className="p-2 border">পরিশোধ</th>
            <th className="p-2 border">বকেয়া</th>
          </tr>
        </thead>
        <tbody>
          {dueViewsLoader.payload.data.map((due) => (
            <tr key={due._id} className="even:bg-gray-200">
              <td className="w-1/6 p-2 border">{due.name}</td>
              <td className="w-2/6 p-2 border">{due.source}</td>
              <td className="w-1/6 p-2 border font-bold text-green-600">
                {due.fixedTk}
              </td>
              <td className="w-1/6 p-2 border">{due.paidTk}</td>
              <td className="w-1/6 p-2 border text-red-600">{due.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DueViews;

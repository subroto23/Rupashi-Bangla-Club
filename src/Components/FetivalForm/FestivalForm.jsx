import axios from "axios";
import { useState } from "react";

const FestivalForm = () => {
  // const [image, setImage] = useState(null);
  const [eventData, setEventData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const subtitle = form.get("subTitle");
    const about = form.get("about");
    const date = form.get("date");
    const formValues = { title, subtitle, about, date };
    axios
      .post("https://rbcwebsite.onrender.com/events/create", formValues, {
        headers: {
          "Content-Type":
            'multipart/form-data; charset=utf-8; boundary="another cool boundary";',
        },
      })
      .then((res) => setEventData(res.data))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div data-aos="flip-up" className="max-w-7xl mx-auto">
      <div className="flex justify-center  items-center flex-col">
        <h1 className="text-xl mt-2 mb-4">উৎসবের ফর্ম </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border px-4">
            <div className="my-1">
              <label htmlFor="title">টাইটেল</label>
              <input
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="title"
                id=""
                placeholder="টাইটেল"
                required
              />
            </div>
            <div className="my-1">
              <label htmlFor="subtitle">সাব-টাইটেল</label>
              <input
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="subTitle"
                id=""
                placeholder="সাব-টাইটেল"
              />
            </div>
            <div className="my-1">
              <label htmlFor="about">উৎসবের বিবারণ</label>
              <textarea
                name="about"
                id=""
                cols="30"
                rows="10"
                placeholder="উৎসবের বিবারণ"
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <div className="my-1">
              <label htmlFor="date">উৎসবের তারিখ</label>
              <input
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="date"
                name="date"
                id=""
                placeholder="উৎসবের তারিখ"
                required
              />
            </div>
            {/* <div>
              <label htmlFor="image">উৎসব সম্পর্কিত ছবি</label>
              <input
                name="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div> */}
            <div className="my-1">
              <input
                className="btn btn-ghost text-white cursor-pointer hover:text-black bg-primary w-full"
                type="submit"
                value="সংযোজন করুন"
              />
            </div>
          </div>
        </form>
      </div>
      <p className="text-center text-green-700 font-semibold my-4">
        {eventData?.message}
      </p>
    </div>
  );
};

export default FestivalForm;

import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const NewsUpdateForm = () => {
  const loader = useLoaderData();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const details = form.get("details");
    const formValues = { title, details, image };
    setMessage("");
    if (title.length > 40) {
      setMessage("দয়া করে টাইটেল 40 অক্ষরের মধ্যে লিখুন");
      return;
    }
    axios
      .put(
        `https://rbcwebsite.onrender.com/api/news/update/${loader.payload.newsDetails._id}`,
        formValues,
        {
          headers: {
            "Content-Type":
              'multipart/form-data; charset=utf-8; boundary="another cool boundary";',
          },
        }
      )
      .then(() => {
        setMessage("নিউজটি সফলভাবে আপডেট করা হয়েছে");
        e.target.reset();
      })
      .catch(() => setMessage("দুঃখিত এই মূহুর্তে নিউজটি আপডেট করা সম্ভব নয়"));
  };

  return (
    <div data-aos="flip-up" className="max-w-7xl mx-auto bg-gray-100 py-4">
      <div className="flex justify-center  items-center flex-col">
        <h1 className="text-xl mt-2 mb-4">খবর আপডেট ফর্ম </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border px-4">
            <div className="my-1">
              <label htmlFor="title">খবরের টাইটেল</label>
              <input
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="title"
                defaultValue={loader.payload.newsDetails.title}
                placeholder="টাইটেল"
                required
              />
            </div>
            <div className="my-1">
              <label htmlFor="about">খবরের বিবারণ</label>
              <textarea
                name="details"
                defaultValue={loader.payload.newsDetails.details}
                cols="30"
                rows="10"
                required
                placeholder="বিবারণ লিখা শুরু করুন"
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <div>
              <label htmlFor="image">খবরের ছবি</label>
              <input
                name="image"
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {message && (
              <div className="my-4 text-center text-red-600">
                <span>{message && message}</span>
              </div>
            )}
            <div className="my-1">
              <input
                className="btn btn-ghost text-white cursor-pointer hover:text-black bg-primary w-full"
                type="submit"
                value="আপডেট করুন"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsUpdateForm;
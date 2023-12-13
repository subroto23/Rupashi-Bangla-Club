import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatedNews = () => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const image = form.get("image");
    const createdBy = user.name;
    const formValues = { title, value: details, createdBy, image };
    if (title.length > 60) {
      setMessage("দয়া করে টাইটেল 60 অক্ষরের মধ্যে লিখুন");
    }
    axios
      .post("https://rbc-server.vercel.app/api/news/create", formValues, {
        headers: {
          "Content-Type":
            'multipart/form-data; charset=utf-8; boundary="another cool boundary";',
        },
      })
      .then(() => {
        setMessage("নিউজটি সফলভাবে পাবলিশ করা হয়েছে");
        e.target.reset();
      })
      .catch(() => setMessage("দুঃখিত এই মূহুর্তে নিউজটি পাবলিশ করা সম্ভব নয়"));
  };
  return (
    <>
      {/* data-aos="flip-left" */}
      <div data-aos="flip-left" className="max-w-7xl mx-auto bg-gray-100 py-4">
        <div className="flex justify-center  items-center flex-col">
          <h1 className="text-xl mt-2 mb-4">খবর তৈরির ফর্ম </h1>
          <form onSubmit={handleSubmit} className="md:w-3/4 max-w-5xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border px-4">
              <div className="my-1">
                <label htmlFor="title">খবরের টাইটেল</label>
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
                <label htmlFor="about">খবরের বিবারণ</label>
                <ReactQuill
                  className="h-72 mb-12"
                  theme="snow"
                  value={details}
                  onChange={setDetails}
                />
              </div>
              <div>
                <label htmlFor="image">খবরের ছবি লিংক</label>
                <input
                  name="image"
                  type="text"
                  required
                  className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="https://www.i.hajhah.com"
                />
              </div>
              <span>
                ছবির লিংক{" "}
                <a
                  href="https://imgbb.com/"
                  target="blank"
                  className="text-red-600"
                >
                  এখান
                </a>
                <span className="px-2">থেকে তৈরি করুন</span>
              </span>

              {message && (
                <div className="my-4 text-center text-red-600">
                  <span>{message && message}</span>
                </div>
              )}
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
      </div>
    </>
  );
};

export default CreatedNews;

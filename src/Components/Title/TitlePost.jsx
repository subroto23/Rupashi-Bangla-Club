import axios from "axios";
import { useState } from "react";

const TaitelPost = () => {
  const [message, setMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const formValues = { title };
    axios
      .post("https://rbc-server.vercel.app/title/heading/create", formValues, {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => {
        setMessage("সফলভাবে সংযুক্ত হয়েছে"), e.target.reset();
      })
      .catch(() => setMessage("দুঃখিত সংযোগ করা যায় নি"));
  };
  return (
    <div className=" max-w-7xl mx-auto bg-gray-100 py-4">
      <div className="flex justify-center  items-center flex-col">
        <h1 className="text-xl mt-2 mb-4">টাইটেল তৈরির ফর্ম</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border px-4">
            <div className="my-1">
              <label htmlFor="name">টাইটেল তৈরি করুন</label>
              <input
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="title"
                id=""
                placeholder="টাইটেল লিখুন"
                required
              />
            </div>
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
      {message && (
        <p className="text-center text-green-700 font-semibold my-4">
          {message}
        </p>
      )}
    </div>
  );
};

export default TaitelPost;

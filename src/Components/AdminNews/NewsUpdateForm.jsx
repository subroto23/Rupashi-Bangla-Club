import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewsUpdateForm = () => {
  const loader = useLoaderData();
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState("");
  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    // const imageFile = { image: data.image[0] };
    // const res = await axios.post(
    //   `https://api.imgbb.com/1/upload?key=${
    //     import.meta.env.VITE_IMAGE_HOSTING_API_KEY
    //   }`,
    //   imageFile,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    const formValues = {
      title: data.title,
      details,
      // image: res?.data?.data?.display_url,
    };
    axios
      .put(
        `https://rbc-server.vercel.app/api/news/update/${loader?.payload?.newsDetails._id}`,
        formValues
      )
      .then(() => {
        Swal.fire("নিউজটি সফলভাবে আপডেট করা হয়েছে");
        setMessage("");
      })
      .catch(() => setMessage("দুঃখিত এই মূহুর্তে নিউজটি আপডেট করা সম্ভব নয়"));
  };

  return (
    <div data-aos="flip-up" className="max-w-7xl mx-auto bg-gray-100 py-4">
      <div className="flex justify-center  items-center flex-col">
        <h1 className="text-xl mt-2 mb-4">খবর আপডেট ফর্ম </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 max-w-5xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border px-4">
            <div className="my-1">
              <label htmlFor="title">খবরের টাইটেল</label>
              <input
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="title"
                {...register("title")}
                defaultValue={loader.payload.newsDetails.title}
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
                defaultValue={loader.payload.newsDetails.details}
              />
            </div>
            {/*  Image */}
            {/* <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="mealImage"
              >
                ছবি সংযোজন করুন
              </label>
              <input
                name="image"
                type="file"
                {...register("image")}
                className="block w-full file-input mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div> */}
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

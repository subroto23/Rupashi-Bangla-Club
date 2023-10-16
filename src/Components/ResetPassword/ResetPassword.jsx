import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext.config";

const ResetPassword = () => {
  const { handleResetPassword } = useContext(AuthContext);
  const [resetMessage, setResetMessage] = useState("");
  const handleSubmitResetBtn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await handleResetPassword(email)
      .then(() => {
        setResetMessage(
          `দয়া করে ${email} ই-মেইলটি চেক করুন।একটি রিসেট লিংক পাঠানো হয়েছে`
        );
      })
      .catch(() => {
        setResetMessage("আপনার ই-মেইলটি সঠিক নয়");
      });
  };
  return (
    <div className="max-w-lg border mx-auto mt-20 mb-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-xl my-4 text-green-600 font-bold">
        পাসওয়ার্ড রিসেট ফর্ম
      </h1>
      <form onSubmit={handleSubmitResetBtn} className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">ই-মেইল লিখুন</p>
            <input
              name="email"
              type="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="example@gmail.com"
              required
            />
          </label>
          <div className="text-center text-red-600 font-bold my-2">
            {resetMessage && <span>{resetMessage}</span>}
          </div>
          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-primary hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>

            <span>রিসেট পাসওয়ার্ড</span>
          </button>
          <p className="text-center">
            লগইন করতে
            <Link
              to="/login"
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              <span>এখানে ক্লিক করুন </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;

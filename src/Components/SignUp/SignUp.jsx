import { Link } from "react-router-dom";
import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const dateOfBirth = e.target.date.value;
    fetch("https://rbcwebsite.onrender.com/api/users/directuser", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        dateOfBirth,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center md:p-12 px-8 md:mt-16 mt-20">
        <div className="mx-auto w-full md:max-w-[500px] bg-white">
          <h3 className="text-center font-bold mb-8 border-b-4 pb-4">
            রেজিস্টেশন ফর্ম
          </h3>
          <form onSubmit={handleSignUp}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                সম্পূর্ন নাম লিখুন বাংলায়
              </label>
              <input
                type="text"
                name="name"
                placeholder="নাম লিখুন"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                ই-মেইল লিখুন
              </label>
              <input
                type="email"
                name="email"
                placeholder="ই-মেইল লিখুন"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                পাসওয়ার্ড লিখুন
              </label>
              <input
                type="password"
                name="password"
                placeholder="পাসওয়ার্ড"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                মোবাইল নাম্বার লিখুন
              </label>
              <input
                type="text"
                name="phone"
                placeholder="মোবাইল নাম্বার"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-bold text-[#07074D]">
                    জন্ম তারিখ
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2"></div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                আপনার ছবি সংযুক্ত করুন
              </label>
              <input
                type="file"
                name="file"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white  inline-block outline-none">
              <input type="submit" />
            </div>
          </form>
          <div className="text-center pt-6">
            <Link
              to="/login"
              className="inline-block text-sm text-primary align-baseline hover:text-blue-800"
              href="#"
            >
              পূর্বেই রেজিস্টেশন করে থাকলে{" "}
              <Link to="/login" className="text-red-600 font-extrabold pl-3">
                এখানে ক্লিক করুন
              </Link>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;

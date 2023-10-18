import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";
const SignUp = () => {
  const { handleRegistationFireBase, regiError } = useContext(AuthContext);
  const [errorRegistation, setErrorRegistation] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorRegistation("");
    const name = e.target.name.value;
    const fathername = e.target.fathername.value;
    const mothername = e.target.mothername.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const dateOfBirth = e.target.date.value;
    const image = e.target.fill.files[0];
    //
    if (password.length < 6) {
      setErrorRegistation("পাসওয়ার্ড সর্বনিম্ন ৬ অক্ষরের হতে হবে।");
      return;
    }
    if (image.size >= 2097152) {
      setErrorRegistation("আপনার ছবির সাইজ 2MB এর বেশি।");
      return;
    }
    //
    const registationValue = {
      name,
      fathername,
      mothername,
      dateOfBirth,
      email,
      password,
      phone,
      isBanned: false,
      isAdmin: false,
      isJurnalist: false,
      isclubMember: false,
      image,
    };
    //Firebase Registation
    await handleRegistationFireBase(registationValue);
  };
  return (
    <>
      <div
        data-aos="flip-left"
        className="flex items-center justify-center md:p-12"
      >
        <div className="mx-auto w-full md:max-w-[500px] bg-white">
          <h3 className="text-center font-bold mb-8 border-b-4 pb-4">
            রেজিস্টেশন ফর্ম
          </h3>
          <form onSubmit={handleSignUp} encType="multipart/form-data">
            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                সম্পূর্ন নাম লিখুন বাংলায় <sup className=" text-red-600">*</sup>
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
                পিতার নাম লিখুন বাংলায় <sup className=" text-red-600">*</sup>
              </label>
              <input
                type="text"
                name="fathername"
                placeholder="পিতার নাম"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-bold text-[#07074D]">
                মাতার নাম লিখুন বাংলায় <sup className=" text-red-600">*</sup>
              </label>
              <input
                type="text"
                name="mothername"
                placeholder="মাতার নাম"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
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
                required
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
                required
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
                    required
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
                name="fill"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="text-center text-red-600 font-bold my-2">
              {errorRegistation ||
                (regiError && <span>{errorRegistation || regiError}</span>)}
            </div>
            <div>
              <button className="hover:shadow-form hover:bg-gray-500 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white  inline-block outline-none">
                সাবমিট করুন
              </button>
            </div>
          </form>
          <div className="text-center pt-6">
            <Link
              to="/login"
              className="inline-block text-sm text-primary align-baseline hover:text-blue-800"
            >
              পূর্বেই রেজিস্টেশন করে থাকলে{" "}
              <Link to="/login" className="text-red-600 font-extrabold pl-3">
                এখানে ক্লিক করুন
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

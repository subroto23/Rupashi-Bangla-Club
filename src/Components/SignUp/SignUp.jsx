import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";

const SignUp = () => {
  const newUserContext = useContext(AuthContext);
  //
  const { hanldeCreateUser } = newUserContext;
  //
  const [image, setImageUpload] = useState(null);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const birthday = e.target.birthday.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    hanldeCreateUser({
      firstName,
      lastName,
      birthday,
      email,
      password,
      image,
    });
  };

  //
  return (
    <>
      <div className="flex justify-center items-center mt-20 max-w-7xl px-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10">
            <h1 className="text-3xl text-center my-4 font-semibold leading-7 text-gray-900">
              রেজিস্টেশন করুন
            </h1>
            <p className="mt-1 text-sm leading-6 text-red-800 text-justify bg-[#f9eff1] rounded-md py-4 px-2">
              <small>
                আপনি সরাসরি আপনার তথ্য দিয়ে রেজিঃস্টেশন করতে পারেন অথবা গুগোল
                কিংবা ফেসবুকের মাধ্যমে রেজিস্টেশন করতে পারেন।
              </small>
            </p>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <form onSubmit={handleSubmit}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    আপনার নামের প্রথম অংশ
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="নামর প্রথম অংশ বাংলায়"
                      className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    আপনার নামের শেষ অংশ
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="নামের শেষ অংশ বাংলায়"
                      className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    জন্মতারিখ প্রদান করুন
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="birthday"
                      placeholder="নামের শেষ অংশ বাংলায়"
                      className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ই-মেইল লিখুন
                  </label>
                  <div className="mt-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="ই-মেইল লিখুন"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    পাসওয়ার্ড লিখুন
                  </label>
                  <div className="mt-2">
                    <input
                      name="password"
                      type="password"
                      placeholder="পাসওয়ার্ড লিখুন"
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    আপনার ছবি প্রদান করুন
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            name="fileUpload"
                            className="w-full"
                            onChange={(e) => setImageUpload(e.target.files[0])}
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600 mt-3">
                        only PNG, JPG, jPEG up to 2MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <input
                      type="submit"
                      placeholder="Submit"
                      className="block w-full px-4 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-primary text-white"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

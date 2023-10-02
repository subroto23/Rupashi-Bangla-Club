import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";
import { addDoc, collection } from "firebase/firestore";
import { auth, storage } from "../../FirebaseAuth/Firebase.init";

const SignUp = () => {
  const newUserContext = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  //
  const { hanldeCreateUser, uploadImages } = newUserContext;

  //
  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const birthday = e.target.birthday.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    hanldeCreateUser({ email, password })
      .then(async (result) => {
        await uploadImages(photo, auth.currentUser);

        try {
          await addDoc(collection(storage, "users"), {
            firstName,
            lastName,
            birthday,
            email,
            phone,
            userId: `${result.user.uid}`,
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => console.log(err));
    e.target.reset();
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
                <div className="sm:col-span-3">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    মোবাইল নাম্বার লিখুন
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Phone"
                      placeholder="0151409155"
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

                <div className="sm:col-span-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    আপনার ছবি সংযুক্ত করুন
                  </label>
                  <div className="mt-2">
                    <input
                      name="imgLink"
                      type="file"
                      onChange={handleFileUpload}
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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

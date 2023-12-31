import { Link, NavLink, useNavigate } from "react-router-dom";
import GoogleLogIn from "../GoogleLogIn/GoogleLogIn";
import { TEInput, TERipple } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { FaGoogle } from "react-icons/fa";
import FbLogin from "../FbLoggin/FbLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";

const LogInForm = () => {
  const { LogInFirebaseUser } = useContext(AuthContext);
  const location = useNavigate();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      setError("আপনার পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের ছিলো");
    }

    await LogInFirebaseUser(email, password)
      .then(() => {
        setError("সফলভাবে লগইন হয়েছে");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => setError(err.message));
    //
  };
  return (
    <div data-aos="flip-down">
      <section className="mt-[70px]">
        <div className="container h-full px-6 md:py-24 py-3">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:block hidden md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=826&t=st=1695958681~exp=1695959281~hmac=7785fd441ff423098e0b6bc51c1ccff8de98b8a63541402cb4389e9eae4f2d00"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleLoginSubmit}>
                {/* <!-- Email input --> */}
                <TEInput
                  type="email"
                  name="email"
                  label="ই-মেইল লিখুন"
                  size="lg"
                  className="mb-6"
                ></TEInput>

                {/* <!--Password input--> */}
                <TEInput
                  type="password"
                  label="পাসওয়ার্ড লিখুন"
                  name="password"
                  className="mb-6"
                  size="lg"
                ></TEInput>

                {/* <!-- Remember me checkbox --> */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck3"
                      defaultChecked
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck3"
                    >
                      পাসওয়ার্ড জমা রাখতে চাইলে
                    </label>
                  </div>

                  {/* <!-- Forgot password link --> */}
                  <NavLink
                    to="/reset"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    পাসওয়ার্ড ভুলে গেলে
                  </NavLink>
                </div>

                <div className="text-center text-red-600 font-bold my-2">
                  {error && <span>{error}</span>}
                </div>
                {/* <!-- Submit button --> */}

                <TERipple rippleColor="light" className="w-full">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    লগইন করুন
                  </button>
                </TERipple>

                {/* <!-- Divider --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    অথবা
                  </p>
                </div>

                {/* <!-- Social login buttons --> */}
                <TERipple rippleColor="light" className="w-full">
                  <div
                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    style={{ backgroundColor: "#55acee" }}
                    role="button"
                  >
                    {/* <!-- Twitter --> */}
                    <span className="mr-5">
                      <FaGoogle />
                    </span>
                    <GoogleLogIn />
                  </div>
                </TERipple>
                <TERipple rippleColor="light" className="w-full">
                  <Link
                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                  >
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <FbLogin />
                  </Link>
                </TERipple>
              </form>
              <div className="text-center pt-6">
                <Link
                  to="/login"
                  className="inline-block text-sm text-primary align-baseline hover:text-blue-800"
                  href="#"
                >
                  আগে রেজিস্টেশন করা না থাকলে
                  <Link
                    to="/signup"
                    className="text-red-600 font-extrabold pl-3"
                  >
                    এখানে ক্লিক করুন
                  </Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogInForm;

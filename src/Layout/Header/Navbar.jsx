import { useContext, useState } from "react";
import Menu from "./NavbarMenu";
import { Link, NavLink } from "react-router-dom";
import GLogOut from "../../Components/GoogleLogIn/GLogOut";
import { AuthContext } from "../../Components/AuthContext/AuthContext.config";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  //
  const { user } = useContext(AuthContext);
  return (
    <>
      <nav className="bg-primary text-white fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
          <div className="flex-shrink-0 font-bold tracking-wider">
            <div className="flex flex-shrink-0 items-center">
              <NavLink to="/">
                <img
                  className="h-8 w-auto ring-offset-rbcPrimary contrast-200 hover:bg-dark hover:mix-blend-darken bg-white  bg-blend-overlay"
                  src="https://cdn.freebiesupply.com/logos/thumbs/1x/red-radio-integridad-min-logo.png"
                  alt="Your Company"
                />
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Menu />
          </div>
          {/* Avater Section */}
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <button onClick={() => setShowProfile(!showProfile)}>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://www.w3schools.com/w3images/avatar2.png" />
                    </div>
                  </label>
                </button>
                {showProfile && (
                  <ul className="mt-2 z-[1] md:w-60 shadow menu menu-sm dropdown-content bg-primary rounded-md transition duration-150 ease-in-out">
                    <li className="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                      <Link>প্রফাইল</Link>
                    </li>
                    <li className="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                      <Link>আপডেট প্রফাইল</Link>
                    </li>
                    <li className="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                      <Link>
                        <GLogOut />
                      </Link>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  লগইন করুন
                </NavLink>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:hidden">{showMobileMenu && <Menu />}</div>
      </nav>
    </>
  );
};

export default Navbar;

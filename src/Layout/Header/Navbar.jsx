import { useContext, useState } from "react";
import Menu from "./NavbarMenu";
import { Link, NavLink } from "react-router-dom";
import GLogOut from "../../Components/GoogleLogIn/GLogOut";
import { AuthContext } from "../../Components/AuthContext/AuthContext.config";
import { useEffect } from "react";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, loading, imageUrl } = useContext(AuthContext);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100
        ? setStickyClass(
            `fixed top-0 transition duration-700 ease-out md:ease-in`
          )
        : setStickyClass("");
    }
  };
  return (
    <>
      <nav className={`bg-primary z-50 text-white w-full ${stickyClass}`}>
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
          {user ? (
            loading ? (
              <span className="loading loading-spinner text-warning"></span>
            ) : (
              <>
                <div data-aos="zoom-in-down" className="dropdown dropdown-end">
                  <button onClick={() => setShowProfile(!showProfile)}>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        {loading ? (
                          <span className="loading loading-spinner text-error"></span>
                        ) : (
                          <img
                            src={
                              imageUrl
                                ? imageUrl
                                : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                            }
                            className="rounded-full h-28 w-28"
                          />
                        )}
                      </div>
                    </label>
                  </button>
                  {showProfile && (
                    <ul className="mt-2 z-10 md:w-60 w-32 shadow menu menu-sm dropdown-content bg-primary rounded-md transition duration-150 ease-in-out">
                      <li className="hover:text-white text-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                        <Link to="/profile">প্রফাইল</Link>
                      </li>
                      <li className="hover:text-white text-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                        <Link
                          to="/festive"
                          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          উৎসব সংযুক্ত করুন
                        </Link>
                      </li>
                      <li className="hover:text-white text-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                        <Link>
                          <GLogOut />
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )
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

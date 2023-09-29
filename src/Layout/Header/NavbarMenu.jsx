import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 flex md:flex-row flex-col">
      <NavLink
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        হোম
      </NavLink>
      <NavLink
        to="/news"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        খবর
      </NavLink>
      <NavLink
        to="/photos"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        গ্যালারী
      </NavLink>
      <NavLink
        to="/login"
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        লগইন
      </NavLink>
    </div>
  );
};

export default NavbarMenu;

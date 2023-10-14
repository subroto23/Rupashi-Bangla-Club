import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <div className="bg-yellow-500 mt-16 text-white max-w-lg  border-red-600 shadow-xl ">
        <ul className="space-y-1 max-w-lg md:flex-row flex flex-col justify-center items-center">
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/news"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              খবর তৈরির ফর্ম
            </Link>
          </li>
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/cadaform"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              চাঁদা তৈরির ফর্ম
            </Link>
          </li>
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/cada-update"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              চাঁদা আপডেট ফর্ম
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;

import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <div
        data-aos="flip-up"
        className="bg-yellow-500 text-white border-red-600 shadow-xl "
      >
        <ul className="space-y-1  md:flex-row flex flex-col justify-center items-center">
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
              to="/admin/news/update"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              খবর আপডেট ফর্ম
            </Link>
          </li>
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/title-post"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              টাইটেল তৈরির ফর্ম
            </Link>
          </li>
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/title/title-update"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              টাইটেল আপডেট ফর্ম
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
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/due/post"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              বকেয়া তৈরি ফর্ম
            </Link>
          </li>
          <li className="hover:bg-primary w-full hover:text-white border-b">
            <Link
              to="/admin/due/views"
              className="block rounded-lg px-4 py-2 text-xl text-black  hover:text-white font-bold"
            >
              বকেয়া আপডেট ফর্ম
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;

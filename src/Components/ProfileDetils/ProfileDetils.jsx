import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext.config";
const ProfileDetils = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div className="">
          <div className="bg-[#bed6f6cc] shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-full h-56 mx-auto" src={user?.image} />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user?.name}
              </h3>
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user?.fathername}
              </h3>
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user?.mothername}
              </h3>
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user?.email}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{user?.dateOfBirth}</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      ঠিকানাঃ
                    </td>
                    <td className="px-2 py-2">কাদিরদী,বোয়ালমারী,ফরিদপুর</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      মোবাইল
                    </td>
                    <td className="px-2 py-2"> {user?.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      ই-মেইল
                    </td>
                    <td className="px-2 py-2">{user?.email}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <Link
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  ধন্যবাদ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetils;

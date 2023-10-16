import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext.config";
const ProfileDetils = () => {
  const { user, imageUrl } = useContext(AuthContext);
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:w-2/5">
          <div className="bg-[#bed6f6cc] shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-full md:h-full h-56 mx-auto"
                src={
                  imageUrl
                    ? imageUrl
                    : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                }
              />
            </div>
            <div className="p-2">
              <h3 className="text-center font-bold text-xl text-gray-900 leading-8">
                {user?.name}
              </h3>
              <table className="text-xs my-3 text-center md:text-xl">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      পিতা
                    </td>
                    <td className="px-2 py-2"> {user?.fathername}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      মাতা
                    </td>
                    <td className="px-2 py-2"> {user?.mothername}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      জন্ম
                    </td>
                    <td className="px-2 py-2"> {user?.dateOfBirth}</td>
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
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      ঠিকানাঃ
                    </td>
                    <td className="px-2 py-2">কাদিরদী,বোয়ালমারী,ফরিদপুর</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetils;

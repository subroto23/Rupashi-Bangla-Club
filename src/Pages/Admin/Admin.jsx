import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Admin;

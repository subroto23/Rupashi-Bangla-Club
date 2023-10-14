import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Navbar from "../../Layout/Header/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Admin;

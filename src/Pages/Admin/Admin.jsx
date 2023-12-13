import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Navbar from "../../Layout/Header/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <AdminNavbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;

import { Outlet } from "react-router-dom";
import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
import DateTimeHtml from "../../Services/DateTimeHtml";

const Root = () => {
  return (
    <div>
      <DateTimeHtml />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

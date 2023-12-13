import { Outlet } from "react-router-dom";
import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
import DateTimeHtml from "../../Services/DateTimeHtml";
import Marque from "../Marque/Marque";

const Root = () => {
  return (
    <div>
      <DateTimeHtml />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <Marque />
    </div>
  );
};

export default Root;

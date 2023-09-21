import Carosoal from "../../Components/Carosol/Carosoal";
import Footer from "../../Components/Footer/Footer";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import TopNews from "../../Components/TopNews/TopNews";
import Navbar from "../../Layout/Header/Navbar";
import DateTimeHtml from "../../Services/DateTimeHtml";

const HeaderHeroSection = () => {
  return (
    <div>
      <Navbar />
      <HeaderSlider />
      {/* <Carosoal /> */}
      <DateTimeHtml />
      <TopNews />
      <Footer />
    </div>
  );
};

export default HeaderHeroSection;

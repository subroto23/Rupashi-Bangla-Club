import Carosoal from "../../Components/Carosol/Carosoal";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import TopNews from "../../Components/TopNews/TopNews";
import Navbar from "../../Layout/Header/Navbar";
import DateTimeHtml from "../../Services/DateTimeHtml";

const HeaderHeroSection = () => {
  return (
    <div>
      <Navbar />
      <HeaderSlider />
      <Carosoal />
      <DateTimeHtml />
      <TopNews />
    </div>
  );
};

export default HeaderHeroSection;

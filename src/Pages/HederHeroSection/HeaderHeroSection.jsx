// import Carosoal from "../../Components/Carosol/Carosoal";
import BlogCard from "../../Components/BlogCard/BlogCard";
import HappyClients from "../../Components/HappyClients/HappyClients";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import Hero2 from "../../Components/Hero2Section/Hero2Section";
import OverlayHeroSection from "../../Components/OverLayHeroSection/OverlayHeroSection";
import PromoSection from "../../Components/PromoSection/PromoSection";
import TopNews from "../../Components/TopNews/TopNews";
import TrustPartner from "../../Components/TrustPartner/TrustPartner";
import UpCommingEvents from "../../Components/UpCommingEvents/UpCommingEvents";
import RbcMember from "../../Components/rbcMember/rbcMember";
import DateTimeHtml from "../../Services/DateTimeHtml";
const HeaderHeroSection = () => {
  return (
    <div>
      <HeaderSlider />
      <UpCommingEvents />
      <TopNews />
      {/* <OverlayHeroSection /> */}
      {/* <PromoSection />
      <BlogCard />
      <RbcMember />
      <TrustPartner />
      <HappyClients />
      <Hero2 /> */}
    </div>
  );
};

export default HeaderHeroSection;

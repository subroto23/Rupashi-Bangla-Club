import Carosoal from "./Components/Carosol/Carosoal";
import TodaysEvents from "./Components/TodayEvents/TodaysEvents/TodaysEvents";
import UpCommingEvents from "./Components/Upcomming Events/UpCommingEvents/UpCommingEvents";
import { ComplexNavbar } from "./Layout/Header/Navbar";

function App() {
  return (
    <>
      <ComplexNavbar />
      <Carosoal />
      <TodaysEvents />
      <UpCommingEvents />
    </>
  );
}

export default App;

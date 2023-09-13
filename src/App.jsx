import Carosoal from "./Components/Carosol/Carosoal";
import { ComplexNavbar } from "./Layout/Header/Navbar";

import EventsLayout from "./Components/Events/EventsLayout";

function App() {
  return (
    <>
      <ComplexNavbar />
      <Carosoal />
      <EventsLayout />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import UpcommingEvent from "../UpCommingEvent/UpcommingEvent";
import UpCommingDeadEvents from "./UpCommingDeadEvents";

const UpCommingEvents = () => {
  const todayMonth = new Date().getMonth() + 1;
  const [upComming, setUpcomming] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/67a83402c3b2c3f0595b")
      .then((res) => res.json())
      .then((data) => setUpcomming(data.villagersInfo));
  }, []);
  const upCammingData = upComming.filter(
    (data) =>
      data?.birthday.split("/")[1] == todayMonth &&
      data?.birthday.split("/")[0] !== new Date().getDate()
  );
  return (
    <div>
      <UpcommingEvent key={Math.random()} upCommingData={upCammingData} />
      <UpCommingDeadEvents />
    </div>
  );
};

export default UpCommingEvents;

import { useEffect, useState } from "react";
import UpCommingDeadEvent from "../UpCommingEvent/UpCommingDeadEvent";

const UpCommingDeadEvents = () => {
  const todayMonth = new Date().getMonth() + 1;
  const [upComming, setUpcomming] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/67a83402c3b2c3f0595b")
      .then((res) => res.json())
      .then((data) => setUpcomming(data.villagersInfo));
  }, []);
  const upCammingDeadData = upComming.filter(
    (data) =>
      data?.deadDate.split("/")[1] == todayMonth &&
      data?.deadDate.split("/")[0] !== new Date().getDate()
  );

  return (
    <div>{<UpCommingDeadEvent upCommingDeadData={upCammingDeadData} />}</div>
  );
};

export default UpCommingDeadEvents;

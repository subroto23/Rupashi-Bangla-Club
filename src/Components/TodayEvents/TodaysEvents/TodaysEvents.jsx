import { useEffect, useState } from "react";
import TodayEvent from "../TodayEvent/TodayEvent";

const TodaysEvents = () => {
  const todayDate = new Date();
  const today = `${todayDate.getDate()}/${todayDate.getMonth() + 1}`;
  const [villegersInfo, setVillagersInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/67a83402c3b2c3f0595b")
      .then((res) => res.json())
      .then((data) => setVillagersInfo(data.villagersInfo));
  }, []);

  const matchingValue = villegersInfo.filter((matchingDate) => {
    const birthDate =
      matchingDate?.birthday.split("/")[0] ||
      matchingDate?.deadDate.split("/")[0];
    const birthMonth =
      matchingDate?.birthday.split("/")[1] ||
      matchingDate?.deadDate.split("/")[1];
    const DateOfBirth = `${birthDate}/${birthMonth}`;
    return DateOfBirth == today;
  });
  return (
    <div>
      {matchingValue.map((villeger) => (
        <TodayEvent key={villeger.id} villeger={{ villeger }} />
      ))}
    </div>
  );
};

export default TodaysEvents;

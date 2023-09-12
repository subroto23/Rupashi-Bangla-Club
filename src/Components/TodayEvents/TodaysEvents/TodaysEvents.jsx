import { useEffect, useState } from "react";
import TodayEvent from "../TodayEvent/TodayEvent";

const TodaysEvents = () => {
  const todayDate = new Date();
  const today = `${todayDate.getDate()}/${todayDate.getMonth() + 1}`;
  const [villegersInfo, setVillagersInfo] = useState([]);

  const loadData = async () => {
    const response = await fetch("../../../Data.json");
    const data = await response.json();
    setVillagersInfo(data.villagersInfo);
  };
  useEffect(() => {
    loadData();
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

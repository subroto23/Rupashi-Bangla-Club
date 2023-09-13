import { useEffect, useState } from "react";
import CurrentEvents from "../../CurrentEvents/CurrentEvents";
// import CurrentEvents from "../../CurrentEvents/CurrentEvents";

const TodaysEvents = () => {
  const todayDate = new Date();
  const today = `${todayDate.getDate()}/${todayDate.getMonth() + 1}`;
  const [villegersInfo, setVillagersInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/1dfe58d18e5039c270cf")
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
  return <div>{<CurrentEvents matchingValue={matchingValue} />}</div>;
};
{
  /* <TodayEvent key={villeger.id} villeger={{ villeger }} /> */
  // <CurrentEvents key={villeger.id} villeger={{ villeger }} />
}
export default TodaysEvents;

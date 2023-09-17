import { useEffect, useState } from "react";
import CurrentEvents from "../../CurrentEvents/CurrentEvents";
import NoMatchingEvent from "./NoMatchingEvent";
// import CurrentEvents from "../../CurrentEvents/CurrentEvents";

const TodaysEvents = () => {
  const todayDate = new Date();
  const today = `${todayDate.getDate()}/${todayDate.getMonth() + 1}`;
  const [villegersInfo, setVillagersInfo] = useState([]);

  useEffect(() => {
    // "https://api.npoint.io/1dfe58d18e5039c270cf"
    fetch("../../../../Data.json")
      .then((res) => res.json())
      .then((data) => setVillagersInfo(data.villagersInfo));
  }, []);
  const matchingValue = villegersInfo.filter((matchingDate) => {
    const birthDate =
      matchingDate.birthday.split("/")[0] ||
      matchingDate.deadDate.split("/")[0];
    const birthMonth =
      matchingDate.birthday.split("/")[1] ||
      matchingDate.deadDate.split("/")[1];
    const DateOfBirth = `${birthDate}/${birthMonth}`;
    return DateOfBirth === today;
  });
  if (!matchingValue.length == 0) {
    return (
      <div>
        <CurrentEvents matchingValue={matchingValue} />
      </div>
    );
  } else {
    return (
      <div>
        <NoMatchingEvent NoValue={"দুঃখিত !! আজকের দিনের কোনো তথ্য নেই"} />
      </div>
    );
  }
};
export default TodaysEvents;

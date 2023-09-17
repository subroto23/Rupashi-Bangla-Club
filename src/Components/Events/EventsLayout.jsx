import TodaysEvents from "../TodayEvents/TodaysEvents/TodaysEvents";
import UpCommingDeadEvents from "../Upcomming Events/UpCommingEvents/UpCommingDeadEvents";
import UpCommingEvents from "../Upcomming Events/UpCommingEvents/UpCommingEvents";
import DateTimeHtml from "../../Services/DateTimeHtml";
const EventsLayout = () => {
  return (
    <div className="md:mt-12">
      <div className="flex justify-center container mx-auto md:my-6">
        <DateTimeHtml />
      </div>
      <div className="mt-8 md:mt-24">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-10">
          <TodaysEvents />
          <UpCommingEvents />
          <UpCommingDeadEvents />
        </div>
      </div>
    </div>
  );
};

export default EventsLayout;

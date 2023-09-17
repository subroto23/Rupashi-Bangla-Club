import TodaysEvents from "../TodayEvents/TodaysEvents/TodaysEvents";
import UpCommingDeadEvents from "../Upcomming Events/UpCommingEvents/UpCommingDeadEvents";
import UpCommingEvents from "../Upcomming Events/UpCommingEvents/UpCommingEvents";
import DateTimeHtml from "../../Services/DateTimeHtml";
const EventsLayout = () => {
  return (
    <div>
      <div className="flex justify-center container mx-auto md:my-6">
        <DateTimeHtml />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto md:gap-6 gap-10 px-4">
        <div className="bg-[#c3effdcc] rounded-lg py-8 md:shadow-xl ">
          <h1 className="py-2 font-bold text-center">আজকের দিনের ঘটনাঃ-</h1>
          <TodaysEvents />
        </div>
        <div className="bg-[#c3effdcc] rounded-lg py-8 md:shadow-xl">
          <h1 className="py-2 font-bold text-center">এই মাসে যাদের জন্মদিন</h1>
          <UpCommingEvents />
        </div>
        <div className="bg-[#c3effdcc] rounded-lg py-8 md:shadow-xl">
          <h1 className="py-2 font-bold text-center">
            এই মাসে যাদের মৃত্যু বার্ষিকী-
          </h1>
          <UpCommingDeadEvents />
        </div>
      </div>
    </div>
  );
};

export default EventsLayout;

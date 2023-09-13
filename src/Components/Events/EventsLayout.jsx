import TodaysEvents from "../TodayEvents/TodaysEvents/TodaysEvents";
import UpCommingDeadEvents from "../Upcomming Events/UpCommingEvents/UpCommingDeadEvents";
import UpCommingEvents from "../Upcomming Events/UpCommingEvents/UpCommingEvents";

const EventsLayout = () => {
  return (
    <div>
      <div className="flex justify-center container mx-auto md:my-16 my-8 bg-lime-300 py-8 rounded-full">
        <h1 className="text-[#0062b2cc] md:text-5xl font-bold">
          এই মাসের সকল ঘটনাঃ-
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto md:gap-6 gap-10 my-20 px-4">
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

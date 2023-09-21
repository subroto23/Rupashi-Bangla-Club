import { NavLink } from "react-router-dom";
const HeaderSliderOverlay = ({ sliderArr }) => {
  return (
    <div className="group flex flex-col items-center h-full">
      <div className="relative z-10 flex flex-col justify-center invisible group-hover:visible  items-center h-full text-center">
        <h1 className="md:text-5xl font-bold  leading-6 mb-4 shadow-xl w-40 md:w-3/4 md:leading-tight text-white drop-shadow-lg shadow-black">
          {sliderArr.title}
        </h1>
        <NavLink
          to="/commite/views/:id"
          className="bg-yellow-400 mt-4  text-gray-900 hover:bg-yellow-300 py-2 px-12 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <button id={sliderArr.id}> দেখুন</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderSliderOverlay;

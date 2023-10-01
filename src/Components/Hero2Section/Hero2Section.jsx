const Hero2 = () => {
  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
      {/* :HERO BACKGROUND */}
      <div className="absolute w-full h-full bg-black">
        {/* <img
          src="https://fancytailwind.com/static/d38369764db9945c335175de244c268f/2e8d7/portrait1.webp"
          alt=""
          className="absolute -right-28 w-full h-full object-cover"
        /> */}
      </div>

      {/* :HERO CONTAINER */}
      <div className="relative py-10 xl:py-20 px-5 w-full sm:w-2/3 h-full flex flex-col justify-center items-center bg-white bg-opacity-90">
        {/* ::Top Title */}
        <h2 className="mt-14 text-center text-base sm:text-lg text-gray-800 font-newsreader font-medium uppercase tracking-extra">
          <span className="md:mr-6">
            {" "}
            <span className="text-3xl">রূ</span>পসী{" "}
          </span>
          <span className="md:mr-6">
            <span className="text-3xl">বাং</span>লা{" "}
          </span>
          <span className="md:mr-6">
            <span className="text-3xl">ক্লা</span>ব
          </span>
          <span className="md:mr-6">
            <span className="text-3xl">ও</span>য়েব
          </span>
          <span className="md:mr-6">
            {" "}
            <span className="text-3xl">সা</span>ইটে
          </span>
        </h2>

        {/* ::Title => W O R K */}
        <div
          className="pb-7 sm:pb-14 mt-8 xl:pb-20 sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-center overflow-hidden"
          style={{ textShadow: "2px 2px 5px rgba(86,90,88,0.85)" }}
        >
          {/* :::W O */}
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span className="z-10">স্বা</span>
            <span>গ</span>
            {/* Line through */}
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform -translate-x-full animate-linethrough" />
            {/* Shadow W and O */}
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>

          {/* :::R K */}
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span>ত</span>
            <span className="z-10">ম</span>
            {/* Line through */}
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform translate-x-full animate-linethrough" />
            {/* Shadow R and K */}
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

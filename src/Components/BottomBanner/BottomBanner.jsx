const BottomBanner = () => {
  return (
    <div className="mt-8  bg-blue-100 bg-opacity-25">
      <section className="grid grid-cols-1 gap-0 max-w-6xl mx-auto  md:grid-cols-2">
        <div
          data-aos="fade-right"
          className="flex flex-col items-start  justify-center px-4 md:py-24 py-4 lg:px-20"
        >
          <span className="mb-3 text-white bg-blue-900 badge">RBC</span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
            রূপসী বাংলা ক্লাব
          </h1>
          <p className="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
            একটি সামাজিক উন্নায়নমূলক সংগঠন।এটি ফরিদপুর জেলার,বোয়ালমারী থানার
            কাদিরদী গ্রামে অবস্থিত । ২০১৫ ইং সালে সমাজের অসচ্ছল,হতদরিদ্র,চিকিৎসা
            বঞ্চিত এবং দারিদ্র মেধাবী শিক্ষার্থীদের শিক্ষা উপকরন এবং শিক্ষা
            দানের লক্ষ নিয়ে যাত্রা শুরু করে।
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            src="https://i.ibb.co/0Js2j8Q/105629191-195857065094231-631298054909406055-n.jpg"
            alt="RBC"
            className="object-cover w-full md:h-96 bg-gray-100 h-56"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default BottomBanner;

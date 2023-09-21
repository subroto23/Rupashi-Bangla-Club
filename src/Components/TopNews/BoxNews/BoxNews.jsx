const BoxNews = ({ newsArr }) => {
  const newsArrs = newsArr.filter((_, idx) => idx !== 0);
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols=1 gap-4 ">
        {newsArrs.map((newsValue, idx) => {
          return (
            <div
              key={idx}
              className="relative w-full bg-cover h-[200px] bg-blend-overlay hover:brightness-150 hover:contrast-100 rounded-3xl"
              style={{ backgroundImage: `url("${newsValue.link}")` }}
            >
              <div className="bg-black opacity-60 h-full">
                <div className="absolute bottom-8 px-8 ">
                  <h1 className="md:text-xl text-2xl font-bold text-white">
                    {newsArr[0].title}
                  </h1>
                  <p className="md:text-2xl font-bold text-xl text-justify text-pink-800 ">
                    TagName
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxNews;

const RbcMember = () => {
  const people = [
    {
      name: "Tonyo Delapena",
      role: "Boss",
      picture:
        "https://fancytailwind.com/static/profile12-7637478ac2813cadaac205bbb4424261.jpg",
      background:
        "https://fancytailwind.com/static/voyage7-0042107ac67886a4839d73d8ec0debd9.jpg",
      facebookURL: "#link",
      twitterURL: "#link",
      linkedinURL: "#link",
    },
    {
      name: "Laetitia Librals",
      role: "Designer",
      picture:
        "https://fancytailwind.com/static/profile14-e9ac6c7d68a78a1cbbf29458acacc95a.jpg",
      background:
        "https://fancytailwind.com/static/voyage6-419e38cf3f54fea9e3ab9586c0041969.jpg",
      facebookURL: "#link",
      twitterURL: "#link",
      linkedinURL: "#link",
    },
  ];

  return (
    <div className="relative mx-auto py-10 px-3 w-full max-w-7xl bg-gray-50 text-gray-800">
      <div className="grid grid-cols-3 gap-x-5">
        {/* :TITLE CONTAINER */}
        <div className="col-span-full lg:col-span-1 px-5 max-w-4xl">
          {/* ::Title */}
          <h2 className="mb-5 lg:mb-10 text-3xl sm:text-4xl lg:text-5xl font-bold capitalize">
            Discover our
            <span className="lg:mt-3 block text-yellow-500">amazing team</span>
          </h2>
          {/* ::Text */}
          <p className="sm:text-lg md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam
            accusamus maiores laborum architecto. Assumenda amet nulla tenetur
            repellat aliquam, libero, consectetur, sint quasi pariatur odio cum?
            Aliquam, quos eum?
          </p>
        </div>

        {/* :TEAM CONTAINER */}
        <div className="col-span-full lg:col-span-2 mt-10 lg:mt-0 mx-auto w-full sm:max-w-2xl">
          <ul className="grid grid-cols-4 gap-10">
            {people.map((person) => (
              <li
                key={person.name}
                className="col-span-full sm:col-span-2 relative px-3 h-80 flex flex-col justify-center items-center overflow-hidden rounded border-2 border-gray-100 bg-gray-700 md:bg-white"
              >
                {/* ::Background image */}
                <span className="absolute top-0 left-0 w-full h-full md:h-1/3 overflow-hidden opacity-30 md:opacity-100">
                  <img
                    src={person.background}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </span>
                {/* ::Avatar */}
                <span
                  className="relative border-2 border-gray-50 rounded-full overflow-hidden"
                  aria-label="avatar"
                >
                  <img src={person.picture} alt="" className="w-32 h-32" />
                </span>
                {/* ::Details */}
                <div className="relative p-2 w-full flex flex-col items-center rounded">
                  {/* :::name */}
                  <h3 className="text-lg text-white md:text-gray-800 font-bold tracking-wide">
                    {person.name}
                  </h3>
                  {/* :::role */}
                  <p className="text-base text-yellow-500 font-semibold tracking-wide">
                    {person.role}
                  </p>
                  {/* :::socials */}
                  <div className="mt-8 inline-flex space-x-4">
                    {/* Facebook */}
                    <a
                      href={person.facebookURL}
                      className="text-gray-300 md:text-gray-500 hover:text-yellow-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a
                      href={person.twitterURL}
                      className="text-gray-300 md:text-gray-500 hover:text-yellow-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    {/* Linkedin */}
                    <a
                      href={person.linkedinURL}
                      className="text-gray-300 md:text-gray-500 hover:text-yellow-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                      >
                        <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RbcMember;

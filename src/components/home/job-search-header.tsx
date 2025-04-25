import search_light from "../../assets/images/search_light.svg";
const JobSearchHeader = () => {
  return (
    <div className="w-full rounded-xl px-6 py-6 space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-black">
          Find your Dream Job, <span className="text-primary">Albert!</span>
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>

      <div className="bg-white rounded-2xl px-4 py-6 flex flex-wrap items-center w-full gap-4">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="flex-1 min-w-[200px] text-md text-textSecondary placeholder:text-textSecondary bg-transparent outline-none"
        />

        <div className="h-10 w-px bg-gray-200 hidden lg:block" />

        <select className="text-md text-textSecondary bg-transparent outline-none min-w-[150px] hover:cursor-pointer">
          <option>Select Location</option>
          <option>Remote</option>
          <option>USA</option>
        </select>

        <div className="h-10 w-px bg-gray-200 hidden lg:block" />

        <select className="text-md text-textSecondary bg-transparent outline-none min-w-[150px] hover:cursor-pointer">
          <option>Job Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>

        <button className="flex items-center gap-1 bg-primary text-white px-8 py-2 rounded-lg text-md min-w-[150px] justify-center">
          <img
            src={search_light}
            loading="lazy"
            alt="search"
            className="w-4 h-4"
          />
          <span>Search</span>
        </button>
      </div>

      <div className="text-md text-textSecondary flex flex-wrap items-center gap-4">
        <span>Similar:</span>
        <div className="flex flex-wrap items-center gap-3 hover:cursor-pointer">
          <div className="border-2 rounded-lg border-textSecondary py-2 px-4">
            Frontend
          </div>
          <div className="border-2 rounded-lg border-textSecondary py-2 px-4">
            Backend
          </div>
          <div className="border-2 rounded-lg border-textSecondary py-2 px-4">
            Graphic Designer
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 " />
    </div>
  );
};

export default JobSearchHeader;

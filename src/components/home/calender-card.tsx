import arrow from "../../assets/images/arrow.svg";

const CalendarCard = () => (
  <div className="flex justify-between items-center w-full max-w-[346px] rounded-lg bg-white px-4 py-2">
    <div className="flex flex-col">
      <span className="text-md font-bold text-textPrimary">My calendar</span>
      <span className="text-textSecondary">Upcoming Interviews</span>
    </div>
    <div className="hover:cursor-pointer">
      <img src={arrow} loading="lazy" alt="arrow" />
    </div>
  </div>
);

export default CalendarCard;

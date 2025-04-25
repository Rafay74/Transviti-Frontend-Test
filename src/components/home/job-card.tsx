import teams from "../../assets/images/teams.svg";
import bookmark from "../../assets/images/bookmark.svg";
import clock from "../../assets/images/clock.svg";
import pin from "../../assets/images/pin.svg"

interface JobCardProps {
  prompted?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ prompted }) => {
  

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between space-y-2 w-full">
      {prompted && (
        <span className="text-xs font-semibold text-black">Promoted</span>
      )}

      <div className="flex items-start gap-3">
        <div className="bg-backgroundSecondary rounded-lg p-2 min-w-[40px] min-h-[40px] flex items-center justify-center">
          <img src={teams} loading="lazy" alt="teams" className="w-5 h-5 object-contain" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-black leading-tight">UI/UX Designer</h3>
          <span className="text-xs text-textSecondary">Teams</span>
        </div>
      </div>

      <div className="flex items-center gap-1 text-xs text-textTiertiary">
        <img src={pin} alt="pin" loading="lazy" className="w-3 h-3 object-contain" />
        <span className="truncate">Seattle, USA (Remote)</span>
      </div>

      <div className="flex items-center gap-2 text-xs text-textTiertiary">
        <img src={clock} alt="clock" loading="lazy" className="w-3 h-3 object-contain" />
        <span>1 day ago</span>
        <span className="text-gray-300 px-1">|</span>
        <a href="#" className="text-primary">22 applicants</a>
      </div>

      <div className="flex items-center justify-between mt-2">
        <button className="bg-primary text-white text-xs rounded-lg px-4 py-2 w-full">
          Apply Now
        </button>
        <button className="ml-2" >
          <img src={bookmark} loading="lazy" alt="bookmark" className="w-5 h-5 object-contain" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;

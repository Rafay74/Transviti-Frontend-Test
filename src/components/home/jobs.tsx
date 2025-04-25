import { JobItem } from "../../types";
import JobCard from "./job-card";
interface JobsProps {
  title: string;
  subTitle: string;
  showPromoted?: boolean;
  jobsList: JobItem[];
}

const Jobs: React.FC<JobsProps> = ({
  title,
  subTitle,
  showPromoted = false,
  jobsList,
}) => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 flex flex-col gap-4 overflow-hidden">
        <div className="flex gap-4 items-center">
          <span className="text-base sm:text-lg text-textPrimary">{title}</span>
          <span className="underline text-sm sm:text-base text-primary hover:cursor-pointer">
            {subTitle}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {jobsList.map((job, index) => (
            <JobCard key={index} {...job} prompted={showPromoted} />
          ))}
        </div>
        {title !== "Latest Jobs" && (
          <hr className="border-t border-gray-300 mt-2 mb-4" />
        )}
      </div>
    </>
  );
};

export default Jobs;

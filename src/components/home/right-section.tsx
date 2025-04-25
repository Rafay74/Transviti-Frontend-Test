import { FEATURED_JOBS, LATEST_JOBS, RECOMMENDED_JOBS } from "../../data"
import Jobs from "./jobs"
import JobSearchHeader from "./job-search-header"

const RightSection = () => {
  return (
    <div className=" w-full h-auto">
        <JobSearchHeader/>
        <Jobs title="Featured Jobs" subTitle="See Featured Jobs" showPromoted={true} jobsList={FEATURED_JOBS} />
        <Jobs title="Recommended Jobs" subTitle="See Recommended Jobs" jobsList={RECOMMENDED_JOBS}/>
        <Jobs title="Latest Jobs" subTitle="See Latest Jobs" jobsList={LATEST_JOBS}/>
    </div>
  )
}

export default RightSection

import { STATS_ITEMS } from "../../data";
import CalendarCard from "./calender-card";
import Details from "./details";
import StatsCard from "./stats-card";



const SidebarSection = () => (
  <div className="ml-4 sm:ml-6 lg:ml-0 lg:w-[400px] h-auto space-y-4">
    <Details />
    <StatsCard items={STATS_ITEMS} />
    <CalendarCard />
  </div>
);



export default SidebarSection;

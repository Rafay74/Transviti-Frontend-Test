import RightSection from "./right-section";
import SidebarSection from "./sidebar-section";

const HomeSection = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <SidebarSection />
      <RightSection/>
    </div>
  );
};

export default HomeSection;

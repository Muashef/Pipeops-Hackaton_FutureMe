import Date from "./DashboardDate";
import Event from "./Event";
import Features from "./Features";
import Overview from "./Overview";
import Profile from "./Profile";
import Search from "./Search";

function DashboardMain() {
  return (
    <>
      <div className="w-3/5 py-4 px-8 lg:ml-[20%]">
        <Search />
        <div>
          <h1 className="text-2xl font-semibold">Welcome Aisha,</h1>
          <p className="text-lg">How can we help you today😊?</p>
        </div>
        <Overview />
        <Features />
      </div>
      <div className="flex flex-col justify-start items-end lg:mr-6 gap-4">
        <Profile />
        <Date />
        <Event />
      </div>
    </>
  );
}

export default DashboardMain;

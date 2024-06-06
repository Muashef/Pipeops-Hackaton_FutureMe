import OverviewItem from "./OverviewItem";
import Search from "./Search";

function DashboardMain() {
  return (
    <div className="w-3/5 py-4 px-8 lg:ml-[20%]">
      <Search />
      <div>
        <h1 className="text-2xl font-semibold">Welcome Aisha,</h1>
        <p className="text-lg">How can we help you today😊?</p>
      </div>
      <div className="overview flex gap-4">
      <OverviewItem course='Product Management' percentage='90'/>
      <OverviewItem course='Product Management' percentage='90'/>
      <OverviewItem course='Product Management' percentage='90'/>
      </div>
    </div>
  );
}

export default DashboardMain;

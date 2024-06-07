import Features from "./Features";
import Overview from "./Overview";
import Search from "./Search";

function DashboardMain() {
  return (
    <div className="w-3/5 py-4 px-8">
      <Search />
      <div>
        <h1 className="text-2xl font-semibold">Welcome Aisha,</h1>
        <p className="text-lg">How can we help you today😊?</p>
      </div>
      <Overview />
      <Features />
    </div>
  );
}

export default DashboardMain;

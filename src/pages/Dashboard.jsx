import DashboardMain from "../components/Dashboard/DashboardMain";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard() {
  return (
    <main className="w-full">
      <Sidebar />
      <DashboardMain />
    </main>
  );
}

export default Dashboard;

import DashboardMain from "../components/Dashboard/DashboardMain";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard() {
  return (
    <main className="h-[100vh] w-full flex justify-start">
      <Sidebar />
      <DashboardMain />
    </main>
  );
}

export default Dashboard;

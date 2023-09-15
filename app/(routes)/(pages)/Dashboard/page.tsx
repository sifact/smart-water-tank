import { redirect } from "next/navigation";
import DashboardClient from "./compoenents/client";

const Dashboard = () => {
  return (
    <div>
      <DashboardClient />
    </div>
  );
};

export default Dashboard;

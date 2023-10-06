import DashboardNavbar from "@/components/UI/Dashboard/Navbar";
import WidthClamp from "@/components/UI/Shared/width-clamp";
import { sora } from "@/lib/fonts/fonts";

const Dashboard = () => {
  return (
    <>
      <header>
        <DashboardNavbar />
      </header>
      <main>
        <div className="my-8">
          <WidthClamp>
            <div>
              <h1 className={`${sora.className} text-3xl font-bold`}>Hello, Benjamin Nkem</h1>
            </div>
          </WidthClamp>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

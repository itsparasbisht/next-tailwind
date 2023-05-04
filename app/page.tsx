import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex bg-[#0F0F0F]">
      <div className="w-auto bg-[#0F0F0F]">
        <Sidebar />
      </div>
      <div className="w-full h-14">
        <Topbar />
      </div>
    </div>
  );
}

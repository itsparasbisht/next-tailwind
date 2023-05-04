import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="w-screen h-auto flex">
      <div className="w-auto bg-black">
        <Sidebar />
      </div>
    </div>
  );
}

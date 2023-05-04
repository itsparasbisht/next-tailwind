import Image from "next/image";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { MdEmergencyRecording } from "react-icons/md";

function Topbar() {
  return (
    <div className="w-full h-full pt-1 flex items-center">
      <div className="w-1/4">
        <Image
          src={"/youtube-logo.png"}
          width={120}
          height={50}
          alt="youtube logo"
        />
      </div>
      <div className="w-1/2 h-full flex items-center">
        <input
          type="text"
          className="w-[77%] h-[90%] py-2 px-4 rounded-tl-full rounded-bl-full bg-[#121212] border-gray-700 border-[0.5px] text-lg outline-none text-gray-300 focus:border-blue-700"
          placeholder="Search"
        />
        <div className="w-[11%] h-[90%] bg-[#242424] flex justify-center items-center rounded-tr-full rounded-br-full border-gray-700 border-[0.5px]">
          <CiSearch className="text-2xl text-white" />
        </div>
        <div className="w-11 h-11 bg-[#242424] flex justify-center items-center rounded-full ml-3">
          <BsFillMicFill className="text-xl text-white" />
        </div>
      </div>
      <div className="w-1/4 h-full flex items-center justify-center">
        <div className="w-10 h-10 bg-[#242424] flex justify-center items-center rounded-full ml-4">
          <MdEmergencyRecording className="text-2xl text-white" />
        </div>
        <div className="w-10 h-10 bg-[#242424] flex justify-center items-center rounded-full ml-4">
          <CiBellOn className="text-2xl text-white" />
        </div>
        <div className="w-10 h-10 bg-green-300 flex justify-center items-center rounded-full ml-4">
          <span className="text-black text-xl">PB</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

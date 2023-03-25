import { FaTwitter } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Home() {
  return (
    <div className="w-screen h-auto flex">
      <div className="bg-gray-200 w-[20%]">
        <div className="mt-20">
          <ul>
            <li>
              <FaTwitter className="text-3xl text-twblue" />
            </li>
            <li className="flex items-center">
              <BiHomeAlt2 className="text-3xl text-gray-500" />{" "}
              <span className="ml-3 text-gray-500 font-medium">Home</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-300 w-[55%]">feed</div>
      <div className="bg-blue-300 w-[25%]">explore</div>
    </div>
  );
}

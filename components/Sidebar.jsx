import SidebarElement from "./SidebarElement";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";

function Sidebar() {
  return (
    <div>
      <SidebarElement Icon={RxHamburgerMenu} text="" />
      <SidebarElement Icon={BiHomeAlt} text="Home" />
      <SidebarElement Icon={MdOutlineHistory} text="History" />
      <SidebarElement Icon={MdOutlineSubscriptions} text="Subscriptions" />
      <SidebarElement Icon={MdOutlineVideoLibrary} text="Library" />
    </div>
  );
}

export default Sidebar;

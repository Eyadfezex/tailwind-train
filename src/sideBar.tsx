// Import icons from react-icons
import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

// Define the SideBar interface for the props
interface SideBar {
  icon: any;
  text: string;
}

// SideBar component
function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="Eyad" />
      <SideBarIcon icon={<FaPoo size="28" />} text="Eyad" />
      <SideBarIcon icon={<BsPlus size="28" />} text="Eyad" />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Eyad" />
      <SideBarIcon icon={<BsGearFill size="28" />} text="Eyad" />
    </div>
  );
}
// SideBarIcon component

const SideBarIcon = ({ icon, text }: SideBar) => {
  return (
    <div className="Sidebar-icon group">
      {icon}
      <span className="Sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

// Export the SideBar component
export default SideBar;

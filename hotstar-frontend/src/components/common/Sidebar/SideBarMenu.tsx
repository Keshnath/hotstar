import { useState } from "react";
import { ISidebarMenuProps } from "./types";
import { Sidebar } from "flowbite-react";

const SidebarMenu: React.FC<ISidebarMenuProps> = ({ data, sidebar }) => {
  const [showCode, setShowCode] = useState<boolean>(false);
  // onMouseEnter={() => setShowCode(true)} onMouseLeave={() => setShowCode(false)}
  return (
    <div className="nav-items group grid  grid-cols-2 gap-0 mt-5 cursor-pointer relative">
      <img
        src={data.activeIcon}
        className="icon-img mx-5 w-5 h-8  filter invert  "
        alt={`${data.name} Icon`}
      />
      <div
        className={`text-gery p-2 hover:text-2xl hover:text-white  bg-transparent transition-opacity  ${
          sidebar ? "opacity-100 ml-[-5rem]   mt-[-0.5rem]  block" : "hidden"
        } `}
      >
        <p> {data.name}</p>
      </div>
    </div>
  );
};
export default SidebarMenu;

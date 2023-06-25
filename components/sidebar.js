import {
  BsFolderFill,
  BsFillGearFill,
  BsPersonFillCheck,
} from "react-icons/bs";

import SideButton from "./sidebutton";
export default function Sidebar() {
  return (
    <div className="  flex flex-col basis-1/12 lg:basis-1/6 p-3 gap-2  border-[#6453ef]  border-r-4 pt-28 ">
      <SideButton icon={BsFolderFill} text="My Storage" selected={true} />
      <SideButton icon={BsFillGearFill} text="Settings" selected={false} />
      <SideButton
        icon={BsPersonFillCheck}
        text="Manage Access"
        selected={false}
      />
    </div>
  );
}

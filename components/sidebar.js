import {
  BsFolderFill,
  BsFillGearFill,
  BsPersonFillCheck,
} from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import SideButton from "./sidebutton";
export default function Sidebar() {
  const { account } = useContext(AppContext)
  return (
    <div className="flex flex-col basis-1/12 lg:basis-[20%] p-3 gap-4  fixed h-full bg-black pb-5 ">
      <div className="brand-logo w-16 h-16 flex flex-row items-center space-x-3">
        <img src="/docshield.png" class=" flex-col ml-4"></img>
        <div class="text-white text-3xl mr-10 font-bold hidden lg:block flex-col ">
          DocShield
        </div>
      </div>

      <SideButton icon={BsFolderFill} text="My Storage" selected={true} />

      <SideButton
        icon={BsPersonFillCheck}
        text="Manage Access"
        selected={false}
      />
      <div className="grow" />
      <SideButton icon={RiLogoutBoxRFill} text="Logout" selected={false} />
    </div>
  );
}

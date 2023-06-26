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
    <div className="flex flex-col basis-1/12 lg:basis-[20%] p-3 gap-4  fixed h-full bg-black pb-5 items-center ">
      <div className="brand-logo w-16 h-16 lg:w-48 lg:h-48 flex flex-col items-center  ">
        <img src="/docshield.png" class=" flex-col mt-4"></img>
        <div class="text-white text-[2.7rem] font-bold hidden lg:block flex-col   ">
          DocShield
        </div>
      </div>
      <div className="grow"/>
      <SideButton icon={BsFolderFill} text="My Storage" selected={true} />

      <SideButton
        icon={BsPersonFillCheck}
        text="Manage Access"
        selected={false}
      />
      <SideButton icon={RiLogoutBoxRFill} text="Logout" selected={false} />
    </div>
  );
}

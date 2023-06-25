import { FcFolder } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Row() {
  return (
    <div class="flex flex-row pb-3  border-slate-100 border-b-2 border-solid">
      <span class="flex flex-grow text-black text-xl basis-1/2 items-center space-x-4">
        <FcFolder size={32} class="ml-3" />
        <span>Generic File</span>
      </span>
      <span class="flex text-black text-xl basis-1/4 items-center space-x-2">
        <VscAccount class="mt-1" />
        <span>me</span>
      </span>
      <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
      <span class="flex  text-black text-xl basis-1/12">
        <span class="flex basis-1/2">...</span>
        <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical /></button></span>
      </span>
    </div>
  )
}
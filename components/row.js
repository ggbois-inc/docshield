import { FcFolder } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Row(props) {
  function timeConverter(timestamp){
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(timestamp).toLocaleDateString('en-US', options);
    
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const time = new Date(timestamp).toLocaleTimeString('en-US', timeOptions);
    
    const formattedTime = `${date}, ${time}`;
    
    return formattedTime
  }
  return (
    <div class="flex flex-row border-slate-100 border-b-2 border-solid">
      <span class="flex flex-grow text-black text-xl basis-1/2 items-center space-x-4">
        <FcFolder size={32} class="ml-3" />
        <span>{props.filename}</span>
      </span>
      <span class="flex text-black text-xl basis-1/4 items-center space-x-2">
        <VscAccount class="mt-1" />
        <span>{props.meta_id}</span>
      </span>
      <span class="flex text-black text-xl basis-1/4">{timeConverter(props.created_on)}</span>
      <span class="flex  text-black text-xl basis-1/12">
        <span class="flex basis-1/2">{props.size}</span>
        <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical /></button></span>
      </span>
    </div>
  )
}
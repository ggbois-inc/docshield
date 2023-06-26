import { FcFolder } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaShareFromSquare } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";


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
    <div onClick={()=>{window.open(`https://docshieldapi.zubairmh.repl.co/api/file/${props.code}`, "_blank")}} class="flex flex-row border-slate-100 border-b-2 border-solid cursor-pointer">
      <span class="flex flex-grow text-black text-xl basis-1/2 items-center space-x-4">
        <FcDocument size={32} class="ml-3" />
        <span>{props.filename}</span>
      </span>
      <span class="flex text-black text-xl basis-1/4 items-center space-x-2">
        <VscAccount class="mt-1" />
        <span>{props.meta_id}</span>
      </span>
      <span class="flex text-black text-xl basis-1/4">{timeConverter(props.created_on)}</span>
      <span class="flex  text-black text-xl basis-1/12">
        <span class="flex basis-1/2 mr-2">{props.size}</span>
        <span class=" flex basis-1/2"> 
        <button type="" class="flex flex-col p-2 "><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
        <button type="" class="flex flex-col p-2 "><FaShareFromSquare></FaShareFromSquare></button>

        </span>
      </span>
    </div>
  )
}
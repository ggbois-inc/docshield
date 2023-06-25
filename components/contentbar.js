import { AppContext } from "@/context/AppContext";
// import Buttonmenu from "./Buttonmenu";
import { FileContext } from "@/context/FileContext";
import { FcFolder } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { BsThreeDotsVertical} from "react-icons/bs";
// import React from "react";
// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
// import ReactDOM from "react-dom";
// import { useContext, useEffect } from "react";


export default function ContentBar() {

  return (
    <div className="bg-white text-black flex flex-col p-3 grow  group  pt-28 ">
     <div class=" cursor-pointer flex flex-row justify-between border-black border-b-2 border-solid shadow-xl " >

     <span class="flex flex-grow  text-black text-xl font-bold basis-1/2 antialiased">Name</span>
     <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Owner</span>
     <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Last modified</span>
     <span class="flex  text-black text-xl basis-1/12 font-bold antialiased mr-8">File size</span>

  </div>

  
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical> 
       </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    <div class="flex flex-row py-2  border-black border-b-2 border-solid">
    <span class="flex flex-grow  text-black text-xl basis-1/2">
      <FcFolder class="ml-3 mt-1"></FcFolder>
      GG-inc Funds Report 
      </span>

     <span class="flex text-black text-xl basis-1/4">
    <VscAccount class="mt-1"></VscAccount>
    me
     </span>
     <span class="flex text-black text-xl basis-1/4">June 24,2023</span>
     <span class="flex  text-black text-xl basis-1/12">
      <span class="flex basis-1/2">...</span>
      <span class=" flex basis-1/2"> <button type="" class="ml-4 mt-1 hover:bg-slate-300 rounded-full   "><BsThreeDotsVertical>  </BsThreeDotsVertical></button></span>
     </span>
    </div>
    




    </div>


  );
}


import { AppContext } from "@/context/AppContext";
// import Buttonmenu from "./Buttonmenu";
import { FileContext } from "@/context/FileContext";
import Row from "./row";
// import React from "react";
// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
// import ReactDOM from "react-dom";
// import { useContext, useEffect } from "react";


export default function ContentBar() {

  return (
    <div className="bg-white text-black flex flex-col  gap-10 p-3 grow  group     ">
      <div class="flex flex-row justify-between">
        <div class="flex basis-1/6 bg-black w-32 h-48 justify-between  text-white">    </div>
        <div class="flex basis-1/6  bg-black w-32 h-48 justify-between  text-white" >    </div>
        <div class="flex basis-1/6 bg-black  w-32 h-48 justify-between  text-white">   </div>
        <div class="flex basis-1/6  bg-black w32 h-48  justify-between text-white">    </div>
      </div>
      <div class=" cursor-pointer flex flex-row justify-between shadow-xl border-black border-b-2" >
        <span class="flex flex-grow  text-black text-xl font-bold basis-1/2 antialiased">Name</span>
        <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Owner</span>
        <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Last modified</span>
        <span class="flex  text-black text-xl basis-1/12 font-bold antialiased mr-8">File size</span>
      </div>
      {[...Array(10)].map((x, i) =>
        <Row key={i} />
      )}
    </div>
  );
}


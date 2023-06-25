import { AppContext } from "@/context/AppContext";
// import Buttonmenu from "./Buttonmenu";
import { FileContext } from "@/context/FileContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Row from "./row";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] })
// import React from "react";
// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
// import ReactDOM from "react-dom";
// import { useContext, useEffect } from "react";


export default function ContentBar() {
  const { fs, fileup } = useContext(FileContext);
  const { account } = useContext(AppContext);
  useEffect(() => {
    if (account) {
      fileup(account);
    }
  }, [account]);
  function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };
  return (
    <div className="bg-white text-black flex flex-col  gap-10 p-3 grow  group     ">
      <div className="hidden lg:flex flex-col gap-10">
        <h1 className={`text-2xl font-bold ${inter.className}`}>Recent files</h1>
        <div class="flex-row justify-around flex">
          <div class="flex basis-1/6 bg-[#e3e3ee] w-32 h-48 rounded-lg text-black text-xl  items-center justify-center outline outline-[#FB3449] outline-2 hover:outline-cyan-400 "> <span class=" p-3 "> <img src="https://www.svgrepo.com/show/66745/pdf.svg" alt="" class=" w-32  mb-1"></img>  NewInvoice.pdf </span>  </div>
          <div class="flex basis-1/6 bg-[#f9f9fb] w-32 h-48 rounded-lg text-black text-xl shadow-slate-700 shadow-md items-center justify-center outline outline-[#FB3449] outline-2 hover:outline-cyan-400"> <span class=" p-3 "> <img src="https://www.svgrepo.com/show/66745/pdf.svg" alt="" class=" w-32  mb-1"></img>  NewInvoice.pdf </span>  </div>
          <div class="flex basis-1/6 bg-[#f9f9fb] w-32 h-48 rounded-lg text-black text-xl shadow-slate-700 shadow-md items-center justify-center outline outline-[#FB3449] outline-2 hover:outline-cyan-400 "> <span class=" p-3 "> <img src="https://www.svgrepo.com/show/66745/pdf.svg" alt="" class=" w-32  mb-1"></img>  NewInvoice.pdf </span>  </div>
          <div class="flex basis-1/6 bg-[#f9f9fb] w-32 h-48 rounded-lg text-black text-xl shadow-slate-700 shadow-md items-center justify-center outline  outline-[#FB3449] outline-2 hover:outline-cyan-400 "> <span class=" p-3 "> <img src="https://www.svgrepo.com/show/66745/pdf.svg" alt="" class=" w-32  mb-1"></img>  NewInvoice.pdf </span>  </div>
        </div>
      </div>

      <div class=" cursor-pointer flex flex-row justify-between shadow-xl border-black border-b-2" >
        <span class="flex flex-grow  text-slate-900 text-xl font-bold basis-1/2 antialiased">Name</span>
        <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Owner</span>
        <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Last modified</span>
        <span class="flex  text-black text-xl basis-1/12 font-bold antialiased mr-8">File size</span>
      </div>
      {fs &&
        fs.map((el) => {
          return (
            <Row filename={el.filename} meta_id={truncate(el.meta_id, 9)} created_on={el.created_on} size={el.file_size} key={el.cid} />
          )
        })
      }

    </div>
  );
}


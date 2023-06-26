import { AppContext } from "@/context/AppContext";
// import Buttonmenu from "./Buttonmenu";
import { FileContext } from "@/context/FileContext";
import { SearchContext } from "@/context/SearchContext";
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
  const { search } = useContext(SearchContext);
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
    <div className="bg-white text-black flex flex-col  gap-10 p-3 grow  group ">
      <div className="hidden lg:flex flex-col gap-10">
      <h1 className={`text-2xl  ml-3 font-bold ${inter.className}`}>Recent files</h1>
        <div class="flex-row justify-around flex">
        {fs && fs.length>=4 && fs.map((el, index)=>{
          if(index<=3) {
            return (
              <div class="flex basis-1/6 bg-[#f9f9fb] w-32 h-48 rounded-lg text-black text-xl shadow-slate-700 shadow-md drop-shadow-2xl items-center justify-center outline-none outline-4 hover:outline-cyan-400 hover:-translate-y-2 transition ease-in-out delay-75 "> <span class=" p-3 "> <img src="https://www.svgrepo.com/show/66745/pdf.svg" alt="" class=" w-32  mb-1"></img>  {truncate(el.filename,11)} </span>  </div>
            )
          }
        })}
        </div>
      </div>


      <div class=" cursor-pointer flex flex-row justify-between shadow-xl border-black border-b-2 pb-3" >
        <span class="flex flex-grow  text-slate-900 text-xl font-bold basis-1/2 antialiased ml-6">Name</span>
        <span class="flex text-black text-xl basis-1/4 font-bold antialiased">Owner</span>
        <span class="flex text-black text-xl basis-1/4 font-bold antialiased ml-6 ">Last modified</span>
        <span class="flex  text-black text-xl basis-1/12 font-bold antialiased mr-10">File size</span>
      </div>
      {fs &&
        fs.filter(el => el.filename.includes(search)).map(el=> {
          return (
            <Row code={el.short} filename={el.filename} meta_id={truncate(el.meta_id, 9)} created_on={el.created_on} size={el.file_size} key={el.cid} />
          )
        })
      }

    </div>
  );
}


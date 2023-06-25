import { useEffect, useRef, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { FileContext } from "@/context/FileContext";
import { FaUpload } from "react-icons/fa";
export default function Navbar() {
  const { setfs, fileup } = useContext(FileContext);
  const router = useRouter();
  const { account } = useContext(AppContext);
  useEffect(() => {
    if (!account) {
      router.push("/login");
    }
  }, [account]);
  const inputFile = useRef(null);
  function handleUpload() {
    inputFile.current.click();
  }
  function onFileChange(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
      console.log(file);
      var formData = new FormData();
      formData.append("file", file);
      let meta_id = "xyz";
      if (account) {
        meta_id = account;
      }
      axios
        .post("http://localhost:5000/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            meta_id: meta_id,
          },
        })
        .then((res) => {
          fileup(meta_id)
        });
    }
  }
  return (
    <div className="flex flex-row p-3 border-slate-800 border-b-4 gap-10 items-center">
      <div className="brand-logo w-16 h-16">
        <img src="/docshield.png"></img>
      </div>
      <div class="text-white text-2xl mr-10  ">
        DocShield
      </div>
      <div className="flex flex-row relative basis-1/2 text-black">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none min-w-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  >
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56.966 56.966"
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
      <div className="grow" />
      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={onFileChange}
        className="hidden"
      />
      <button onClick={handleUpload} className="bg-white text-black h-10 w-20 px-2 outline-4 outline-dashed outline-[#6453ef]">
        <span class="flex">
        <span class="flex-row basis-1/2">upload</span>
        <span class="flex-row basis-1/2 ml-1 mt-1"><FaUpload></FaUpload></span>
    
        </span>
       
      </button>
      <div className="w-16 h-16">
        <img className="w-16 h-16" src="/metamask.svg" />
      </div>
    </div>
  );
}

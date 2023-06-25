import { AppContext } from "@/context/AppContext";
import { FileContext } from "@/context/FileContext";
import { FcFolder } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";

// import { useContext, useEffect } from "react";

export default function ContentBar() {

  return (
    <div className="bg-white text-black flex flex-col p-3 grow">
     <div class="flex flex-row justify-between border-black border-b-2 border-solid ">

     <span class="flex flex-grow  text-black text-xl basis-1/2">Name</span>
     <span class="flex text-black text-xl basis-1/4">Owner</span>
     <span class="flex text-black text-xl basis-1/4">Last modified</span>
     <span class="flex  text-black text-xl basis-1/12">File size</span>

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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
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
     <span class="flex  text-black text-xl basis-1/12">...</span>
    </div>




    </div>


  );
}

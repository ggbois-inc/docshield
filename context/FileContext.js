import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
export const FileContext = React.createContext([]);
export default function FileProvider({ children }) {
  const [fileState, setFileState] = useState([]);
  function UpdateFile(meta_id) {
    toast("Updating Files")
    axios
      .get("https://docshieldapi.zubairmh.repl.co/api/files", {
        headers: {
          meta_id: meta_id,
        },
    }).then((res) => {
        if (res) {
          console.log("good response");
          console.log(res);
          setFileState(res.data);
        }
    });
  }
  function DeleteFile(meta_id, cid) {
    toast("Deleting File")
    axios.get("https://docshieldapi.zubairmh.repl.co/api/delete", {
      headers: {
        meta_id: meta_id,
        cid: cid
      },
    })
    .then((res)=> {
      if (res) {
        console.log("good response");
        console.log(res);
        setFileState(fileState.filter(el=>el.cid!=cid));
      }
    })
  }
  return (
    <FileContext.Provider
      value={{ fs: fileState, setfs: setFileState, fileup: UpdateFile, filedel: DeleteFile }}
    >
      {children}
    </FileContext.Provider>
  );
}

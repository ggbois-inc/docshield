import React, { useState } from "react";
import axios from "axios";
export const FileContext = React.createContext([]);
export default function FileProvider({ children }) {
  const [fileState, setFileState] = useState([]);
  function UpdateFile(meta_id) {
    axios
      .get("https://docshieldapi.zubairmh.repl.co/api/files", {
        headers: {
          meta_id: meta_id,
        },
      })
      .then((res) => {
        if (res) {
          console.log("good response");
          console.log(res);
          setFileState(res.data);
        }
      });
  }
  return (
    <FileContext.Provider
      value={{ fs: fileState, setfs: setFileState, fileup: UpdateFile }}
    >
      {children}
    </FileContext.Provider>
  );
}

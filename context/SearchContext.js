import React, {useState} from "react"
export const SearchContext = React.createContext();
export default function SearchProvider({ children }) {
    const [search, updateSearch]=useState("")
    return (
        <SearchContext.Provider
          value={{ search: search, updateSearch: updateSearch }}

        >
          {children}
        </SearchContext.Provider>
      );
}
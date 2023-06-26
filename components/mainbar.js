import ContentBar from "./contentbar";
import Sidebar from "./sidebar";
import Navbar from "./navbar"
import SearchProvider from "@/context/SearchContext";
export default function Mainbar() {
  return (
    <div className="flex flex-col grow pl-[20vw]">
      <SearchProvider>
        <Navbar />
        <ContentBar />
      </SearchProvider>
    </div>
  );
}

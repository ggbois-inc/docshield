import ContentBar from "./contentbar";
import Sidebar from "./sidebar";
import Navbar from "./navbar"
export default function Mainbar() {
  return (
    <div className="flex flex-col grow pl-[20vw]">
      <Navbar />
      <ContentBar />
    </div>
  );
}

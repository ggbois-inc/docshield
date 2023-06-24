import ContentBar from "./contentbar";
import Sidebar from "./sidebar";

export default function Mainbar() {
  return (
    <div className="flex flex-row grow">
      <Sidebar />
      <ContentBar />
    </div>
  );
}

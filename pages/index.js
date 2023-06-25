import Navbar from "@/components/navbar";
import Mainbar from "@/components/mainbar";
import Sidebar from "@/components/sidebar"
export default function Home() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-row  ">
      <Sidebar />
      <Mainbar />
    </div>
  );
}

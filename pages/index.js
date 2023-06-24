import Navbar from "@/components/navbar";
import Mainbar from "@/components/mainbar";

export default function Home() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col">
      <Navbar />
      <Mainbar />
    </div>
  );
}

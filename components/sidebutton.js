import { Inter } from "next/font/google";
const inter = Inter({ weight: "500", subsets: ["latin"] });
export default function SideButton(props) {
  let color;
  if (props.selected) {
    color = "#8819FD";
  } else {
    color = "#1E1E1E";
  }
  return (
    <button
      className={`${inter.className} bg-[#1E1E1E] hover:bg-[#6453ef] focus:border focus:border-solid focus:border-white hover:translate-x-1 transition ease-in-out delay-75 w-16 lg:w-64 h-16 lg:h-16 flex justify-center items-center gap-3 rounded-md lg:pl-7`}
    >
      <props.icon size={32} />
      <span className="hidden lg:block lg:text-lg">{props.text}</span>
      <div className="hidden lg:block lg:grow"/>
    </button>
  );
}


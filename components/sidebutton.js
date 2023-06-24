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
      style={{ backgroundColor: color }}
      className={`${inter.className} w-16 lg:w-64 h-16 lg:h-16 flex justify-center items-center gap-3 rounded-md`}
    >
      <props.icon size={32} />
      <span className="hidden lg:block">{props.text}</span>
    </button>
  );
}

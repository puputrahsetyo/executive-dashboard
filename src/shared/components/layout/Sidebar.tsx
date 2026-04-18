import ImageHome from "@/assets/icons/home(2).png";
import ImageMenu from "@/assets/icons/app.png";
import ImageSettings from "@/assets/icons/settings.png";
import ImageData from "@/assets/icons/server.png";
import { useState } from "react";


export const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const menuItems = [
    { name: "Dashboard", icon: ImageHome },
    { name: "Analytics", icon: ImageData },
    { name: "Apps", icon: ImageMenu },
    { name: "Settings", icon: ImageSettings },
  ];
  return (
    <div className="w-20 h-full bg-stone-950/10 backdrop-blur-xl p-4 flex flex-col items-center justify-center ">
      {/* <h1 className="text-lg font-semibold mb-6">Executive Dashboard</h1> */}

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`px-3 py-2 text-sm bg-zinc-200 hover:bg-zinc-400 cursor-pointer flex items-center ${selected === item.name ? "rounded-l-full" : "rounded-full"}`}
            onClick={() => setSelected(item.name)}
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
          </div>
        ))}
      </nav>
    </div>
  );
};
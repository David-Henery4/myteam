"use client"
import { useState } from "react";
import { BurgerIcon, } from "../../../public/assets";
import { Overlay,  Sidebar} from "./sidebar";

const BurgerAndSidebar = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  //
  return (
    <div>
      <BurgerIcon
        className="hover:cursor-pointer tab:hidden"
        onClick={() => {
          setIsSidebarOpen(true);
        }}
      />
      <Overlay
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default BurgerAndSidebar;

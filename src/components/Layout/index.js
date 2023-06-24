import { useState } from "react";
import { Navbar } from "../Navbar";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen max-w-screen-2xl mx-auto">
      <div
        // className="h-screen w-64 bg-gray-200"
        className={`hidden lg:block ${
          open ? "w-[230px]" : "w-28"
        } bg-white h-screen relative duration-300 border-r border-civia`}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <div className="flex-1 overflow-y-auto relative">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

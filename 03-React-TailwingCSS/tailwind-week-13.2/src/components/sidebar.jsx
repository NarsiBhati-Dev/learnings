import React, { useEffect, useState } from "react";
import ToggleIcon from "./toggle-icon";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop !== true) {
      setToggle(false);
    }
  }, [isDesktop]);

  if (!toggle) {
    return (
      <div className="fixed top-0 left-0 transition-all duration-300">
        <button
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer bg-transparent  md:text-white text-black"
        >
          <ToggleIcon />
        </button>
      </div>
    );
  }

  return (
    <div className="transition-all duration-300 bg-red-200  md:w-72 w-64 h-screen absolute md:relative">
      <button onClick={() => setToggle(!toggle)} className="cursor-pointer">
        <ToggleIcon />
      </button>
    </div>
  );
};

export default Sidebar;

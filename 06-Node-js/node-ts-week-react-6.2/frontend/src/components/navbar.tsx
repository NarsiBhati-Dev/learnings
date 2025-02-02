import React from "react";
import LogoIcon from "../assets/logo-icon";
import BarIcon from "../assets/bar-icon";

const Navbar: React.FC = () => {
  return (
    <header className="shadow-lg bg-black p-6 rounded-b-4xl md:mx-2 mx-1 items-center">
      <nav className="flex justify-between max-w-7xl m-auto">
        <div className="md:text-3xl text-xl text-white flex items-center gap-1">
          <LogoIcon className="md:w-8 md:h-8 mx-2 w-6 h-6 " /> React + TS
        </div>
        <div className="text-lg md:block hidden">
          <button className="py-2 px-4 bg-amber-500 mx-1 rounded-xl text-white hover:bg-amber-100 hover:text-black cursor-pointer">
            Sign-up
          </button>
          <button className="py-2 px-4 mx-1 cursor-pointer text-white hover:text-amber-500">
            Login
          </button>
        </div>
        <BarIcon className="md:hidden block w-6 text-white" />
      </nav>
    </header>
  );
};

export default Navbar;

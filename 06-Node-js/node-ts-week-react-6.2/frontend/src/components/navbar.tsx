import React from "react";
import LogoIcon from "../assets/logo-icon";
import BarIcon from "../assets/bar-icon";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="items-center">
      <nav className="flex justify-between max-w-4xl md:m-auto bg-black  shadow-lg rounded-b-4xl p-6 mx-1">
        <div className="md:text-3xl text-xl text-white flex items-center gap-1">
          <LogoIcon className="md:w-8 md:h-8 mx-2 w-6 h-6 " /> React + TS
        </div>
        <div className="text-lg md:block hidden">
          <button
            onClick={() => navigate("/signup")}
            className="py-2 px-4 bg-amber-500 mx-1 rounded-xl text-white hover:bg-amber-100 hover:text-black cursor-pointer"
          >
            Sign-up
          </button>

          <button
            onClick={() => navigate("/login")}
            className="py-2 px-4 mx-1 cursor-pointer text-white hover:text-amber-500"
          >
            Login
          </button>
        </div>
        <BarIcon className="md:hidden block w-6 text-white" />
      </nav>
    </header>
  );
};

export default Navbar;

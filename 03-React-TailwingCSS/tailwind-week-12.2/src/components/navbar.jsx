import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-orange-600 tracking-tighter">
        Bimal
      </h1>
      <div className="flex items-center gap-4">
        <a
          href=""
          className="text-orange-950 font-medium tracking-tight hover:text-orange-900 transition-all duration-300"
        >
          Products
        </a>
        <button className="bg-orange-600 text-white font-medium px-4 py-2 hover:bg-orange-700 transition-all duration-300 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

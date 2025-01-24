import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-blue-950 tracking-tighter">
        Narsi
      </h1>
      <div className="flex items-center gap-4">
        <a
          href=""
          className="text-blue-950 font-medium tracking-tight hover:text-blue-900 transition-all duration-300"
        >
          Projects
        </a>
        <button className="px-6 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-500 transition-all duration-300">
          Hire
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";

const _404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-center items-center w-screen h-screen flex-col gap-3">
      <h1 className="text-[250px] font-extrabold text-black">Oops!</h1>
      <h2 className="text-5xl text-gray-600">404 - PAGE NOT FOUND</h2>
      <p className="text-xl text-gray-400 tracking-normal">
        This page you are looking for might have been removed <br /> had its
        name of is temporarily unavailable{" "}
      </p>
      <button
        onClick={() => navigate("/")}
        className="text-lg font-bold text-white bg-amber-600 py-3 px-6 rounded-xl shadow-2xl hover:bg-amber-100 hover:text-black transition-all duration-300 mt-5 "
      >
        GO BACK TO HOMEPAGE
      </button>
    </div>
  );
};

export default _404;

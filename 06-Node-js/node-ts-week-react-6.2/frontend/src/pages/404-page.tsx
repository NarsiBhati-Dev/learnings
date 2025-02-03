import React from "react";
import { useNavigate } from "react-router-dom";

const _404: React.FC = () => {
  // for navigate
  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-center items-center w-screen h-screen flex-col gap-3">
      <h1 className="md:text-[250px]  text-9xl font-extrabold text-black">
        Oops!
      </h1>
      <h2 className="md:text-5xl text-2xl text-gray-600">
        404 - PAGE NOT FOUND
      </h2>
      <p className="md:text-xl text-gray-400 tracking-normal">
        This page you are looking for might have been removed <br /> had its
        name of is temporarily unavailable{" "}
      </p>
      <button
        onClick={() => navigate("/")}
        className="text-lg font-bold text-white bg-blue-600 py-3 px-6 rounded-xl shadow-2xl hover:bg-blue-100 hover:text-black transition-all duration-300 mt-5 "
      >
        GO BACK TO HOMEPAGE
      </button>
    </div>
  );
};

export default _404;

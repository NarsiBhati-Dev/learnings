import React from "react";

const Signup = () => {
  return (
    <section className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="shadow-xl rounded-lg p-5 bg-white">
        <h1 className="text-2xl font-extrabold text-center mb-4">Signup</h1>
        <div className="bg-blue-500 px-6 py-3 rounded-md shadow-lg m-2">
          <input
            type="text"
            className="outline-none bg-blue-500 text-white "
            placeholder="username"
          />
        </div>
        <div className="bg-blue-500 px-6 py-3 rounded-md shadow-lg m-2">
          <input
            type="password"
            className="outline-none bg-blue-500 text-white placeholder-white"
            placeholder="password"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 px-6 py-3 rounded-md shadow-lg m-2 text-center text-white font-extrabold hover:bg-blue-400">
            Sign-up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;

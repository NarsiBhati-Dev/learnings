import LabelInput from "@/components/label-input";
import React from "react";

const SigninPage = () => {
  return (
    <section className="bg-black h-screen w-screen flex justify-center items-center">
      <div className="bg-white p-12 rounded-md shadow-md">
        <h1 className="text-xl font-extrabold text-center mb-6">Signin</h1>
        <LabelInput placeholder="example@334" label="username" />
        <LabelInput placeholder="**********" label="password" type="password" />
        <button className="cursor-pointer text-white bg-black w-full p-2 rounded-md">
          Signin
        </button>
      </div>
    </section>
  );
};

export default SigninPage;

"use client";

import React, { useRef } from "react";
import axios from "axios";
import { Message } from "../../../node_modules/postcss/lib/result.d";

const SigninPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignin = async () => {
    const user = usernameRef.current?.value;
    const pass = passwordRef.current?.value;

    if (!user || !pass) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/signin", {
        username: user,
        password: pass,
      });

      const { message, token } = response.data;
      console.log("Message :", message, "token : ", token);

      localStorage.setItem("token", token);
    } catch (e) {
      console.log("signin error");
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="bg-white p-12 shadow-md rounded-md">
        <input
          type="text"
          ref={usernameRef}
          placeholder="example@34"
          className="px-6 py-3 bg-black text-white placeholder-gray-600 rounded-md mb-4 block"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="**********"
          className="px-6 py-3 bg-black text-white placeholder-gray-600 rounded-md block mb-4"
        />

        <div>
          <button
            className="w-full bg-black text-white px-6 py-3 rounded-md"
            onClick={handleSignin}
          >
            Signin
          </button>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;

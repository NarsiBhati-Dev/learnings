"use client";

import InputBox from "@/components/input-box";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const LoginPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useRouter();

  const Login = async () => {
    const user = usernameRef.current?.value;
    const pass = passwordRef.current?.value;

    if (!user || !pass) {
      console.log("please input");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username: user,
        password: pass,
      });

      // navigate.push()
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white px-12 py-4 rounded-md">
        <h1 className="text-black font-extrabold text-center m-2 text-2xl">
          Login
        </h1>
        <InputBox
          type="text"
          label="username"
          placeholder="example123"
          ref={usernameRef}
        />
        <InputBox
          type="password"
          label="password"
          placeholder="*****"
          ref={passwordRef}
        />
        <button
          className="px-4 py-2 bg-black text-white rounded-md mt-2 w-full"
          onClick={Login}
        >
          Login
        </button>

        <p className="text-black m-2">
          create account?{" "}
          <Link href="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;

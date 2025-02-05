"use client";

import InputBox from "@/components/input-box";
import Link from "next/link";
import React, { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const Signup = async () => {
    const user = usernameRef.current?.value;
    const pass = passwordRef.current?.value;

    if (!user || !pass) {
      console.log("please input");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        username: user,
        password: pass,
      });

      router.push("/login");
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white px-12 py-4 rounded-md">
        <h1 className="text-black font-extrabold text-center m-2 text-2xl">
          Signup
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
          className="px-4 py-2 bg-black text-white rounded-md m-2"
          onClick={Signup}
        >
          Signup
        </button>

        <p className="text-black m-2">
          Have account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;

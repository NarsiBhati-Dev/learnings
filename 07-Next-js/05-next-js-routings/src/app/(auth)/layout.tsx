import Link from "next/link";
import React from "react";

interface AuthLayoutProp {
  readonly children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProp> = ({ children }) => {
  return (
    <>
      <Link
        href="/"
        className="fixed bottom-0 right-0 bg-white px-4 py-2 m-2 rounded-md shadow-md text-black font-bold text-xs cursor-pointer"
      >
        Developed by NarsiBhati
      </Link>
      {children}
    </>
  );
};

export default AuthLayout;

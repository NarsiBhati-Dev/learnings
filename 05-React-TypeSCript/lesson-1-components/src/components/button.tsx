import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-black px-4 py-2 text-white rounded-lg m-1">
      {children}
    </button>
  );
};

export default Button;

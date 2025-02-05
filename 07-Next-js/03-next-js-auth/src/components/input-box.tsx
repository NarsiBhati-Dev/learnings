import React from "react";

interface InputBoxProps {
  type: string;
  label: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement | null>;
}

const InputBox: React.FC<InputBoxProps> = ({
  type,
  label,
  placeholder,
  ref,
}) => {
  return (
    <div className="m-2">
      <h2 className="text-black mb-2">{label}</h2>
      <div className="text-black px-4 py-2 border rounded-md border-black">
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          className="outline-none text-black"
        />
      </div>
    </div>
  );
};

export default InputBox;

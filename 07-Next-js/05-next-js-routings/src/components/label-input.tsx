import React from "react";

interface LabelInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  placeholder,
  type,
}) => {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={label} className="font-bold">
        {label}
      </label>
      <div className="p-2 bg-black rounded-md mt-1">
        <input
          id={label}
          type={type || "text"}
          placeholder={placeholder}
          className="outline-none bg-black text-white"
        />
      </div>
    </div>
  );
};

export default LabelInput;

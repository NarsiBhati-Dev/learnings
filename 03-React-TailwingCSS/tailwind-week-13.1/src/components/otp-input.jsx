import React from "react";
import { useEffect, useRef, useState } from "react";

const OtpInput = ({ number }) => {
  const inputRef = useRef([]);
  const [otps, setOtps] = useState(Array(number).fill(""));

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  function onChangeHandler(e, index) {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otps];
      newOtp[index] = value;
      setOtps(newOtp);
      if (value !== "" && index < number - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }
  }

  const onKeyDownHandler = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otps];
      if (otps[index] === "" && index > 0) {
        inputRef.current[index - 1]?.focus();
      } else {
        newOtp[index] = "";
        setOtps(newOtp);
      }
    }
  };

  return (
    <div className="bg-blue-400 rounded-2xl p-4">
      {otps.map((otp, index) => (
        <input
          type="text"
          key={index}
          value={otp}
          maxLength={1}
          onChange={(e) => onChangeHandler(e, index)}
          onKeyDown={(e) => onKeyDownHandler(e, index)}
          ref={(e) => (inputRef.current[index] = e)}
          className="bg-gray-800 m-1 w-[50px] h-[60px] outline-none text-white text-lg p-4 rounded-xl"
        />
      ))}
    </div>
  );
};

export default OtpInput;

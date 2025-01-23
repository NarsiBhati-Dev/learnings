import React, { useState } from "react";
import counterContext from "../context/counterContext";

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;

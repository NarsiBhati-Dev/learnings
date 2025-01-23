import counterContext from "../context";
import { useState } from "react";

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);
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

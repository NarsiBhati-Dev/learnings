import { useState } from "react";
import BulbContext from "../context";

export default function BulbProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <BulbContext.Provider
      value={{
        toggle: toggle,
        setToggle: setToggle,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

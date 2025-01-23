import { useContext } from "react";
import counterContext from "../context";

function Increase() {
  const { setCount } = useContext(counterContext);
  return (
    <button
      style={{
        padding: 20,
        margin: 5,
        borderRadius: 20,
        color: "white",
        backgroundColor: "black",
      }}
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      increase
    </button>
  );
}

export default Increase;

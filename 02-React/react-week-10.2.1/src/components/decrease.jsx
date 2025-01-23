import { useContext } from "react";
import counterContext from "../context";

function Decrease() {
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
        setCount((count) => count - 1);
      }}
    >
      Decrease
    </button>
  );
}

export default Decrease;

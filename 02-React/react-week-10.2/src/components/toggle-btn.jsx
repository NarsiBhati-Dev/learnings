import { useContext } from "react";
import BulbContext from "../context";

export default function ToggleBTN() {
  const { toggle, setToggle } = useContext(BulbContext);

  return (
    <button
      style={{
        backgroundColor: "black",
        padding: 20,
        color: "white",
        fontSize: 20,
        marginTop: 10,
        borderRadius: 20,
      }}
      onClick={() => {
        setToggle((toggle) => !toggle);
      }}
    >
      Toggle {toggle ? "ON" : "OFF"}
    </button>
  );
}

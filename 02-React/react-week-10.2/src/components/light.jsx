import { useContext } from "react";
import BulbContext from "../context";

export default function Light() {
  const { toggle } = useContext(BulbContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: 50,
        width: 80,
        height: 80,
        borderRadius: 20,
      }}
    >
      <div
        style={{
          backgroundColor: toggle ? "yellow" : "gray",
          padding: 30,
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        light
      </div>
    </div>
  );
}

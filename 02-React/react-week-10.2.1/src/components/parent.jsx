import Decrease from "./decrease";
import Increase from "./increase";
import { useContext } from "react";
import counterContext from "../context";

function Parent() {
  const { count } = useContext(counterContext);
  return (
    <>
      <h1>Counter : {count}</h1>
      <Increase />
      <Decrease />
    </>
  );
}

export default Parent;

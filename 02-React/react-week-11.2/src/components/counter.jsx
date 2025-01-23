// recoil
import { useRecoilValue } from "recoil";
import { counterAtom } from "../store/atoms/counter";

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <h2>Count : {count}</h2>;
}

export default Counter;

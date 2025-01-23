// styles
import { buttonStyle } from "../styles/style";

// recoil
import { useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";

const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
      Increase
    </button>
  );
};

export default Increase;

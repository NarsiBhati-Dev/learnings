// styles
import { buttonStyle } from "../styles/style";

// recoil
import { useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";

const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button style={buttonStyle} onClick={() => setCount((count) => count - 1)}>
      decrease
    </button>
  );
};

export default Decrease;

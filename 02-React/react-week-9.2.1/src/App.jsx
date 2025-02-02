import { useEffect, useState } from "react";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState(0);
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    let clock = setInterval(() => {
      setCounterVisible((v) => !v);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, []);

  useEffect(() => {
    let clock = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      {counterVisible && <Counter count={count} />}
    </div>
  );
}

export default App;

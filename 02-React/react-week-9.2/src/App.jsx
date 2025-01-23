import { useState } from "react";
import Button from "./components/button";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "50px",
            borderRadius: "20px",
            boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.5)", // Proper box-shadow value
            padding: "20px",
            width: "100px",
            height: "auto",
          }}
        >
          Count : {count}
        </p>
      </div>
      <Button type={"increment"} count={count} setCount={setCount} />
      <Button type={"decrement"} count={count} setCount={setCount} />
      <Button type={"reset"} count={count} setCount={setCount} />
    </div>
  );
}

export default App;

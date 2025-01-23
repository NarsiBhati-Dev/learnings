import { useState } from "react";
import Navbar from "./components/navbar";
import { useEffect } from "react";

function App() {
  const [notification, setNotification] = useState(1);

  useEffect(() => {
    const clock = setInterval(() => {
      setNotification((notification) => notification + 1);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, [notification]);

  return (
    <>
      <Navbar notification={notification} />
    </>
  );
}

export default App;

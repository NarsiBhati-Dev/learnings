import { useEffect, useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const clockRef = useRef();

  const buttonStyle = {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
  };

  const mainStyle = {
    boxShadow: "0,0,0,0.4",
    padding: 20,
    backgroundColor: "gray",
    borderRadius: 10,
    width: 280,
  };

  const clockStyle = {
    margin: 10,
    width: 210,
    boxShadow: "0,0,0,0.4",
    padding: 20,
    backgroundColor: "black",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  };

  function startTimer() {
    let clock = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    clockRef.current = clock;
  }

  function stopTimer() {
    clearInterval(clockRef.current);
  }

  return (
    <div style={mainStyle}>
      <div style={clockStyle}>
        <div>clock</div> <br />
        <div>{timer}</div>
      </div>
      <button onClick={startTimer} style={buttonStyle}>
        start timer
      </button>
      <button onClick={stopTimer} style={buttonStyle}>
        stop timer
      </button>
    </div>
  );
}

export default App;

// ---------------------------------
// const inputRef = useRef(null);

// function handleFocus() {
//   console.log(inputRef.current.value);
// }

// signup
// <br />
// <input ref={inputRef} onChange={handleFocus} type="text" /> <br />
// <input type="text" /> <br />
// <button onClick={handleFocus}>submit</button>

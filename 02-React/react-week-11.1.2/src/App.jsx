// import { useState } from "react";
// import usePrevious from "./hooks/usePrevious";
import { useEffect, useState } from "react";

import {
  bodyStyle,
  buttonStyle,
  navbarStyle,
  footerStyle,
  inputStyle,
} from "./styles/style";

import useDebounce from "./hooks/useDebounce";

function App() {
  // const [value, setValue] = useState(0);
  // let previousValue = usePrevious(value);

  const sendBackendRequest = (debounceValue) => {
    console.log("request sended to backend : " + debounceValue);
  };

  const [value, setValue] = useState("");

  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    if (debounceValue != "") {
      sendBackendRequest(debounceValue);
    }
  }, [debounceValue]);

  return (
    <>
      <div style={navbarStyle}>Navbar</div>
      <div style={bodyStyle}>
        {/* <div style={{ margin: 20 }}>Current : {value} </div>
        <div style={{ margin: 20 }}>Previous : {previousValue}</div> */}

        <input
          style={inputStyle}
          type="text"
          placeholder="Search here"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={footerStyle}>
        <button style={buttonStyle} onClick={() => setValue(value + 1)}>
          1
        </button>
        <button style={buttonStyle} onClick={() => setValue(value + 1)}>
          2
        </button>
        <button style={buttonStyle} onClick={() => setValue(value + 1)}>
          3
        </button>
      </div>
    </>
  );
}

export default App;

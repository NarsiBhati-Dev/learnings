import { useRef, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
// import useCounter from "./hooks/useCounter";
// import { usePostTitle, useFetch } from "./hooks/useFetch";
// import { usePrev } from "./hooks/usePrev";

function App() {
  // const { count, increaseCount } = useCounter();
  // const title = usePostTitle();

  const buttonStyle = {
    padding: 10,
    margin: 10,
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
  };

  // const [currentPost, setCurrentPost] = useState(1);

  // const { data, loading } = useFetch(
  //   `https://jsonplaceholder.typicode.com/todos/${currentPost}`
  // );

  // const [page, setPage] = useState(1);
  // const prev = usePrev(page);

  function sentDataToBackend() {
    console.log("data sended to backend");
  }

  // const searchRef = useRef();
  // const [output, setOutput] = useState();
  // let clockRef = useRef();

  const debounceFn = useDebounce(sentDataToBackend);

  return (
    <>
      {/* <div>output : {output}</div> */}

      <input
        type="text"
        name="search"
        id="search"
        // ref={searchRef}
        onChange={debounceFn}
      />
    </>
  );
}

export default App;

{
  /* <h1>prev page : {prev}</h1>
      <h1>current page : {page}</h1>
      <button style={buttonStyle} onClick={() => setPage(1)}>
        page : 1
      </button>
      <button style={buttonStyle} onClick={() => setPage(2)}>
        page : 2
      </button>
      <button style={buttonStyle} onClick={() => setPage(3)}>
        page : 3
      </button> */
}

{
  /* {loading ? (
        <div>loading...</div>
      ) : (
        <div> Data : {JSON.stringify(data)} </div>
      )}
      <button style={buttonStyle} onClick={() => setCurrentPost(1)}>
        1
      </button>
      <button style={buttonStyle} onClick={() => setCurrentPost(2)}>
        2
      </button>
      <button style={buttonStyle} onClick={() => setCurrentPost(3)}>
        3
      </button> */
}

export default function Button(props) {
  const { type, count, setCount } = props;

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    if (count == 0) {
      return;
    }
    setCount((count) => count - 1);
  }
  function reset() {
    if (count == 0) {
      return;
    }
    setCount(0);
  }
  return (
    <button
      style={{
        textAlign: "center",
        marginTop: "50px",
        marginLeft: "10px",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
      }}
      onClick={() => {
        if (type === "increment") {
          increment();
        } else if (type === "decrement") {
          decrement();
        } else {
          reset();
        }
      }}
    >
      {type}
    </button>
  );
}

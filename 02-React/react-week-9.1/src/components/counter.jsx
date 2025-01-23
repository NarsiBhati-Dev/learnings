const Counter = (props) => {
  const buttonStyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "20px",
    fontSize: "16px",
    marginTop: "50px",
  };

  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => props.setCount(props.count + 1)}
      >
        counter {props.count}{" "}
      </button>
    </>
  );
};

export default Counter;

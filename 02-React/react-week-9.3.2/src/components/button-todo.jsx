export default function ButtonTodo({ title, currentTodo, setCurrentTodo }) {
  const buttonStyles = {
    padding: 24,
    borderRadius: 20,
    margin: 5,
    backgroundColor: "Black",
    fontSize: 20,
  };

  return (
    <>
      <button
        style={{
          ...buttonStyles,
          color: currentTodo === title ? "#4184f3" : "white",
        }}
        onClick={() => setCurrentTodo(title)}
      >
        Todo #{title}
      </button>
    </>
  );
}

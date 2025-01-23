import { useState } from "react";
import TodoCard from "./components/todo-card";

const App = () => {
  const buttonStyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "20px",
    fontSize: "16px",
    marginTop: "50px",
  };

  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "do gym daily",
      status: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "title",
        description: "description",
        status: true,
      },
    ]);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {todos.map((todo) => (
          <TodoCard
            title={todo.title}
            description={todo.description}
            status={todo.status}
          />
        ))}

        <br />

        <button style={buttonStyle} onClick={addTodo}>
          add todo
        </button>
      </div>
    </>
  );
};

export default App;

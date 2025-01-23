import { useEffect, useState } from "react";
import ButtonTodo from "./components/button-todo";

function App() {
  const [currentTodo, setCurrentTodo] = useState(1);
  const [todo, setTodo] = useState("");
  const [isData, setIsData] = useState(true);

  const buttonTodo = [1, 2, 3, 4];

  useEffect(() => {
    const getTodo = async () => {
      try {
        setIsData(false);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/" + currentTodo
        );
        const data = await response.json(); // make sure you always put () after .json
        setTodo(data.title || "No title found");
        setIsData(true);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    getTodo();
  }, [currentTodo]);

  return (
    <div>
      {buttonTodo.map((title, index) => (
        <ButtonTodo
          key={index}
          title={title}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ))}

      <br />

      {!isData ? <div> ...loading </div> : <div>{todo}</div>}
    </div>
  );
}

export default App;

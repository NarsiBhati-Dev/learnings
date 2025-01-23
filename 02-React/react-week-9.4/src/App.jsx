// import Card from "./components/card";
import Todo from "./components/todo";

function App() {
  const todos = [
    {
      title: "go to the gym",
      done: false,
    },
    {
      title: "make notes",
      done: true,
    },
  ];
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} done={todo.done} />
      ))}
    </div>
  );
}

export default App;

{
  /* <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the Card.</p>
      </Card>
      <Card>
        <h2>Another card</h2>
        <p>This card has different content</p>
      </Card> */
}

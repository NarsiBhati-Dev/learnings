import TodoCard from "@/components/todo-card";
import axios from "axios";
import React from "react";

const getTodo = async () => {
  const response = await axios.get("http://localhost:3001/todo");
  return response.data;
};

interface TodoMapProps {
  id: string;
  title: string;
  description: string;
  complete: boolean;
}

const TodoPage = async () => {
  const data = await getTodo();

  return (
    <section className="flex justify-center items-center h-screen w-screen">
      {" "}
      {data.todos.map((todo: TodoMapProps) => (
        <TodoCard
          key={todo.id}
          user={data.user}
          title={todo.title}
          description={todo.description}
          complete={todo.complete}
        />
      ))}
    </section>
  );
};

export default TodoPage;

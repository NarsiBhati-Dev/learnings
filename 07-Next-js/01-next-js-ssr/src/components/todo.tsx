import React from "react";

interface TodoProp {
  title: string;
}

const Todo = ({ title }: TodoProp) => {
  return (
    <div>
      <h1 className="bg-black text-white font-bold px-4 py-2 rounded-lg m-2">
        {title}
      </h1>
    </div>
  );
};

export default Todo;

import React from "react";

interface TodoProps {
  user: string;
  title: string;
  description: string;
  complete: boolean;
}

const TodoCard: React.FC<TodoProps> = ({
  user,
  title,
  description,
  complete,
}) => {
  return (
    <div className="shadow-xl bg-white p-4 rounded-md text-black">
      <h1 className="font-extrabold">{user}</h1>
      <div className="border-black border-2 rounded-md m-3 p-4">
        <h2 className="font-extrabold text-2xl">{title}</h2>
        <p className="text-gray-500">{description}</p>
        {complete ? (
          <p className="text-green-500">done</p>
        ) : (
          <p className="text-red-500">not done</p>
        )}
      </div>
    </div>
  );
};

export default TodoCard;

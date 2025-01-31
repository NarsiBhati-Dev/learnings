import express from "express";
import chalk from "chalk";
import { type Request, type Response } from "express";
import { randomUUID } from "crypto";

interface Todo {
  id: string;
  title: string;
  description: string;
  complete: boolean;
}

interface User {
  user: string;
  todos: Todo[];
}

const app = express();
app.use(express.json());

app.get("/todo", (req: Request, res: Response) => {
  const todo: User = {
    user: "user-1",
    todos: [
      {
        id: randomUUID(),
        title: "Learn TypeScript",
        description: "Work through the TypeScript docs",
        complete: false,
      },
    ],
  };

  res.json(todo);
});

app.post("/todos", (req: Request, res: Response) => {
  const { title, description }: { title: string; description: string } =
    req.body;

  const newTodo: Todo = {
    id: randomUUID(),
    title,
    description,
    complete: false,
  };

  res.status(201).json(newTodo);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Todo API!");
});

const server = app.listen(3000, () => {
  console.log("[ server ] : ", chalk.green.bold("ON"));
});

//This checks the server on and off and calls a function when the server shutdown
process.on("SIGINT", () => {
  server.close(() => {
    console.log("[ server ] : ", chalk.red.bold("OFF"));
    process.exit(0);
  });
});

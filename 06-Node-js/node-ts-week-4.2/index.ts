import express from "express";
import { Status } from "./enum";
const app = express();

app.use(express.json());

interface Todo {
  title: string;
  description: string;
  status: boolean;
}

let todos = new Map<string, Todo>();

function setData(id: string, todo: Todo) {
  if (!todo.title || !todo.description || todo.status === undefined) {
    return false;
  }
  todos.set(id, todo);
  return true;
}

app.get("/", (_req, res) => {
  res.json({
    message: "Hello, World",
  });
});

app.post("/create-todo", (req, res) => {
  const { title, description, status }: Todo = req.body;
  const id: string = crypto.randomUUID();
  const isAdd: boolean = setData(id, { title, description, status });

  if (!isAdd) {
    res.status(Status.BadRequest).send("error in body");
    return;
  }

  res.status(Status.Ok).send("todo created");
});

app.get("/get-todos", (_req, res) => {
  if (todos.size == 0) {
    res.status(Status.NotFounded).json({
      message: "no todos in database",
    });
    return;
  }
  res.status(Status.Ok).json(Object.fromEntries(todos));
});

app.get("/get-todo/:id", (req, res) => {
  const id: string = req.params.id;
  const todo = todos.get(id);
  if (!todo) {
    res.status(Status.NotFounded).json({
      message: `no todo found with ID: ${id}`,
    });
    return;
  }
  res.status(Status.Ok).json(todo);
});

app.patch("/update-todo/:id", (req, res) => {
  const id = req.params.id;
  const { status }: { status: boolean } = req.body;

  let todo = todos.get(id);
  if (!todo) {
    res.status(Status.NotFounded).json({
      message: "todo not found",
    });
    return;
  }

  todo.status = status;
  todos.set(id, todo);
  res.status(Status.Ok).json({
    message: "todo updated",
    todo,
  });
});

app.listen(3000, () => {
  console.log("server is serving on http://localhost:3000");
});
